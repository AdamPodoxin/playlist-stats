"use client";

import Cookies from "js-cookie";
import { useCallback, useEffect } from "react";
import useGetTracks from "@/hooks/useGetPlaylistTracks";

const PlaylistPage = ({ params }: { params: { id: string } }) => {
	const spotifyAccessToken = Cookies.get("access_token");

	const { tracks, getTracks } = useGetTracks({
		playlistId: params.id,
		accessToken: spotifyAccessToken ?? "",
	});

	useEffect(() => {
		getTracks();
	}, [getTracks]);

	return (
		<>
			<p>
				{tracks.map((track) => {
					return <div key={track.id ?? track.name}>{track.name}</div>;
				})}
			</p>
		</>
	);
};

export default PlaylistPage;
