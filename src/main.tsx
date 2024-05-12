import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import CallbackPage from "./pages/Callback";
import PlaylistStatsPage, {
	loader as playlistLoader,
} from "./pages/PlaylistStats";

import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/callback",
		element: <CallbackPage />,
	},
	{
		path: "/playlist/:playlistId",
		element: <PlaylistStatsPage />,
		loader: playlistLoader,
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<main className="flex min-h-screen flex-col items-center p-8 gap-4">
			<RouterProvider router={router} />
		</main>
	</React.StrictMode>
);
