import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeeSlice.js';

export default configureStore({
	reducer: {
		employees: employeesReducer,
	},
});
