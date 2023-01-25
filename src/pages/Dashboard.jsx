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
    <section className="">
      <div className="container mx-auto p-4 md:p-8 max-w-6xl">
        <div className="flex items-center">
          {/* <VaultTop user={user} /> */}
          <div className="flex bg-white shadow p-4 rounded-lg pt-5 w-[700px] justify-center mx-auto flex-col md:flex-row items-center">
            <div className="text-6xl  text-primaryBlue">
              <img src="img/vault.png" alt="" className="h-32" />
            </div>
            <div className="space-y-3 ">
              <h4 className="font-bold text-center md:text-left">
                Welcome to your Vault{" "}
                <span className="text-secondaryBlue font-bold capitalize ">
                  {user && user.name}
                </span>
              </h4>
              <p className="max-w-lg text-sm text-secondaryBlue ">
                Keep your sensitive information safe and secure with our
                built-in password vault. Our state-of-the-art encryption
                technology ensures that your passwords and personal information
                are protected at all times. With our user-friendly vault, you
                can easily store and manage your information in one convenient
                and secure location, accessible with just a single master
                password. Trust <span className="font-bold">Encrpt </span> to
                protect your online identity.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 shadow mt-10 py-5">
          <h1 className="text-center pb-4 font-semibold tracking-wide text-secondaryBlue ">
            Encrypt Your Password
          </h1>
          <AddVaultForm />
        </div>
        <div className="mt-8">
          <h6 className="text-center font-semibold py-3 bg-secondaryBlue shadow-lg text-lightColor">
            Your Vaults
          </h6>
          <Vault />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
