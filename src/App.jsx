import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation.jsx';
import Logo from './components/Logo/Logo.jsx';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.jsx';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import Register from './components/Register/Register.jsx';
import Rank from './components/Rank/Rank.jsx';
import ParticlesBg from 'particles-bg';
import './App.css';

const App = () => {
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');
	const [box, setBox] = useState({});
	const [route, setRoute] = useState('signIn');
	const [isSignedIn, setIsSignedIn] = useState(false);
	const [user, setUser] = useState({
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: '',
	});

	const loadUser = (data) => {
		setUser({
			id: data.id,
			name: data.name,
			email: data.user,
			entries: data.entries,
			joined: data.joined,
		});
	};

	const calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const width = Number(image.width);
		const height = Number(image.height);
		//
		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		};
	};

	const displayFaceBox = (box) => {
		// console.log(box);
		setBox(box);
	};

	const onInputChange = (event) => {
		setInput(event.target.value);
	};

	const onButtonSubmit = () => {
		setImageUrl(input);
		// console.log(imageUrl);
		console.log('input', input);
		fetch(`${process.env.REACT_APP_API_URL}/imageurl`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				imageUrl: input,
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				if (result) {
					fetch(`${process.env.REACT_APP_API_URL}/image`, {
						method: 'put',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							id: user.id,
						}),
					})
						.then((response) => response.json())
						.then((count) => {
							setUser(Object.assign(user, { entries: count }));
						});

					displayFaceBox(calculateFaceLocation(result));
				}
			})
			.catch((error) => console.log('error', error));
	};

	const onRouteChange = (route) => {
		if (route === 'signout') {
			setInput('');
			setImageUrl('');
			setBox({});
			setIsSignedIn(false);
		} else if (route === 'home') {
			setIsSignedIn(true);
		}
		setRoute(route);
	};

	return (
		<div className='App'>
			<Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
			{route === 'home' ? (
				<>
					<Logo />
					<Rank name={user.name} entries={user.entries} />
					<ImageLinkForm
						onInputChange={onInputChange}
						onButtonSubmit={onButtonSubmit}
					/>
					<FaceRecognition box={box} imageUrl={imageUrl} />
				</>
			) : route === 'signIn' ? (
				<SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
			) : (
				<Register loadUser={loadUser} onRouteChange={onRouteChange} />
			)}
			<ParticlesBg type='cobweb' bg={true} />
		</div>
	);
};

export default App;
