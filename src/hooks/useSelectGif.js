import { useContext, useState } from "react";
import GifContext from "~/context/GifContext";

export default function useGif() {
	const { setGif } = useContext(GifContext);

	return { selectGif: setGif };
}
