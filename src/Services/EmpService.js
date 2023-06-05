import axios from 'axios';

export class EmpService {
	static empUrl = ' http://localhost:5000/employees';
	static citiesUrl = ' http://localhost:5000/cities';
	static deptsUrl = ' http://localhost:5000/depts';

	static getAllEmployees() {
		return axios.get(this.empUrl);
	}
	static getEmployee(id) {
		return axios.get(`${this.empUrl}/${id}`);
	}
	static updateEmployee(emp) {
		return axios.put(this.empUrl, emp);
	}
	static deleteEmployee(id) {
		return axios.delete(`${this.empUrl}/${id}`);
	}
	static addEmployee(emp) {
		return axios.post(this.empUrl, emp);
	}
	static getCities() {
		return axios.get(this.citiesUrl);
	}
	static getDepts() {
		return axios.get(this.deptsUrl);
	}
	static getCity(id) {
		return axios.get(`${this.citiesUrl}/${id}`);
	}
	static getDept(id) {
		return axios.get(`${this.deptsUrl}/${id}`);
	}
}
