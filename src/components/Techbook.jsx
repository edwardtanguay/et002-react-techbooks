export const Techbook = ({techbook}) => {
	return (
		<div className="book">
			<div className="title">{techbook.title}</div>
			<div className="description">{techbook.description}</div>
		</div>
	);
};
