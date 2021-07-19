import { useState, useEffect, useContext } from "react";
// SERVICES
import getGif from "~/services/getGif";
// CONTEXTS
import GifContext from "~/context/GifContext";

export default function useGif({ id }) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const { gif } = useContext(GifContext);
	const [selectedGif, setSelectedGif] = useState(gif);

	useEffect(() => {
		if (!Object.values(selectedGif).length) {
			setLoading(true);

			getGif({ id })
				.then((gif) => {
					setLoading(false);
					setSelectedGif(gif);
				})
				.catch((err) => {
					setLoading(false);
					setError(true);
				});
		}
	}, []);

	return { gif: selectedGif, loading, error };
}
