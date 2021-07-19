import { useState, useContext, useEffect } from "react";
// SERVICES
import getGifs from "~/services/getGifs";

export default function useGifs(keyword) {
	const [gifs, setGifs] = useState([]);
	const [loading, setLoading] = useState(false);
	const [loadingNextPage, setLoadingNextPage] = useState(false);
	const [page, setPage] = useState(0);

	const lastSearch = localStorage.getItem("last_search");
	const isLastSearch = lastSearch ? true : false;
	const keywordToUse = keyword || lastSearch;

	useEffect(() => {
		setLoading(true);

		getGifs({ keyword: keywordToUse }).then((data) => {
			setGifs(data);
			setLoading(false);
			if (keywordToUse) localStorage.setItem("last_search", keywordToUse);
		});
	}, [keyword]);

	const nextPage = () => {
		setPage((prevPage) => prevPage + 1);
	};

	useEffect(() => {
		if (page === 0) return;

		setLoadingNextPage(true);

		getGifs({ keyword: keywordToUse, page }).then((nextGifs) => {
			setGifs((prevGifs) => [...prevGifs, ...nextGifs]);
			setLoadingNextPage(false);
		});
	}, [page]);

	return { loading, loadingNextPage, nextPage, gifs, isLastSearch };
}
