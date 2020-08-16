import React, { Component } from "react";
import Header from "./components/Header";
import SearchResults from './components/SearchResults';
import "./style.css";

class Directory extends Component {

    state = {
        employees: [],
        employeeSort: [],
        search: "",
        sorted: false,
    };
}

componentDidMount = () => {
    fetch("https://randomuser.me/api/?results=10&nat=us")
        .then(res => res.json())
        .then(json => {
            this.setState({ employees: json.results })
        })
};

employeeSort = () => {
    const { employees, search } = this.state;
    const employeeSort = employees.filter(sorted => {
        return (
            sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
            sorted.name.last.toLowerCase().includes(search.toLowerCase())
        )
    })
    this.setState({ employeeSort })
}

initSort = event => {
    this.setState({ search: event.target.value }), () => {
        this.employeeSort();
        this.setState({ sorted: true });
    }
}

render = () => {
    return (
        <div>
            <Header
                search={this.state.search}
                initSort={this.state.initSort}
            />
        </div>

        <div className="Container">
            <Table className="Table">
                <thead className="thead">
                    <tr>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Cell Number</th>
                        <th>DOB</th>
                    </tr>
                </thead>
                <tbody>

                {!this.state.sorted
                ? this.state.employees.map(employee => (

                <SearchResults
                key={employee.index.value}
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
                    key={employee.index.value}
                    photo={employee.picture.medium}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    email={employee.email}
                    cell={employee.cell}
                    age={employee.dob.age}
                    />

                ))};

                </tbody>   
            </Table>
        </div >
    )
}

export default EmployeeTable