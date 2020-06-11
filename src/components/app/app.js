import React from 'react';
import EmployeeList from '../employee-list/employee-list';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            items: [],
            error: null
        }
    };

    componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
            .then(res => res.json())
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    };

    changeSalary = (id, salary) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id);
            const newArray = this.state.items.slice();
            newArray[idx].employee_salary = salary;

            return {
                items: newArray
            };
        });
    };

    deleteEmployee = (id) => {
        this.setState(({ items }) => {
            const idx = items.findIndex((el) => el.id === id);

            return {
                items: [
                    ...items.slice(0,idx),
                    ...items.slice(idx+1)
                ]
            };
        });
    };


    render() {
        const {error, isLoaded, items} = this.state;

        if (error) {
            return <div>Error, {error.message}</div>;
        }

        else if (!isLoaded) {
            return <div>Loading...</div>;
        }

        else {
            return (
                <ul className="list-group">
                    <EmployeeList
                    employeeArray={ items }
                    onDelete = {this.deleteEmployee}
                    onChange = {this.changeSalary}
                    />
                </ul>
            );
        }

    }

}
