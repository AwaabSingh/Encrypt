import React from 'react';
import { BiShowAlt } from 'react-icons/bi';
import { BsTrash2Fill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVault } from '../features/vault/vaultSlice';
import { toast } from 'react-toastify';
import axios from 'axios';
import vaultService from '../features/vault/vaultService';
import { useState } from 'react';
import Modal from './Modal';

const VaultList = ({ vault }) => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.auth);
	const [showPassword, setShowPassword] = useState('');
	const [showModal, setShowModal] = useState(false);

	const onDelete = (id) => {
		dispatch(deleteVault(id));
		toast.success('Password deleted successfully');
	};

	const onDecrypt = async (vaultData) => {
		const res = await vaultService.decrpytPassword(vaultData, user.token);

		setShowModal(true);
		return setShowPassword(res);
	};

	return (
		<section>
			<div className=' bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-6 rounded-xl flex justify-between items-center border-[] border-blue-300'>
				<h1 className='text-lightColor'>{vault.title}</h1>
				<div className='font-bold text-2xl flex space-x-2 cursor-pointer md:text-xl'>
					<BiShowAlt
						className='text-green-600 '
						onClick={() =>
							onDecrypt({
								password: vault.password,
								iv: vault.iv,
								id: vault._id,
							})
						}
					/>
					<BsTrash2Fill
						className='text-red-600'
						onClick={() => onDelete(vault._id)}
					/>
				</div>
			</div>
			{showModal && (
				<Modal setShowModal={setShowModal} showPassword={showPassword} />
			)}
		</section>
	);
};

export default VaultList;
