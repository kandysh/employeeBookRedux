/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { EmpService } from '../../Services/EmpService';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, updateEmployee } from '../../Redux/employeeSlice';

const ChangeEmployee = (props) => {
	const [state, setState] = useState({
		employee: {
			empId: 0,
			empName: '',
			empSalary: '',
			empPhone: '',
			cityId: 0,
			deptId: 0,
		},
	});
	const cities = useSelector((state) => state.employees.cities);
	const depts = useSelector((state) => state.employees.depts);
	const dispatch = useDispatch(0);
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setState((s) => ({ ...s, employee: { ...state.employee, [name]: value } }));
	};
	useEffect(() => {
		setState({ employee: { ...props.employee } });
	}, [props]);
	const handleClick = async () => {
		if (props.type === 'edit') {
			dispatch(updateEmployee(state.employee));
			navigate(`/employees/view/${state.employee.empId}`);
		} else {
			dispatch(createEmployee(state.employee));
			navigate(`/employees`);
		}
	};
	return (
		<div className="container">
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					flexBasis: '100%',
					position: 'relative',
					padding: '1.5rem',
					width: '100%',
					border: '3px solid black',
					marginTop: '1rem',
				}}
			>
				<div className="row">
					<div className="col-6">
						<img
							style={{ width: '100%' }}
							src="https://doodleipsum.com/700/avatar-2"
						></img>
					</div>

					<div className="col d-flex flex-column align-items-center justify-content-center">
						<h3>Edit Details : {state.employee.empId}</h3>
						<div className="d-flex flex-row align-items-center m-2">
							<input
								className="form-control disabled"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#faf3dd',
									fontSize: 'larger',
									fontWeight: '700',
								}}
								defaultValue="Name"
							/>
							<input
								name="empName"
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#9f86c0',
									fontSize: 'larger',
								}}
								onChange={handleChange}
								defaultValue={state.employee.empName}
							/>
						</div>
						<div className="d-flex flex-row align-items-center m-2">
							<input
								className="form-control disabled"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#faf3dd',
									fontSize: 'larger',
									fontWeight: '700',
								}}
								defaultValue="Phone"
							/>
							<input
								type="number"
								name="empPhone"
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#9f86c0',
									fontSize: 'larger',
								}}
								onChange={handleChange}
								defaultValue={state.employee.empPhone}
							/>
						</div>
						<div className="d-flex flex-row align-items-center m-2">
							<input
								className="form-control disabled"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#faf3dd',
									fontSize: 'larger',
									fontWeight: '700',
								}}
								defaultValue="Salary"
							/>
							<input
								name="empSalary"
								type="number"
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#9f86c0',
									fontSize: 'larger',
								}}
								onChange={handleChange}
								defaultValue={state.employee.empSalary}
							/>
						</div>
						<div className="d-flex flex-row align-items-center m-2">
							<input
								className="form-control disabled"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#faf3dd',
									fontSize: 'larger',
									fontWeight: '700',
								}}
								defaultValue="City"
							/>
							<select
								name="cityId"
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#9f86c0',
									fontSize: 'larger',
								}}
								onChange={handleChange}
								value={state.employee.cityId}
							>
								{cities.map((k, i) => (
									<option key={i} value={k.cityId}>
										{k.cityName}
									</option>
								))}
							</select>
						</div>
						<div className="d-flex flex-row align-items-center m-2">
							<input
								className="form-control disabled"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#faf3dd',
									fontSize: 'larger',
									fontWeight: '700',
								}}
								defaultValue="Department"
							/>
							<select
								name="deptId"
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#9f86c0',

									fontSize: 'larger',
									textTransform: 'capitalize',
								}}
								onChange={handleChange}
								value={state.employee.deptId}
							>
								{depts.map((k, i) => (
									<option key={i} value={k.deptId}>
										{k.deptName}
									</option>
								))}
							</select>
						</div>
						<div className="d-flex flex-row align-items-center m-2">
							<input
								onClick={handleClick}
								type="submit"
								className="form-control"
								style={{
									border: '1px solid black',
									textAlign: 'center',
									background: '#f8ad9d',
									fontSize: 'larger',
									fontWeight: '700',
								}}
								value="Save Changes"
							/>
						</div>
						{props.type === 'edit' && (
							<div className="d-flex flex-row align-items-center m-2">
								<input
									onClick={async () => {
										await EmpService.deleteEmployee(state.employee.empId);
										navigate('/employees');
									}}
									type="submit"
									className="form-control"
									style={{
										border: '1px solid black',
										textAlign: 'center',
										background: '#ef476f',
										fontSize: 'larger',
										fontWeight: '700',
									}}
									value="Delete Employee"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChangeEmployee;
