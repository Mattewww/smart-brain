import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
	if (isSignedIn) {
		return (
			<nav style={{ display: 'flex', justifyContent: 'end' }}>
				<p
					onClick={() => onRouteChange('signout')}
					className='f3 link dim black underline pa3 pointer'
				>
					Sign Out
				</p>
			</nav>
		);
	} else {
		return (
			<nav style={{ display: 'flex', justifyContent: 'end' }}>
				<p
					onClick={() => onRouteChange('signIn')}
					className='f3 link dim black underline pa3 pointer'
				>
					Sign In
				</p>
				<p
					onClick={() => onRouteChange('Register')}
					className='f3 link dim black underline pa3 pointer'
				>
					Register
				</p>
			</nav>
		);
	}
};

export default Navigation;
