import React from 'react';
import { Outlet } from 'react-router-dom';

import Directory from '../../directory/directory.component';

import './home.styles.scss';

const Home = () => (
	<div className="home">
		<Outlet />
		<Directory />
	</div>
);

export default Home;
