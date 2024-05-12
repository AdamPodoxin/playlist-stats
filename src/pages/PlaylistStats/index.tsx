import { useLoaderData } from "react-router-dom";

type LoaderParams = {
	params: {
		playlistId: string;
	};
};

type LoaderData = {
	playlistId: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async (loaderProps: unknown) => {
	// TEMP
	const { params } = loaderProps as LoaderParams;
	const playlistId = params.playlistId;
	return { playlistId };
};

const PlaylistStatsPage = () => {
	const loaderData = useLoaderData() as LoaderData;

	return (
		<>
			<p>{loaderData.playlistId}</p>
		</>
	);
};

export default PlaylistStatsPage;
