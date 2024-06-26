"use client";

import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";
import {
	generateCodeChallenge,
	generateCodeVerifier,
} from "@/utils/codeChallenge";
import { useRouter } from "next/navigation";
import { spotify } from "@/constants";

const LoginPage = () => {
	const router = useRouter();

	const redirectToSpotifyAuthPage = useCallback(async () => {
		const codeVerifier = generateCodeVerifier();
		const codeChallenge = await generateCodeChallenge(codeVerifier);

		Cookies.set("code_verifier", codeVerifier);

		const params = {
			response_type: "code",
			client_id: spotify.clientId,
			scope: spotify.scope,
			code_challenge_method: "S256",
			code_challenge: codeChallenge,
			redirect_uri: `${spotify.redirectUriBase}/callback`,
		};

		const authUrl = new URL("https://accounts.spotify.com/authorize");
		authUrl.search = new URLSearchParams(params).toString();

		router.push(authUrl.toString());
	}, [router]);

	useEffect(() => {
		redirectToSpotifyAuthPage();
	}, [redirectToSpotifyAuthPage]);

	return <></>;
};

export default LoginPage;
