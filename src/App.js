import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
	<div>
		<h1>HATS PAGE </h1>
	</div>
);

function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/hats" element={<HatsPage />} />
			</Routes>
		</div>
	);
}

export default App;
