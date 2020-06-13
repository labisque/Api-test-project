import React from 'react'
import './employee-list-item.css'

export default class EmployeeListItem extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			salary: '',
		}
	}

	salaryChange = (e) => {
		this.setState({
			salary: e.target.value,
		})
	}

	onClick = (e) => {
		e.preventDefault()
		this.props.onChange(this.props.id, this.state.salary)
		this.setState({
			salary: '',
		})
	}

	onSubmit = (e) => {
		e.preventDefault()
		this.props.onChange(this.props.id, this.state.salary)
		this.setState({
			salary: '',
		})
	}

	render() {
		return (
			<span>
				<div className="employee-info">
					<div>Name: {this.props.employeeName}</div>
					<div>Age: {this.props.employeeAge} </div>
					<div>Salary: {this.props.employeeSalary} UAH</div>
				</div>

				<form className="item-add-form d-flex" onSubmit={this.onSubmit}>
					<input
						type="text"
						className="form-control"
						placeholder="Enter new salary"
						onChange={this.salaryChange}
						value={this.state.salary}
					/>
					<button
						type="button"
						className="btn btn-secondary btn-sm btn-change-salary"
						onClick={this.onClick}
					>
						CHANGE SALARY
					</button>
					<button
						type="button"
						className="btn btn-danger btn-sm btn-delete-employee"
						onClick={this.props.onDelete}
					>
						DELETE
					</button>
				</form>
			</span>
		)
	}
}
