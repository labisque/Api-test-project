import React from 'react'

import './employee-list-item.css'

const EmployeeListItem = ({onDelete, onChange, id, ...items}) => {

	// const [salary, setSalary] = useState('');
	//
	// const salaryChange = (e) => {
	// 	setSalary(e.target.value)
	// }
	//
	// const onClick = (e) => {
	// 	e.preventDefault()
	// 	onChange(id, salary)
	// 	setSalary('')
	// }
	//
	// const onSubmit = (e) => {
	// 	e.preventDefault()
	// 	onChange(id, salary)
	// 	setSalary('')
	// }

		return (
			<span>
				<div className="employee-info">
					<div>Name: {items.employeeName}</div>
					<div>Age: {items.employeeAge} </div>
					<div>Salary: {items.employeeSalary} UAH</div>
				</div>

				<form className="item-add-form d-flex" >
					<input
						type="text"
						className="form-control"
						placeholder="Enter new salary"
						// onChange={salaryChange}
						// value={salary}
					/>
					<button
						type="button"
						className="btn btn-secondary btn-sm btn-change-salary"
						// onClick={onClick}
					>
						CHANGE SALARY
					</button>
					<button
						type="button"
						className="btn btn-danger btn-sm btn-delete-employee"
						// onClick={onDelete}
					>
						DELETE
					</button>
				</form>
			</span>
		)
}

export default EmployeeListItem