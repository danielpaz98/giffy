import { useEffect } from "react";
import { Redirect } from "wouter";

// COMPONENTS
import CustomSeo from "~/components/CustomSeo";
import GifDetail from "~/components/GifDetail";
import Spinner from "~/components/Spinner";
// CUSTOM HOOKS
import useSelectedGif from "~/hooks/useSelectedGif";

export default function GifDetailPage({ params }) {
	const { id } = params;
	const { gif, loading, error } = useSelectedGif({ id });

	if (error) {
		return <Redirect to="/error/404" />;
	}

	if (loading) {
		return (
			<div className="gif-detail">
				<Spinner />
			</div>
		);
	}

	return (
		<>
			<CustomSeo title={gif.title} />
			<GifDetail {...gif} />
		</>
	);
}
