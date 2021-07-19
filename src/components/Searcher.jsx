import { useState } from "react";
import { useLocation } from "wouter";

export default function Searcher() {
	const [searchVal, setSearchVal] = useState("");
	const [route, setRoute] = useLocation();

	const handleChange = (e) => setSearchVal(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (searchVal) {
			setRoute(`/search/${searchVal}`);
			setSearchVal("");
		}
	};

	return (
		<div className="main-search">
			<form onSubmit={handleSubmit} className="form-search" autoComplete="off">
				<input
					className="input-search"
					type="text"
					placeholder="Search Gif..."
					onChange={handleChange}
					value={searchVal}
				/>
			</form>
		</div>
	);
}
