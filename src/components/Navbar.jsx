import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RiCloseLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate('/');
		setToggleMenu(false);
	};

	return (
		<nav className='  bg-primaryBlue'>
			{/* flex  container */}
			<div className=' relative container  mx-auto p-4 flex items-center justify-between max-w-6xl text-center'>
				<Link to='/'>
					<div className=''>
						<img
							src='img/pmlogo-removebg-preview.png'
							alt=''
							className='w-16'
						/>
					</div>
				</Link>

				<div className='hidden md:flex space-x-6 text-lightColor font-semibold'>
					<Link to='/' className='hover:text-darkBlue cursor-pointer'>
						Home
					</Link>
					<Link className='hover:text-darkBlue cursor-pointer'>
						How it works
					</Link>
					<Link to='#pricing' className='hover:text-darkBlue cursor-pointer'>
						Pricing
					</Link>
				</div>
				{user ? (
					<div className='flex space-x-2 items-center'>
						{/* <Link
							to='/dashboard'
							className='hidden md:block p-3 px-6 pt-2 text-lightColor cursor-pointer bg-darkBlue rounded-full baseline hover:bg-secondaryBlue'
						>
							Dashboard
						</Link> */}
						<button
							onClick={onLogout}
							className='hidden md:block p-3 px-6 pt-2 text-lightColor cursor-pointer bg-darkBlue rounded-full baseline hover:bg-secondaryBlue'
						>
							Logout
						</button>
					</div>
				) : (
					<div className=' hidden md:flex justify-between space-x-4 text-semibold'>
						<Link
							to='/register'
							className='md:block p-3 px-6 pt-2 text-lightColor cursor-pointer bg-darkBlue rounded-full baseline hover:bg-secondaryBlue'
						>
							Sign Up
						</Link>
						<Link
							to='/login'
							className='md:block p-3 px-6 pt-2 text-lightColor cursor-pointer bg-darkBlue rounded-full baseline hover:bg-secondaryBlue'
						>
							Sign In
						</Link>
					</div>
				)}
				<div className='text-center text-white text-3xl pr-5 md:hidden'>
					{toggleMenu ? (
						<RiCloseLine
							color='#fff'
							size={27}
							onClick={() => setToggleMenu(false)}
						/>
					) : (
						<RxHamburgerMenu onClick={() => setToggleMenu(true)} />
					)}
				</div>
			</div>

			{toggleMenu && (
				<div className='md:hidden p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar'>
					<div className='flex flex-col  justify-end items-center flex-1 space-y-3 text-md font-semibold'>
						{user ? (
							<>
								<Link to='/dashboard' className=' text-lightColor'>
									Dashboard
								</Link>
								<Link
									to=''
									className='hover:text-darkBlue cursor-pointer text-lightColor'
									onClick={() => setToggleMenu(false)}
								>
									How it works
								</Link>
								<Link
									to=''
									className='hover:text-darkBlue cursor-pointer text-lightColor'
									onClick={() => setToggleMenu(false)}
								>
									Pricing
								</Link>
								<button
									onClick={onLogout}
									className='md:block p-3 px-6 pt-2 text-lightColor cursor-pointer bg-darkBlue rounded-full baseline hover:bg-secondaryBlue'
								>
									Logout
								</button>
							</>
						) : (
							<>
								<Link to='/' className=' text-lightColor'>
									Home
								</Link>
								<Link
									to=''
									className='hover:text-darkBlue cursor-pointer text-lightColor'
									onClick={() => setToggleMenu(false)}
								>
									How it works
								</Link>
								<Link
									to=''
									className='hover:text-darkBlue cursor-pointer text-lightColor'
									onClick={() => setToggleMenu(false)}
								>
									Pricing
								</Link>
								<Link
									to='/register'
									className=' p-3 px-6 pt-2 text-lightColor cursor-pointer bg-darkBlue rounded-full baseline hover:bg-secondaryBlue'
									onClick={() => setToggleMenu(false)}
								>
									Sign Up
								</Link>
								<Link
									to='/login'
									className=' p-3 px-6 pt-2 text-lightColor cursor-pointer bg-darkBlue rounded-full baseline hover:bg-secondaryBlue'
									onClick={() => setToggleMenu(false)}
								>
									Sign In
								</Link>
							</>
						)}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
