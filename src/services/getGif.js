import { API_URL, API_KEY } from "~/constants";

export default async function getGif({ id }) {
	const apiURL = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
	const res = await fetch(apiURL);
	const { data } = await res.json();
	const gif = { ...data, image: data.images.original.url };

	return gif;
}
