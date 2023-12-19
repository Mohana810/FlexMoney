import React from 'react';
import './Illustration.scss';
import yogaAnimation from './assets/yoga.json'
import Lottie from 'react-lottie';

const Illustration = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: yogaAnimation,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	};
	return (
		<div className='illustration__container'>
			<div className='illustration__title'>Yoga Registration</div>
			<div className='illustration__quote'>
			The essence of meditation is to illuminate the hidden recesses of the mind with the gentle glow of mindfulness.
			</div>
			<Lottie options={defaultOptions}  />
		</div>
	);
};

export default Illustration;
