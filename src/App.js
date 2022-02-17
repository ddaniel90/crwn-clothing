import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';

function App() {
	return (
		<div>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
			</Routes>
		</div>
	);
}

export default App;
