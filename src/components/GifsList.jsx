import { memo } from "react";
import Gif from "~/components/Gif";

function GifsList({ gifs }) {
	return (
		<div className="gifs-list">
			{gifs.map((gif, index) => (
				<Gif key={gif.id + index} {...gif} />
			))}
		</div>
	);
}

export default memo(GifsList);
