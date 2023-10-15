import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from "../Movies/Movies";

const App = () => {
	return (
		<div className="page">
			<div className="page__container">
				<Header></Header>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/movies" element={<Movies />} />
				</Routes>
				<Footer></Footer>
			</div>
		</div>
	)
}

export default App;
