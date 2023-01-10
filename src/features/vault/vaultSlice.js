import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import vaultService from './vaultService';

const initialState = {
	vaults: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Create new goal
export const addVault = createAsyncThunk(
	'vaults/create',
	async (vaultData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await vaultService.addVault(vaultData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Get user vaults
export const getVaults = createAsyncThunk(
	'vaults/getAll',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await vaultService.getVaults(token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Delete user vault
export const deleteVault = createAsyncThunk(
	'vaults/delete',
	async (id, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await vaultService.deleteVault(id, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// decrypt password
export const decrpytPassword = createAsyncThunk(
	'vaults/decrypt',
	async (vaultData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;

			return await vaultService.decrpytPassword(vaultData, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

export const vaultSlice = createSlice({
	name: 'vault',
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(addVault.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(addVault.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.vaults.push(action.payload);
			})
			.addCase(addVault.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getVaults.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getVaults.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.vaults = action.payload;
			})
			.addCase(getVaults.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteVault.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteVault.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.vaults = state.vaults.filter(
					(vault) => vault._id !== action.payload.id
				);
			})
			.addCase(deleteVault.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(decrpytPassword.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(decrpytPassword.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.vaults = action.payload
			})
			.addCase(decrpytPassword.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = vaultSlice.actions;
export default vaultSlice.reducer;
