import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/signup/signup';

import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => (
	<div className='sign-in-and-sign-up'>
		<SignIn />
		<SignUp />
	</div>

);

export default  SignInAndSignUpPage;