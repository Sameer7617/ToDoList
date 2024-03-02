import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/display">Todo List Management</Navbar.Brand>
      </Container>
    </Navbar><h1 style={{textAlign:"center"}}>List Of ToDos</h1></>
  )
}

export default Navigation