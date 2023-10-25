import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import GetAPI from "../../services/GetAPI";
import "./Tables.css";

function Tables() {
  const [data, setData]: any[] = useState([]);
  useEffect(() => {
    GetAPI().then((apiData) => {
      console.log(apiData);
      setData(apiData);
    });
  }, []);
  return (
    <Table striped bordered hover>
      <tbody>
        {data.length === 0 && (
          <tr>
            <td>No items Found</td>
          </tr>
        )}
        {data.map((item: any) => (
          <tr key={item.id}>
            <td>
              {item.avatar ? (
                <img
                  className="img"
                  src={`http://localhost:8000/v1/preregisters/avatar/${item.avatar}`}
                />
              ) : null}
            </td>
            <td>{item.companyName}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tables;
