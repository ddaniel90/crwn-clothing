// import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/routes/home/home.component';
import ShopPage from './pages/shop/shop.components';
// import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Navigation from './components/routes/navigation/navigation.component.jsx';
import SignIn from './components/routes/sign-in/sign-in.component';

function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route exact path="/" element={<Home />}>
					<Route path="/shop" element={<ShopPage />} />
					<Route path="/sign-in" element={<SignIn />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
