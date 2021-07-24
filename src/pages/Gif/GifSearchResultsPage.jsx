// COMPONENTS
import CustomSeo from "~/components/CustomSeo";
import SearchResults from "~/components/SearchResults";
import TrendingSearches from "~/components/TrendingSearches";
import Searcher from "~/components/Searcher";
export default function GifSearchResultsPage({ params }) {
	const { keyword, rating } = params;
	const title = decodeURI(keyword);

	return (
		<>
			<CustomSeo title={title} />
			<Searcher initialKeyword={keyword} initialRating={rating} />

			<div className="results-section">
				<SearchResults />
				<TrendingSearches />
			</div>
		</>
	);
}
