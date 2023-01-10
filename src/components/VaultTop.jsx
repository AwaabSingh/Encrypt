import React from 'react';
import { FaUserAlt } from 'react-icons/fa';

const VaultTop = ({ user }) => {
	return (
		<div className='flex flex-col items-center justify-center bg-blue-gradient2 shadow p-4 rounded-lg pt-5 max-w-md ml-[70px]'>
			<div className='text-4xl pr-2 text-green-500 pb-3'>
				<FaUserAlt />
			</div>
			<div className='space-y-2'>
				<h4 className='font-semibold'>
					<span>Name:</span> {user && user.name}
				</h4>
				<h6 className='font-semibold'>
					<span>Email:</span> {user && user.email}
				</h6>
			</div>
		</div>
	);
};

export default VaultTop;
