import React, { useState, useEffect } from 'react'
import EmployeeList from '../employee-list/employee-list'
import DummyApi from '../../api-services/dummy-api-service'


const App = () => {

	const [isLoaded, setIsLoaded] = useState(false);
	const [items, setItems] = useState([]);

	const dummyApi = new DummyApi();

	const updateEmployees = () => {
		dummyApi
			.getAllEmployees('http://dummy.restapiexample.com/api/v1/employees')
			.then(onEmployeeLoaded);
	}

	const onEmployeeLoaded = (employees) => {
		setIsLoaded(true);
		setItems(employees);
	};

	useEffect(() => {
		updateEmployees();
	}, []);

	const changeSalary = (id, salary) => {
		const idx = items.findIndex((el) => el.id === id)
		const newArray = items.slice()
		newArray[idx].employeeSalary = salary
		setItems(newArray);
	}

	const deleteEmployee = (id) => {
		const idx = items.findIndex((el) => el.id === id)
		const newArray = [...items.slice(0, idx), ...items.slice(idx + 1)];
		setItems(newArray);
	}

		 if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<ul className="list-group">
					<EmployeeList
						employeeArray= {items}
						onDelete={deleteEmployee}
						onChange={changeSalary}
					/>
				</ul>
			)
		}
}

export default App