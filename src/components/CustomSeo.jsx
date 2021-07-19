import { Helmet } from "react-helmet";

export default function CustomSeo(props) {
	const { title, additionalMetaTags = [], additionalMetaLinks = [], ...metaPage } = props;

	return (
		<Helmet>
			{title && <title>{title}</title>}
			<meta {...metaPage} />

			{additionalMetaTags.map((properties, index) => (
				<meta key={index} {...properties} />
			))}

			{additionalMetaLinks.map((properties, index) => (
				<meta key={index} {...properties} />
			))}
		</Helmet>
	);
}
