import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/signin" element={<SignInAndSignUpPage />} />
			</Routes>
		</div>
	);
}

export default App;
