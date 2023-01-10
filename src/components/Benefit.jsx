import React from 'react';
import { MdSecurity } from 'react-icons/md';
import { IoIosFingerPrint } from 'react-icons/io';
import { ImLocation2 } from 'react-icons/im';
const Benefit = () => {
	return (
		<section id='benefit' className=' bg-primaryBlue  py-4 '>
			<div className='container max-w-6xl mx-auto my-5 p-10'>
				<h2 className=' md:text-center font-bold text-lightColor text-4xl mb-10 border-l-[6px] border-secondaryBlue pl-4 md:pl-0 md:border-none'>
					Core Benefit
				</h2>
				<div className=' flex flex-col md:flex-row items-center space-y-4  md:px-6 md:space-x-6 md:space-y-0'>
					{/* 1 */}
					<div className='flex bg-white shadow-lg p-4 rounded-lg pt-5'>
						<div className='text-4xl pr-2 text-primaryBlue'>
							<MdSecurity />
						</div>
						<div className='space-y-3'>
							<h4 className='font-bold'>Transport Security</h4>
							<p className='mx-w-sm text-sm text-secondaryBlue'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Nesciunt, magnam,Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Nesciunt, magnam!
							</p>
						</div>
					</div>
					{/* 1 */}
					<div className='flex bg-white shadow-lg p-4 rounded-lg pt-5'>
						<div className='text-4xl pr-4 text-green-500'>
							<IoIosFingerPrint />
						</div>
						<div className='space-y-3'>
							<h4 className='font-bold text-darkBule'>Authentication</h4>
							<p className='mx-w-sm text-sm text-secondaryBlue'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Nesciunt, magnam,Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Nesciunt, magnam!
							</p>
						</div>
					</div>
					{/* 1 */}
					<div className='flex bg-white shadow-lg p-4 rounded-lg pt-5'>
						<div className='text-4xl pr-2 text-red-600 '>
							<ImLocation2 />
						</div>
						<div className='space-y-3'>
							<h4 className='font-bold'>Local Encryption</h4>
							<p className='mx-w-sm text-sm text-secondaryBlue'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Nesciunt, magnam,Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Nesciunt, magnam!
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefit;
