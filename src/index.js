import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


// eslint-disable-next-line no-unused-vars
const rootElement = document.getElementById('root');

render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
