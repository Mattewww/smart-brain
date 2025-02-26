import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt
				className='Tilt br2 shadow-2'
				style={{ height: '150px', width: '150px' }}
			>
				<div className='pa4'>
					<img
						src={brain}
						alt='logo'
					/>
				</div>
			</Tilt>
		</div>
	);
};

export default Logo;
