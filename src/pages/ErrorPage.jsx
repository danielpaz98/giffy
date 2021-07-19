import { Redirect } from "wouter";

export default function ErrorPage({ params }) {
	const { error } = params;

	if (error === "404") {
		return <div>Error 404</div>;
	}

	return <Redirect to="/" />;
}
