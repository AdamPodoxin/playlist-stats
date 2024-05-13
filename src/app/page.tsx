"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
	const router = useRouter();

	useEffect(() => {
		const spotifyAccessToken = Cookies.get("access_token");
		if (!spotifyAccessToken) {
			router.push("/login");
		}
	}, [router]);

	return (
		<>
			<p>Home</p>
		</>
	);
};

export default Home;
