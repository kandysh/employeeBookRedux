/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './NewEmployee.css';
import { useState, useEffect } from 'react';
import { EmpService } from '../../Services/EmpService';
import { Link } from 'react-router-dom';
const NewEmpCard = ({
	empId,
	empName,
	empPhone,
	empSalary,
	deptId,
	cityId,
	show,
	imageUrl,
}) => {
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
		<div className="box m-5">
			<div className="box-top">
				<img className="box-image" src={imageUrl} alt=""></img>
				<div className="title-flex">
					<h3 className="box-title">{empName}</h3>
					<p className="user-follow-info">{empId}</p>
				</div>
				<p className="description">
					Works in -{' '}
					<span
						style={{
							fontWeight: '700',
							textTransform: 'capitalize',
							background: 'inherit',
						}}
					>
						{state.deptName}
					</span>
				</p>
			</div>
			<Link to={`/employees/view/${empId}`} className="button">
				About
			</Link>
		</div>
	);
};

export default NewEmpCard;
