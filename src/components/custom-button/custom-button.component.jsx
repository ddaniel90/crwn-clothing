import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({ children, ...othherProps }) => (
	<button className="custom-button" {...othherProps}>
		{children}
	</button>
);

export default CustomButton;
