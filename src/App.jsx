import './App.scss';
import techbooks from './data/techbooks.json';
import { Techbook } from './components/Techbook';

function App() {
	return (
		<div className="App">
			<h1>{techbooks.length} Tech Books</h1>
			<div className="books">
				{techbooks.map((techbook, index) => {
					return <Techbook key={index} techbook={techbook} />;
				})}
			</div>
		</div>
	);
}

export default App;
