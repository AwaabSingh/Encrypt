import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SiVault } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';

import Vault from '../components/Vault';
// import VaultTop from '../components/VaultTop';
import AddVaultForm from '../components/AddVaultForm';
import { getVaults, reset } from '../features/vault/vaultSlice';
import Modal from '../components/Modal';

const Dashboard = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { vaults, isLoading, isError, message } = useSelector(
		(state) => state.vault
	);

	const { user } = useSelector((state) => state.auth);

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		if (!user) {
			navigate('/login');
		}

		dispatch(getVaults());

		return () => {
			dispatch(reset());
		};
	}, [dispatch, user, navigate]);

	return (
		<section className=''>
			<div className='container mx-auto p-4 md:p-8 max-w-6xl'>
				<div className='flex items-center'>
					{/* <VaultTop user={user} /> */}
					<div className='flex bg-white shadow p-4 rounded-lg pt-5 w-[700px] justify-center mx-auto flex-col md:flex-row items-center'>
						<div className='text-6xl pr-2 text-primaryBlue'>
							<SiVault />
						</div>
						<div className='space-y-3 pl-8'>
							<h4 className='font-bold '>
								Welcome to your Vault {user && user.name}
							</h4>
							<p className='max-w-lg text-sm text-secondaryBlue '>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit.
								Nesciunt, magnam,Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Nesciunt, magnam! Lorem ipsum dolor sit amet,
								consectetur adipisicing elit. Nesciunt, magnam,Lorem ipsum dolor
								sit amet, consectetur adipisicing elit. Nesciunt, magnam!
							</p>
						</div>
					</div>
				</div>

				<div className='bg-white p-4 shadow mt-10 py-5'>
					<h1 className='text-center pb-4 font-semibold tracking-wide text-secondaryBlue '>
						Encrypt Your Password
					</h1>
					<AddVaultForm />
				</div>
				<div className='mt-8'>
					<h6 className='text-center font-semibold py-3 bg-secondaryBlue shadow-lg text-lightColor'>
						Your Vaults
					</h6>
					<Vault />
				</div>
			</div>
		</section>
	);
};

export default Dashboard;
