import React from 'react';
import Table from 'react-bootstrap/Table';
// import Header from "../Header";
import "./style.css";

function EmployeeTable() {
    return (
        <div className="Table">
            <Table>
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Cell Number</th>
                        <th>Time Zone</th>
                    </tr>
                </thead>
            </Table>
        </div>
    );
}

export default EmployeeTable