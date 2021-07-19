// COMPONENTS
import CustomSeo from "~/components/CustomSeo";
import SearchResults from "~/components/SearchResults";
import LazyTrending from "~/components/LazyTrending";
import Searcher from "~/components/Searcher";
// CUSTOM HOOKS
import useGifs from "~/hooks/useGifs";

export default function HomePage() {
	return (
		<>
			<CustomSeo title="Home Page" />
			<Searcher />

			<div className="results-section">
				<SearchResults />
				<LazyTrending />
			</div>
		</>
	);
}
