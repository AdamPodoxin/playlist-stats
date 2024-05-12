import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<main className="flex min-h-screen flex-col items-center p-8 gap-4">
			<App />
		</main>
	</React.StrictMode>
);
