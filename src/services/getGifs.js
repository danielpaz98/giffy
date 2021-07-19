import { API_URL, API_KEY } from "~/services/settings";

export default async function getGifs({ keyword, limit = 10, page = 0 } = {}) {
	const offset = page * limit;
	const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${offset}&rating=g&lang=en`;
	const res = await fetch(apiURL);
	const { data } = await res.json();
	const gifs = data.map((item) => ({ ...item, image: item.images.original.url }));

	return gifs;
}
