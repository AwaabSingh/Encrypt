import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';

const Pricing = () => {
	return (
		<section id='pricing' className='max-w-6xl mx-auto p-8'>
			<h1 className='text-center text-4xl my-10 font-bold text-darkBlue'>
				Choose a Plan That Works For You
			</h1>
			{/* Flex container */}
			<div className='container flex flex-col space-y-6 items-center md:flex-row md:space-x-10 mx-auto px-12 md:space-y-0 '>
				{/* Item One */}

				<div className='border-2 rounded-xl space-y-6 w-[300px] p-5 flex flex-col border-primaryBlue py-6 bg-gray-200 hover:bg-gray-300'>
					<h2 className='font-semibold text-center text-2xl uppercase text-lightBlue'>
						Free
					</h2>

					<h4 className='text-secondaryBlue text-2xl space-x-1 font-semibold pl-5'>
						<span className=''>&#8358;</span>
						<span>0</span>
					</h4>

					<a
						href=''
						className='border-2 px-3 py-2 rounded-full mt-10 text-center border-darkBlue bg-secondaryBlue text-lightColor'
					>
						Get Started For Free
					</a>

					<ul className='pl-5 space-y-5'>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
					</ul>
				</div>
				{/* Item Two */}
				<div className='border-2 rounded-xl space-y-6 w-[300px] p-5 flex flex-col border-primaryBlue py-6 bg-gray-200 hover:bg-gray-300 text-darkBlue'>
					<div className='text-center bg-green-500 px-3 rounded-full font-semibold text-lightBlue'>
						<span>Best Deal!</span>
					</div>
					<h2 className='font-semibold text-center text-2xl uppercase text-lightBlue'>
						Basic
					</h2>

					<h4 className='text-secondaryBlue text-2xl space-x-1 font-semibold pl-5'>
						<span className=''>&#8358;</span>
						<span>1,500</span>
					</h4>

					<a
						href=''
						className='border-2 px-3 py-2 rounded-full mt-10 text-center border-darkBlue bg-secondaryBlue text-lightColor'
					>
						Get Started For Basic
					</a>

					<ul className='pl-5 space-y-5'>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
					</ul>
				</div>
				{/* Item Three */}
				<div className='border-2 rounded-xl space-y-6 w-[300px] p-5 flex flex-col border-primaryBlue py-6 bg-gray-200 hover:bg-gray-300 text-darkBlue'>
					<h2 className='font-semibold text-center text-2xl uppercase text-lightBlue'>
						Premium
					</h2>

					<h4 className='text-secondaryBlue text-2xl space-x-1 font-semibold pl-5'>
						<span className=''>&#8358;</span>
						<span>2,000</span>
					</h4>

					<a
						href=''
						className='border-2 px-3 py-2 rounded-full mt-10 text-center border-darkBlue bg-secondaryBlue text-lightColor'
					>
						Get Started For Premium
					</a>

					<ul className='pl-5 space-y-5'>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
						<li className='flex flex-row items-center space-x-3 '>
							<div className='text-secondaryBlue pb-9'>
								<BsPatchCheckFill />
							</div>
							<span className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est,
								et!
							</span>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
