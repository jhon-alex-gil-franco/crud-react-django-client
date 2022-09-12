import React from "react";
import { NavLink } from "react-router-dom";

//componentes de react-bootstrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//estilos personalizados
import "./styles.css";

export const NavbarComponent = () => {
  return (
    <Navbar className="navbar" bg="light" variant="light">
      <Navbar.Brand>Compañias</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink className="link" to="/">
          Registrar
        </NavLink>
        <NavLink className="link" to="/companies">
          Compañias
        </NavLink>
      </Nav>
    </Navbar>
  );
};
