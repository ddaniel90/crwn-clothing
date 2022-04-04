import { Fragment } from 'react/cjs/react.production.min';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as DnLogo } from '../../../assets/dn.svg';

import './navigation.styles.scss';

const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
				<Link className="logo-containe" to="/">
					<DnLogo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					<Link className="nav-link" to="/sign-in">
						SIGN IN
					</Link>
				</div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation;
