import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = ({text}) => {
	return (
		<div className='flex justify-center space-x-3  items-center'>
			<AiOutlineLoading3Quarters className='w-6 h-6 animate-spin font-bold' />
			<p className='text-md font-ms text-secondaryBlue font-bold'>{text}</p>
		</div>
	);
};

export default Loader;
