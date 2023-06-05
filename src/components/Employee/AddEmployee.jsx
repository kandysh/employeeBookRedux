/* eslint-disable no-unused-vars */
import { useState } from 'react';
import ChangeEmployee from './ChangeEmployee';
const AddEmployee = () => {
	const [state, setState] = useState({
		employee: {
			empId: 0,
			empName: '',
			empSalary: 0,
			empPhone: 0,
			cityId: 0,
			deptId: 0,
		},
	});
	return (
		<>
			<h1
				style={{
					textAlign: 'center',
					fontWeight: '700',
					fontSize: '5rem',
					fontFamily: 'Dancing Script',
					marginTop: '1rem',
				}}
			>
				Add New Employee
			</h1>
			<ChangeEmployee employee={state.employee} type={'add'} />
		</>
	);
};

export default AddEmployee;
