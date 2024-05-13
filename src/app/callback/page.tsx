"use client";

import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { spotify } from "@/constants";

const CallbackPage = () => {
	const router = useRouter();

	const getAuthorizationCode = useCallback(async () => {
		const urlParams = new URLSearchParams(window.location.search);

		const error = urlParams.get("error");
		if (error) {
			return;
		}

		const code = urlParams.get("code");
		if (!code) {
			return;
		}

		const codeVerifier = Cookies.get("code_verifier");
		if (!codeVerifier) {
			return;
		}

		const body = new URLSearchParams({
			client_id: spotify.clientId,
			grant_type: "authorization_code",
			code,
			redirect_uri: `${spotify.redirectUriBase}/callback`,
			code_verifier: codeVerifier,
		});

		const payload = {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},

			body,
		};

		const responseJson = await fetch(
			"https://accounts.spotify.com/api/token",
			payload
		);

		const response = await responseJson.json();
		if (!response.access_token) {
			return;
		}

		Cookies.set("access_token", response.access_token);

		router.push("/");
	}, [router]);

	useEffect(() => {
		getAuthorizationCode();
	}, [getAuthorizationCode]);

	return <></>;
};

export default CallbackPage;
