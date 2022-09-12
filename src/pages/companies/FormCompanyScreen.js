import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

//componentes de react-bootstrap
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//estilos personalizados
import "./styles.css";

export const RegisterCompanyScreen = () => {
  // const location = useLocation;
  // const { pathname } = location();
  // console.log(pathname);
  const navigate = useNavigate();
  const params = useParams();


  const [company, setCompany] = useState({
    name: "",
    dir: "",
    nit: "",
    tel: "",
  });
  const { name, dir, nit, tel } = company;

  const handleInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const getCompany = async (id) => {
    try {
      const resp = await axios(`http://127.0.0.1:8000/api/companies/${id}`);
      const { name, dir, nit, tel } = resp.data.company;
      setCompany({ name, dir, nit, tel });
    } catch (error) {
      console.log(error);
    }
  };

  //comprueba si hay parametro para disparar la consulta del item a editar.
  useEffect(() => {
    if (params.id) {
      getCompany(params.id);
    }
    // eslint-disable-next-line
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!params.id) {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/companies/",
          company
        );
        if (response.data.message === "Company create") {
          Swal.fire({
            icon: "success",
            text: "Compañia creada",
          });
          navigate("/companies");
          setCompany({});
        }
      } else {
        const response = await axios.put(
          `http://127.0.0.1:8000/api/companies/${params.id}`,
          company
        );
        if (response.data.message === "Company updated") {
          Swal.fire({
            icon: "success",
            text: "Compañia creada",
          });
          navigate("/companies");
          setCompany({});
        }
      }
    } catch (error) {}
  };

  return (
    <Container className="container_form">
      <br />
      <h3 className="title">Compañia</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Text className="text-muted">Empresa.</Form.Text>
          <Form.Control
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text className="text-muted">Direccion.</Form.Text>
          <Form.Control
            type="text"
            name="dir"
            value={dir}
            required
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text className="text-muted">NIT.</Form.Text>
          <Form.Control
            type="text"
            name="nit"
            value={nit}
            required
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Text className="text-muted">Telefono.</Form.Text>
          <Form.Control
            type="text"
            name="tel"
            value={tel}
            required
            onChange={handleInputChange}
          />
        </Form.Group>
        {params.id ? (
          <Button
            type="submit"
            className="btn btn-block btn-primary button_update"
          >
            Actualizar
          </Button>
        ) : (
          <Button
            type="submit"
            className="btn btn-block btn-success button_submit"
          >
            Register
          </Button>
        )}
      </Form>
    </Container>
  );
};
