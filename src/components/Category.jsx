import { Link } from "wouter";

export default function Category({ name, items }) {
	return (
		<div className="category">
			<h3 className="category-title">{name}</h3>
			<div className="category-items">
				{items.map((name, index) => (
					<Link to={`/search/${name}`} key={index} className="category-item">
						{name}
					</Link>
				))}
			</div>
		</div>
	);
}
