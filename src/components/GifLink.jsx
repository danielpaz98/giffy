import { useLocation } from "wouter";

export default function GifLink(props) {
	const [location, setLocation] = useLocation();

	const handleOnclick = (e) => {
		e.preventDefault();
		if (props.onClick) props.onClick();
		setLocation(props.to);
	};

	return (
		<a className={props.className} href={props.to} onClick={handleOnclick}>
			{props.children}
		</a>
	);
}
