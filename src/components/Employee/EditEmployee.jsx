import { useParams } from 'react-router-dom';
import ChangeEmployee from './ChangeEmployee';
import { useSelector } from 'react-redux';

const EditEmployee = () => {
	const { id } = useParams();
	const employee = useSelector((state) =>
		state.employees.employees.find(e=>e.empId==id)
	);
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
				{employee.empName || ' '}
			</h1>
			<ChangeEmployee employee={employee} type={'edit'} />
		</>
	);
};

export default EditEmployee;
