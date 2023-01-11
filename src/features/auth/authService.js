import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/users/';
const API_URL = 'https://encrypt-be.onrender.com/api/users/';

// Register user
const register = async (userData) => {
	const response = await axios.post(API_URL + 'register', userData);

	if (response.data.token !== null) {
		sessionStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

// Login user
const login = async (userData) => {
	const response = await axios.post(API_URL + 'login', userData);

	if (response.data.token !== null) {
		sessionStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

// get me
const getMe = async (token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + 'me', config);

	return response.data;
};

// Logout user
const logout = () => {
	sessionStorage.removeItem('user');
};

const authService = {
	register,
	logout,
	login,
	getMe,
};

export default authService;
