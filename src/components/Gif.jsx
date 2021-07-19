import GifLink from "~/components/GifLink";
import { Link } from "wouter";
// CUSTOM HOOKS
import useSelectGif from "~/hooks/useSelectGif";

export default function Gif(props) {
	const { selectGif } = useSelectGif();
	const { id, title, image } = props;

	const handleSelectGif = () => selectGif({ ...props });

	return (
		<div className="gif-item">
			<GifLink className="gif-link" to={`/gif/${id}`} onClick={handleSelectGif}>
				<h4 className="gif-item-title">{title}</h4>
				<img className="gif-item-img" src={image} alt={title} loading="lazy" />
			</GifLink>
		</div>
	);
}
