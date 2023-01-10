import axios from 'axios';

export const API_URL = 'http://localhost:5000/api/vaults/';

// Create nen vault item
const addVault = async (vaultData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(
		API_URL + 'add-password',
		vaultData,
		config
	);

	// console.log(response);
	return response.data;
};

// Get user goals
const getVaults = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL, config);

	return response.data;
};

// Delete user vault
const deleteVault = async (vaultId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.delete(API_URL + vaultId, config);

	// console.log(response.data);
	return response.data;
};

// decrpyt password
const decrpytPassword = async (vaultData, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.post(
		API_URL + 'decrypt-password',
		vaultData,
		config
	);

	return response.data;
};

const vaultService = {
	addVault,
	getVaults,
	deleteVault,
	decrpytPassword,
};

export default vaultService;
