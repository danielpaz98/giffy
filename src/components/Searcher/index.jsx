import { useState, useEffect, useReducer } from "react";
import { useLocation } from "wouter";
import { RATING_SYSTEM } from "~/constants";
import { useForm } from "./hooks";

export default function Searcher({ initialKeyword, initialRating }) {
	const { state, methods } = useForm({ initialKeyword, initialRating });
	const [route, setRoute] = useLocation();

	const { keyword, rating } = state;
	const { updateKeyword, updateRating } = methods;
	const ratings = RATING_SYSTEM;

	const handleChangeKeyword = (e) => updateKeyword(e.target.value);
	const handleChangeRating = (e) => updateRating(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (keyword && rating) {
			setRoute(`/search/${keyword}/${rating}`);
		}
	};

	// const [form, setForm] = useState({ search: decodeURI(initialKeyword), rating: initialRating });

	// const handleChange = (e) => {
	// 	const { value, name } = e.target;
	// 	setForm((prevForm) => ({ ...prevForm, [name]: value }));
	// };

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	const { search, rating } = form;

	// 	if (search && rating) {
	// 		setRoute(`/search/${search}/${rating}`);
	// 	}
	// };

	return (
		<div className="main-search">
			<form onSubmit={handleSubmit} className="form-search" autoComplete="off">
				<select name="rating" className="select-search" onChange={handleChangeRating} value={rating}>
					{ratings.map((rating) => (
						<option key={rating} value={rating}>
							{rating}
						</option>
					))}
				</select>

				<input
					name="search"
					className="input-search"
					type="text"
					placeholder="Search Gif..."
					onChange={handleChangeKeyword}
					value={keyword}
				/>
			</form>
		</div>
	);
}
