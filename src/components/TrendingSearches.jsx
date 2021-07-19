import { useState, useEffect } from "react";
import getTrendingSearches from "~/services/getTrendingSearches";
import Category from "~/components/Category";

export default function TrendingSearches() {
	const [trends, setTrends] = useState([]);

	useEffect(() => getTrendingSearches().then((data) => setTrends(data)), []);

	return (
		<div className="trending-searches">
			<Category name="Tendencias" items={trends} />
		</div>
	);
}
