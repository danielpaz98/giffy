import { useEffect } from "react";
import { useRoute } from "wouter";
// COMPONENTS
import Spinner from "~/components/Spinner";
import GifsList from "~/components/GifsList";
// CUSTOM HOOKS
import useGifs from "~/hooks/useGifs";
import useNearScreen from "~/hooks/useNearScreen";

export default function SearchResults() {
	const [match, params] = useRoute("/search/:keyword");
	const keyword = match ? params.keyword : null;
	const { loading, gifs, nextPage, isLastSearch } = useGifs(keyword);
	const { isNearScreen, ref } = useNearScreen({ once: false });
	const title = keyword ? decodeURI(keyword) : isLastSearch ? "Última Búsqueda" : "Gifs Random";

	const handleNextPage = () => nextPage();

	useEffect(() => isNearScreen && handleNextPage(), [isNearScreen]);

	if (loading) {
		return (
			<div className="search-results">
				<Spinner />
			</div>
		);
	}

	return (
		<div className="search-results">
			<h3 className="search-results-title">{title}</h3>
			<GifsList gifs={gifs} />
			<div id="visor" ref={ref}></div>
		</div>
	);
}
