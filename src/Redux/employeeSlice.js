/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { EmpService } from '../Services/EmpService';

const initialState = {
	employees: [],
	cities: [],
	depts: [],
	status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

export const fetchEmployees = createAsyncThunk('fetchEmployees', async () => {
	const employees = await EmpService.getAllEmployees();
	const cities = await EmpService.getCities();
	const depts = await EmpService.getDepts();
	try {
		return {
			employees: employees.data,
			cities: cities.data,
			depts: depts.data,
		};
	} catch (err) {
		return err.message;
	}
});
export const createEmployee = createAsyncThunk(
	'createEmployee',
	async (emp) => {
		const res = await EmpService.addEmployee(emp);
		try {
			return res.data;
		} catch (err) {
			return err.message;
		}
	}
);
export const updateEmployee = createAsyncThunk(
	'updateEmployee',
	async (emp) => {
		const res = await EmpService.updateEmployee(emp);
		try {
			return res.data;
		} catch (err) {
			return err.message;
		}
	}
);
export const deleteEmployee = createAsyncThunk('deleteEmployee', async (id) => {
	const res = await EmpService.deleteEmployee(id);
	try {
		return res.data ? id : null;
	} catch (err) {
		return err.message;
	}
});

const employeeSlice = createSlice({
	name: 'employees',
	initialState,
	extraReducers: {
		[fetchEmployees.pending]: (state) => {
			state.status = 'loading';
		},
		[fetchEmployees.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.employees = action.payload.employees;
			state.cities = action.payload.cities;
			state.depts = action.payload.depts;
		},
		[fetchEmployees.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'failed';
		},
		[createEmployee.pending]: (state) => {
			state.status = 'loading';
		},
		[createEmployee.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.employees.push(action.payload);
		},
		[createEmployee.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'failed';
		},
		[updateEmployee.pending]: (state) => {
			state.status = 'loading';
		},
		[updateEmployee.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			if (action.payload) {
				const index = state.employees.findIndex(
					(e) => e.empId == action.payload.empId
				);
				state.employees.splice(index, 1, action.payload);
			}
		},
		[updateEmployee.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'failed';
		},
		[deleteEmployee.pending]: (state) => {
			state.status = 'loading';
		},
		[deleteEmployee.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			if (action.payload) {
				const index = state.employees.findIndex(
					(e) => e.empId == action.payload
				);
				state.employees.splice(index, 1);
			}
		},
		[deleteEmployee.rejected]: (state, action) => {
			state.error = action.payload;
			state.status = 'failed';
		},
	},
});
export default employeeSlice.reducer;
