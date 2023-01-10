import React from 'react';

const About = () => {
	return (
		<section id='about-us' className=''>
			{/* Flex container */}
			<div className='max-w-6xl container flex flex-col mx-auto  items-center justify-between md:flex-row mt-10 p-10'>
				<div className='md:w-1/2'>
					<img src='img/pm-about.png' alt='' />
				</div>

				<div className='flex flex-col space-y-12 md:w-1/3 md:mb-10'>
					<h4 className='max-w-sm font-bold pt-5 text-4xl text-center md:text-center'>
						About Us
					</h4>
					<p className='max-w-md text-center text-darkBule md:text-center  px-2 md:px-0 '>
						Manage provides all the functionality your team needs, without the
						complexity. Our software is tailor-made for modern digital product
						teams.
					</p>
					<p className='max-w-sm text-center text-darkBule md:text-center  px-2 md:px-0 '>
						Manage provides all the functionality your team needs, without the
						complexity. Our software is tailor-made for modern digital product
						teams.
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
