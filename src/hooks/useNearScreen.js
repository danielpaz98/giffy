import { useState, useRef, useEffect } from "react";

export default function useNearScreen({ distance = "100px", once = true } = {}) {
	const [isNearScreen, setIsNearScreen] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const elementRef = ref.current;

		const onChange = (entries, observer) => {
			const { isIntersecting } = entries[0];

			if (isIntersecting) {
				setIsNearScreen(true);
				if (once) observer.disconnect();
			} else {
				if (!once) setIsNearScreen(false);
			}
		};

		if (elementRef) {
			const observer = new IntersectionObserver(onChange, { rootMargin: distance });
			observer.observe(elementRef);

			return () => observer.disconnect();
		}
	});

	return { isNearScreen, ref };
}
