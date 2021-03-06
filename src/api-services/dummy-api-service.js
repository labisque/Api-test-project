export default class DummyApi {

	async getInfo(url) {
		const result = await fetch(url);

		if (!result.ok) {
			throw new Error(`Could not fetch ${url}` +
				`, received ${result.status}`)
		}
		return await result.json();
	}

	async getAllEmployees (url){
		const result = await this.getInfo(url);
		return result.data.map(this.employeesFilter);
	}

	employeesFilter(employee){
		return {
			id: employee.id,
			employeeName: employee.employee_name,
			employeeAge: employee.employee_age,
			employeeSalary: employee.employee_salary,
		}
	}
}