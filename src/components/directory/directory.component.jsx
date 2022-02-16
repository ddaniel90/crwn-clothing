import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
	constructor() {
		super();

		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl:
						'https://www.footshop.ro/blog/wp-content/uploads/2021/05/Webp.net-compress-image-6.jpg',
					id: 1,
					linkUrl: 'hats',
				},
				{
					title: 'jackets',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2,
					linkUrl: '',
				},
				{
					title: 'sneakers',
					imageUrl:
						'http://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/windsor-smith-black-and-white-90s.jpg',
					id: 3,
				},
				{
					title: 'womens',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					size: 'large',
					id: 4,
					linkUrl: '',
				},
				{
					title: 'mens',
					imageUrl:
						'https://img.acunn.com/uploads/icerikler/2020/02/16/16115745515e49435d1191e.jpg',
					size: 'large',
					id: 5,
					linkUrl: '',
				},
			],
		};
	}

	render() {
		return (
			<div className="directory-menu">
				{this.state.sections.map(({ id, ...otherSectionProps }) => (
					<MenuItem key={id} {...otherSectionProps} />
				))}
			</div>
		);
	}
}

export default Directory;
