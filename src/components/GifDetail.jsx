export default function GifDetail(props) {
	const { id, title, image } = props;

	return (
		<div className="gif-detail">
			<h4 className="gif-detail-title">{title}</h4>
			<img className="gif-detail-img" src={image} alt={title} loading="lazy" />
		</div>
	);
}
