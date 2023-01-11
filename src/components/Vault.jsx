import React from 'react';
import VaultList from './VaultList';
import { useSelector } from 'react-redux';
import Loader from './Loader';

const Vault = () => {
	const { vaults, isLoading, isError, message } = useSelector(
		(state) => state.vault
	);

	let loading = true;

	return (
		<section className='bg-white h-[300px] shadow p-10 overflow-y-scroll scrollbar-thin '>
			<div className=''>
				{vaults.length > 0 ? (
					<div div className='grid  md:grid-cols-4 gap-x-2 gap-y-4'>
						{vaults.map((vault) => (
							<VaultList vault={vault} key={vault._id} />
						))}
					</div>
				) : (
					<div className='flex items-center justify-center'>
						{isLoading ? (
							<Loader text='Loading...' />
						) : (
							<h3 className='text-center bg-red-500 py-2 font-semibold text-lightColor md:span-4 px-5 rounded shadow'>
								Your Vault is Empty
							</h3>
						)}
					</div>
				)}
			</div>
		</section>
	);
};

export default Vault;
