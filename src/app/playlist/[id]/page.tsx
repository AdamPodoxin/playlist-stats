const PlaylistPage = ({ params }: { params: { id: string } }) => {
	return (
		<>
			<p>{params.id}</p>
		</>
	);
};

export default PlaylistPage;
