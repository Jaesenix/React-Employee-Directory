import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


// react bootstrap search
function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Employee Directory</Navbar.Brand>
    
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search Employee</Button>
        </Form>
      </Navbar>
    )
}

export default Header