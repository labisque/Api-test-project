const employeesLoaded = () => {
	return {
		type: 'EMPLOYEES_LIST_LOADED'
	}
};

const employeeSalaryChanged = (employeeId) => {
	return {
		type: 'EMPLOYEE_SALARY_CHANGED',
		payload: employeeId

	}
};

export {
	employeeSalaryChanged,
	employeesLoaded
}