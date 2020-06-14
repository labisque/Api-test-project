import React from 'react'
import EmployeeListItem from '../employee-list-item/employee-list-item'
import './employee-list.css'

const EmployeeList = ({ employeeArray, onDelete, onChange }) => {
	return (
		<div>
			<ul className="list-group list-container">
				{employeeArray.map((item) => {
					const { id, ...items } = item
					return (
						<li key={id} className="list-group-item">
							<EmployeeListItem
								{...items}
								id={id}
								onDelete={() => onDelete(id)}
								onChange={onChange}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default EmployeeList
