import "~/assets/css/spinner.css";
// COMPONENTS
import CustomSeo from "~/components/CustomSeo";

export default function Spinner() {
	return (
		<>
			<CustomSeo title="Cargando..." />

			<div className="lds-roller">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</>
	);
}
