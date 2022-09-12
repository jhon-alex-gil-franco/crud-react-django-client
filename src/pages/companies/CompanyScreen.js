import React, { useEffect, useState } from "react";
import axios from "axios";

//componentes de react-bootstrap
import Table from "react-bootstrap/Table";
import { CompanyItems } from "../../components/company/CompanyItems";

export const CompanyScreen = () => {
  //Estado para manejar la respuesta http de lista de compañias.
  const [companies, setCompanies] = useState([]);

  //listado de compañias desde la base de datos.
  const getCompanies = async () => {
    try {
      const resp = await axios("http://127.0.0.1:8000/api/companies");
      setCompanies(resp.data.companies);
    } catch (error) {}
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      <br />
      <Table striped bordered hover responsive size="sm">
        <thead>
          <tr>
            <th>Compañia</th>
            <th>Direccion</th>
            <th>Nit</th>
            <th>Telefono</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {companies &&
            companies.map((element) => (
              <CompanyItems
                key={element.id}
                props={{ element }}
                getCompanies={getCompanies}
              />
            ))}
        </tbody>
      </Table>
    </>
  );
};
