import React, { useState } from 'react';

const SignIn = ({ onRouteChange, loadUser }) => {
	let [signInEmail, setSignInEmail] = useState('');
	let [signInPassword, setSignInPassword] = useState('');

	const onEmailChange = (event) => {
		setSignInEmail(event.target.value);
	};

	const onPasswordChange = (event) => {
		setSignInPassword(event.target.value);
	};

	const API_URL = import.meta.env.VITE_API_URL;
	console.log('API URL:', API_URL);

	const onSubmitSignIn = () => {
		fetch(`${API_URL}/signin`, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: signInEmail,
				password: signInPassword,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					loadUser(user);
					onRouteChange('home');
				}
			});
	};

	return (
		<article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center t-center'>
			<main className='pa4 black-80'>
				<div className='measure'>
					<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
						<legend className='f1 fw6 ph0 mh0'>Sign In</legend>
						<div className='mt3'>
							<label className='db fw6 lh-copy f6' htmlFor='email-address'>
								Email
							</label>
							<input
								onChange={onEmailChange}
								className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='email'
								name='email-address'
								id='email-address'
							/>
						</div>
						<div className='mv3'>
							<label className='db fw6 lh-copy f6' htmlFor='password'>
								Password
							</label>
							<input
								onChange={onPasswordChange}
								className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
								type='password'
								name='password'
								id='password'
							/>
						</div>
					</fieldset>
					<div className=''>
						<input
							onClick={onSubmitSignIn}
							className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
							type='submit'
							value='Sign in'
						/>
					</div>
					<div className='lh-copy mt3'>
						<p
							onClick={() => onRouteChange('register')}
							className='f6 link dim black db pointer'
						>
							Register
						</p>
					</div>
				</div>
			</main>
		</article>
	);
};

export default SignIn;
