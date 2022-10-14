import './App.scss';
import techbooks from './data/techbooks.json';

function App() {
	return (
		<div className="App">
			<h1>{techbooks.length} Tech Books</h1>
			<div className="books">
				{techbooks.map((techbook, index) => {
					return (
						<div className="book" key={index}>
							<div className="title">{techbook.title}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
