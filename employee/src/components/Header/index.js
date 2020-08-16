import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import EmployeeTable from "./EmployeeTable";


// react bootstrap search
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
    
        <Form inline>
        <FormControl type="text" placeholder="Search" name="search" className="mr-sm-2" onChange={(event) => props.initSort(event)}/>
        <Button variant="outline-info">Search Employee</Button>
        </Form>
      </Navbar>
    )
}

export default Header