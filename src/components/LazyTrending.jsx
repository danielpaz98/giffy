import { lazy, Suspense } from "react";
// CUSTOM HOOKS
import useNearScreen from "~/hooks/useNearScreen";
// COMPONENTS
import Spinner from "~/components/Spinner";
const TrendingSearches = lazy(() => import("./TrendingSearches"));

export default function LazyTrending() {
	const { isNearScreen, ref } = useNearScreen();

	return (
		<div ref={ref} className="lazy-trending">
			<Suspense fallback={<Spinner />}>{isNearScreen ? <TrendingSearches /> : null}</Suspense>
		</div>
	);
}
