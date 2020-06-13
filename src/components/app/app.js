import React from 'react'
import EmployeeList from '../employee-list/employee-list'
import DummyApi from '../../api-services/dummy-api-service'

export default class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLoaded: false,
			items: [],
		}
		this.updateEmployees();
	}

	dummyApi = new DummyApi();

	onEmployeeLoaded = (employees) => {
		this.setState({
			items: employees,
			isLoaded: true,
		});
	};

	updateEmployees() {
		this.dummyApi
			.getAllEmployees('http://dummy.restapiexample.com/api/v1/employees')
			.then(this.onEmployeeLoaded);
	}

	changeSalary = (id, salary) => {
		this.setState(({ items }) => {
			const idx = items.findIndex((el) => el.id === id)
			const newArray = this.state.items.slice()
			newArray[idx].employee_salary = salary

			return {
				items: newArray,
			}
		})
	}

	deleteEmployee = (id) => {
		this.setState(({ items }) => {
			const idx = items.findIndex((el) => el.id === id)

			return {
				items: [...items.slice(0, idx), ...items.slice(idx + 1)],
			}
		})
	}

	render() {
		const { isLoaded, items } = this.state;

		 if (!isLoaded) {
			return <div>Loading...</div>
		} else {
			return (
				<ul className="list-group">
					<EmployeeList
						employeeArray={items}
						onDelete={this.deleteEmployee}
						onChange={this.changeSalary}
					/>
				</ul>
			)
		}
	}
}
