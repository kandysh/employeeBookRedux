import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllEmployees from './Employee/AllEmployees';
import Navabr from './Navabr';
import EditEmployee from './Employee/EditEmployee';
import AddEmployee from './Employee/AddEmployee';
import { ViewEmployee } from './Employee/ViewEmployee';

const Pages = () => {
	return (
		<BrowserRouter>
			<Navabr />
			<Routes>
				<Route path="/" element={<AllEmployees />} />
				<Route path="/employees/view/:id" element={<ViewEmployee />} />
				<Route path="/employees" element={<AllEmployees />} />
				<Route path="/employees/edit/:id" element={<EditEmployee />} />
				<Route path="/employees/add" element={<AddEmployee />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Pages;
