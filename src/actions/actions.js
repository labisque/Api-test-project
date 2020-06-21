import DummyApi from '../api-services/dummy-api-service'

const dummyApi = new DummyApi();

const employeesLoaded = (employees) => {
	return {
		type: 'EMPLOYEES_LIST_LOADED',
		payload: employees
	}
};

const fetchEmployeeFailure = (error) => {
	return{
		type: 'FETCH_EMPLOYEE_FAILURE',
		payload: error
	}
};

const employeeSalaryChanged = (employee) => {
	return {
		type: 'EMPLOYEE_SALARY_CHANGED',
		payload: employee
	}
};



const updateEmployees = (dispatch) => {
	dummyApi
		.getAllEmployees('http://dummy.restapiexample.com/api/v1/employees')
		.then((arr) => dispatch(employeesLoaded(arr)))
		.catch(fetchEmployeeFailure)
}


export {
	employeeSalaryChanged,
	employeesLoaded,
	updateEmployees
}