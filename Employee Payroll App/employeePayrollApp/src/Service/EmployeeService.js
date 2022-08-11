import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8088";

class EmployeeService {
  getAllEmployees() {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/get`);
  }

  addEmployees(data) {
    return axios.post(`${EMPLOYEE_API_BASE_URL}/add`, data);
  }

  deleteEmployee(empId) {
    return axios.delete(`${EMPLOYEE_API_BASE_URL}/delete/${empId}`);
  }

  
  getEmployee(empId) {
    return axios.get(`${EMPLOYEE_API_BASE_URL}/get/${empId}`);
  }


  updateEmployee(empId, data) {
    return axios.put(`${EMPLOYEE_API_BASE_URL}/update/${empId}`, data);
  }
}

export default new EmployeeService();
