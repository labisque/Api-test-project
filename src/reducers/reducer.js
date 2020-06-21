const initialState = {
	employeesList: [],
	isLoaded: false
}

const reducer = (state= initialState, action) => {
	switch (action.type) {
		case 'EMPLOYEES_LIST_LOADED':
			return {
				employeesList: action.payload,
				isLoaded: true
			};

		case 'EMPLOYEE_SALARY_CHANGED':
			console.log(state);
			return{
				state
			}

		default:
			return state;
	}
}

export default reducer;