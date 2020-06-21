import React, { useEffect } from 'react'
import {connect} from 'react-redux'

import { updateEmployees } from '../../actions/actions'
import EmployeeListItem from '../employee-list-item/employee-list-item'
import './employee-list.css'

const EmployeeList = ({ employeeArray, update}) => {

	useEffect(() =>
	{
		update()
	}, [])

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
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

const mapStateToProps = ({employeesList, isLoaded, error}) => {
	return {
		employeeArray: employeesList,
		isLoaded: isLoaded,
		error: error
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		update: () => updateEmployees(dispatch)
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
