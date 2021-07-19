import { API_URL, API_KEY } from "~/services/settings";

export default async function getTrendingSearches() {
	const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
	const res = await fetch(apiURL);
	const { data } = await res.json();

	return data;
}
