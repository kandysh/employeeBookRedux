/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useState } from 'react';
import { EmpService } from '../../Services/EmpService';
import { Link } from 'react-router-dom';
const Employee = ({
	empId,
	empName,
	empPhone,
	empSalary,
	deptId,
	cityId,
	show,
}) => {
	// const navigate = useNavigate();
	const [state, setState] = useState({
		deptName: '',
		cityName: '',
	});
	const getData = async (deptId, cityId) => {
		if (cityId)
			await EmpService.getCity(cityId).then((res) =>
				setState((s) => ({ ...s, cityName: res.data.cityName }))
			);
		if (deptId)
			await EmpService.getDept(deptId).then((res) =>
				setState((s) => ({ ...s, deptName: res.data.deptName }))
			);
	};
	useEffect(() => {
		getData(deptId, cityId);
	}, [deptId, cityId]);
	return (
		<>
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
							src="https://doodleipsum.com/700/hand-drawn"
						></img>
					</div>

					<div className="col d-flex flex-column align-items-center justify-content-center">
						<h3>Personal Details : {empId || ''}</h3>
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
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#fff1e6',
									fontSize: 'larger',
								}}
								value={empName || ''}
								readOnly
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
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#fff1e6',
									fontSize: 'larger',
								}}
								value={empPhone || ''}
								readOnly
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
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#fff1e6',
									fontSize: 'larger',
								}}
								value={empSalary || ''}
								readOnly
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
							<input
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#fff1e6',
									fontSize: 'larger',
								}}
								value={state.cityName || ''}
								readOnly
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
								defaultValue="Department"
							/>
							<input
								className="form-control"
								style={{
									border: '1px solid black',
									borderRadius: '0',
									textAlign: 'center',
									background: '#fff1e6',
									fontSize: 'larger',
									textTransform: 'capitalize',
								}}
								value={state.deptName || ''}
								readOnly
							/>
						</div>
						<div className="d-flex flex-row align-items-center m-2">
							<Link
								className="btn "
								to={`/employees/edit/${empId}`}
								style={{
									border: '1px solid black',
									textAlign: 'center',
									background: '#be95c4',
									fontSize: 'larger',
									textTransform: 'capitalize',
								}}
							>
								Edit
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Employee;
