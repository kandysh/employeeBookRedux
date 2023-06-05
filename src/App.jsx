/* eslint-disable no-unused-vars */
import AllEmployees from './Components/Employee/AllEmployees';
import Pages from './Components/Pages';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './Redux/store.js';

function App() {
	return (
		<>
			<Provider store={store}>
				<Pages />
			</Provider>
		</>
	);
}

export default App;
