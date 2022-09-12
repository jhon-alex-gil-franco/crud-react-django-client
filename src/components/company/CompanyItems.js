import React from "react";
import { useNavigate} from 'react-router-dom';
import axios from "axios";

//componentes de react-bootstrap
import Button from "react-bootstrap/Button";

export const CompanyItems = ({ props, getCompanies }) => {
  const { element } = props;

  const navigate = useNavigate()

  const handleDelete = async () => {
    const resp = await axios.delete(
      `http://127.0.0.1:8000/api/companies/${element.id}`
    );
    if (resp.data.message === "Success") {
      getCompanies();
    }
  };

  const handleUpdate = () => {
   navigate(`/update${element.id}`)
  };

  return (
    <>
      <tr>
        <td>{element.name}</td>
        <td>{element.dir}</td>
        <td>{element.nit}</td>
        <td>{element.tel}</td>
        <th>
          <Button variant="info" onClick={handleUpdate}>
            editar
          </Button>
        </th>
        <th>
          <Button variant="danger" onClick={handleDelete}>
            eliminar
          </Button>
        </th>
      </tr>
    </>
  );
};
