import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Employee from './Employee';

export const ViewEmployee = () => {
	const { id } = useParams();
	const employee = useSelector((state) => state.employees.employees.find((e)=>e.empId==id));
	// const getEmployee = async (id) =>
	// 	await EmpService.getEmployee(id)
	// 		.then((res) => setEmployee(res.data))
	// 		.catch((err) => console.error(err));
	// useEffect(() => {
	// 	getEmployee(id);
	// }, [id]);

	return (
		<div className="container d-flex align-items-center flex-column">
			<h1
				style={{
					textAlign: 'center',
					fontWeight: '700',
					fontSize: '5rem',
					fontFamily: 'Dancing Script',
					marginTop: '1rem',
				}}
			>
				{employee.empName}
			</h1>
			<Employee
				empId={employee.empId}
				empName={employee.empName}
				empPhone={employee.empPhone}
				empSalary={employee.empSalary}
				cityId={employee.cityId}
				deptId={employee.deptId}
				show={true}
			/>
		</div>
	);
};
