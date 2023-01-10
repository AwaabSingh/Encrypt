import React, { useEffect, useState } from 'react';
import { hashPassword } from '../utilies/crypto';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { name, email, password } = formData;

	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (isError) {
			toast.error(message);
			dispatch(reset());
		}

		if (isSuccess || user) {
			navigate('/dashboard');
		}
	}, [user, isError, isSuccess, message, navigate, dispatch]);

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		const userData = { name, email, password: hashPassword(password) };

		dispatch(register(userData));
	};

	// if (isLoading) return <h1>Loading...</h1>;
	return (
		<section className=''>
			<div className=' max-w-6xl flex container mx-auto items-center justify-between md:flex-row  py-8  my-5 flex-col'>
				{/* Imag */}
				<div className='md:w-1/2 md:self-center'>
					<img src='img/pm-reg.png' alt=''  />
				</div>
				{/* Form */}
				<div className=' md:w-1/2 '>
					<form
						onSubmit={onSubmit}
						className=' flex flex-col py-10 space-y-3  mx-auto px-3 rounded-xl md:space-y-6   md:w-[400px] bg-white shadow-md'
					>
						<h1 className='text-center py-3 font-semibold text-xl text-secondaryBlue'>
							Create Your Free Account!
						</h1>
						<label className='flex flex-col '>
							<span className='text-darkBlue px-2 py-1 font-meduim'>
								Name:{' '}
							</span>
							<input
								type='text'
								placeholder='Name'
								className='border py-2 px-4 rounded-md mb-2 outline-primaryBlue'
								name='name'
								id='name'
								value={name}
								onChange={onChange}
								required
							/>
						</label>
						<label className='flex flex-col '>
							<span className='text-darkBlue px-2 py-1 font-meduim'>
								Email:{' '}
							</span>
							<input
								type='email'
								placeholder='Email'
								className='border py-2 px-4 rounded-md mb-2 outline-primaryBlue'
								name='email'
								id='email'
								value={email}
								onChange={onChange}
								required
							/>
						</label>
						<label className='flex flex-col '>
							<span className='text-darkBlue px-2 py-1 font-meduim'>
								Password:{' '}
							</span>
							<input
								type='password'
								placeholder='Password'
								className='border py-2 px-4 rounded-md outline-primaryBlue'
								name='password'
								id='password'
								value={password}
								onChange={onChange}
								required
							/>
						</label>
						<input
							type='submit'
							value='Sign Up'
							className='bg-primaryBlue mt-3 rounded-xl py-2 font-semibold text-lightColor cursor-pointer'
						/>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Register;