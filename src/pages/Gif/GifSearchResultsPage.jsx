// COMPONENTS
import CustomSeo from "~/components/CustomSeo";
import SearchResults from "~/components/SearchResults";
import TrendingSearches from "~/components/TrendingSearches";
import Searcher from "~/components/Searcher";

export default function GifSearchResultsPage({ params }) {
	const title = decodeURI(params.keyword);

	return (
		<>
			<CustomSeo title={title} />
			<Searcher />

			<div className="results-section">
				<SearchResults />
				<TrendingSearches />
			</div>
		</>
	);
}
