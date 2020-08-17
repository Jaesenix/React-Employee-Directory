import React, { Component } from "react";
import Header from "./Header.js";
import SearchResults from './SearchResults.js';
import "./style.css";

class EmployeeTable extends Component {

    state = {
        employees: [],
        employeeSort: [],
        search: "",
        sorted: false,
    };

    componentDidMount = () => {
        fetch("https://randomuser.me/api/?results=200&nat=us")
            .then(res => res.json())
            .then(json => {
                this.setState({ employees: json.results })
            });
    };

    employeeSort = () => {
        let { employees, search } = this.state;
        let employeeSort = employees.filter(sorted => {
            return (
                sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
                sorted.name.last.toLowerCase().includes(search.toLowerCase())
            )
        });
        this.setState({ employeeSort })
    }

    initSort = event => {
        this.setState({ search: event.target.value }, () => {
            this.employeeSort();
            this.setState({ sorted: true });
        });
    };

    render = () => {
        return (
            <div>
                <div>
                    <Header
                        search={this.state.search}
                        initSort={this.initSort}
                    />
                </div>

                <div className="Container">
                    <table className="Table">
                        <thead className="thead">
                            <tr>
                                <th>Photo</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Cell Number</th>
                                <th>Age</th>
                            </tr>
                            <tr className="border_bottom"></tr>
                        </thead>
                        <tbody>

                            {!this.state.sorted
                                ? this.state.employees.map(employee => (

                                    <SearchResults
                                        key={employee.id.value}
                                        photo={employee.picture.medium}
                                        firstName={employee.name.first}
                                        lastName={employee.name.last}
                                        email={employee.email}
                                        cell={employee.cell}
                                        age={employee.dob.age}
                                    />

                                ))

                                : this.state.employeeSort.map(employee => (

                                    <SearchResults
                                        key={employee.id.value}
                                        photo={employee.picture.medium}
                                        firstName={employee.name.first}
                                        lastName={employee.name.last}
                                        email={employee.email}
                                        cell={employee.cell}
                                        age={employee.dob.age}
                                    />

                                ))}

                </tbody>
                    </table>
                </div >
            </div >

        )

    }
}

export default EmployeeTable