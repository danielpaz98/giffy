import { Route } from "wouter";
// PAGES
import HomePage from "~/pages/HomePage";
import GifSearchResultsPage from "~/pages/Gif/GifSearchResultsPage";
import GifDetailPage from "~/pages/Gif/GifDetailPage";
import ErrorPage from "~/pages/ErrorPage";
// PROVIDER CONTEXTS
import { GifContextProvider } from "~/context/GifContext";

export default function App() {
	return (
		<main>
			<div className="container">
				<GifContextProvider>
					<Route exact component={HomePage} path="/" />
					<Route exact component={GifSearchResultsPage} path="/search/:keyword" />
					<Route exact component={GifDetailPage} path="/gif/:id" />
				</GifContextProvider>

				<Route exact component={ErrorPage} path="/error/:error" />
			</div>
		</main>
	);
}
