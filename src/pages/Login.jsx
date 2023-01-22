import React, { useEffect, useState } from 'react';
import { hashPassword } from '../utilies/crypto';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, reset } from '../features/auth/authSlice';
import { toast } from "react-hot-toast";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
			dispatch(reset());
		}

		if (isSuccess || user) {
			toast.success('User logged in successfully')
			navigate('/dashboard');
		}
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevstate) => ({
			...prevstate,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = { email, password: hashPassword(password) };

		dispatch(login(userData));
	};



	
	// if (isLoading) return(
	// 	toast.success('Logging in...')
	// );
	return (
		<section className=''>
			<div className=' max-w-6xl flex container mx-auto p-10 md:flex-row  py-8  my-5 flex-col-reverse items-center'>
				{/* Imag */}

				{/* Form */}
				<div className=' md:w-1/2  '>
					<form
						onSubmit={onSubmit}
						className=' flex flex-col py-10 space-y-3  mx-auto px-3 rounded-xl md:space-y-6 w-[350px]  md:w-[400px] bg-white shadow-md'
					>
						<div className='flex flex-col items-center py-2'>
							<h1 className='text-center py-1 font-semibold text-xl text-secondaryBlue'>
								Hello Again!
							</h1>
							<p className='text-sm text-secondaryBlue'>
								Welcome Back you've been misssed!
							</p>
						</div>

						<label className='flex flex-col '>
							<span className='text-darkBlue px-2 py-1 font-meduim'>
								Email:{' '}
							</span>
							<input
								type='email'
								placeholder='Email'
								className='border py-2 px-4 rounded-md mb-2 outline-primaryBlue'
								id='email'
								value={email}
								onChange={onChange}
								required
							/>
						</label>
						<label className='flex flex-col '>
							<span className='text-darkBlue px-2 py-1 font-meduim'>
								Master Password:{' '}
							</span>
							<input
								type='password'
								placeholder='Password'
								className='border py-2 px-4 rounded-md outline-primaryBlue'
								id='password'
								value={password}
								onChange={onChange}
								required
							/>
						</label>
						{/* <input
							type='submit'
							value={loginBtn}
							className='bg-primaryBlue mt-3 rounded-xl py-2 font-semibold text-lightColor cursor-pointer'
						/> */}

						<button
							type='submit'
							className='bg-primaryBlue mt-3 rounded-xl py-2 font-semibold text-lightColor cursor-pointer'
						>
							{isLoading ? (
								<div className='flex justify-center space-x-3  items-center'>
									<AiOutlineLoading3Quarters className='w-4 h-4 animate-spin font-bold' />
									<p className='text-sm font-ms'>Logging In...</p>
								</div>
							) : (
								'Sign In'
							)}
						</button>
					</form>
				</div>
				<div className='md:w-1/2 '>
					<img src='img/pm-login.png' alt='' />
				</div>
			</div>
		</section>
	);
};

export default Login;
