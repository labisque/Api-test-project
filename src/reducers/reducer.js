const initialState = {
	employeesList: [],
	isLoaded: false,
	error: null
}

const reducer = (state= initialState, action) => {

	switch (action.type) {
		case 'EMPLOYEES_LIST_LOADED':
			return {
				employeesList: action.payload,
				isLoaded: true,
				error: null
			};

		case 'FETCH_EMPLOYEE_FAILURE':
			return {
				...state,
				error: action.payload
			}

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