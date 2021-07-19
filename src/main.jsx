import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "~/assets/css/main.css";

const app = document.getElementById("app");

render(
	<StrictMode>
		<App />
	</StrictMode>,
	app
);
