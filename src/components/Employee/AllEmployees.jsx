import { useEffect } from 'react';
import NewEmpCard from './NewEmpCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEmployees } from '../../Redux/employeeSlice';

const AllEmployees = () => {
	const employees = useSelector((state) => state.employees.employees);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchEmployees());
	}, [dispatch]);

	return (
		<div className="container">
			<h1
				style={{
					textAlign: 'center',
					fontWeight: '700',
					fontSize: '5rem',
					fontFamily: 'Dancing Script',
				}}
			>
				All Employees
			</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					width: '100%',
					gap: '2rem',
					padding: '2rem',
					flexWrap: 'wrap',
				}}
			>
				{employees.map((e, i) => (
					<NewEmpCard
						key={i}
						empId={e.empId}
						empName={e.empName}
						empPhone={e.empPhone}
						empSalary={e.empSalary}
						cityId={e.cityId}
						deptId={e.deptId}
						show={false}
						imageUrl="https://doodleipsum.com/700/avatar-2"
					/>
				))}
			</div>
		</div>
	);
};

export default AllEmployees;
