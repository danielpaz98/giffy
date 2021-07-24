import { useReducer } from "react";

export function useForm({ initialKeyword = "", initialRating = "g" }) {
	const initialState = {
		keyword: decodeURI(initialKeyword),
		rating: initialRating,
	};

	const actions = {
		UPDATE_KEYWORD(prevState, payload) {
			return { ...prevState, keyword: payload };
		},
		UPDATE_RATING(prevState, payload) {
			return { ...prevState, rating: payload };
		},
	};

	const reducer = (state, { type, payload }) => {
		const action = actions[type];
		return action ? action(state, payload) : state;
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	const methods = {
		updateKeyword: (payload) => dispatch({ type: "UPDATE_KEYWORD", payload }),
		updateRating: (payload) => dispatch({ type: "UPDATE_RATING", payload }),
	};

	return { state, methods };
}
