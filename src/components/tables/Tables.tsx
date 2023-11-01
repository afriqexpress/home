import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { Preregister, getPreregisters, transformAvatarToUrl} from "../../services/api";
import "./Tables.css";

function Tables() {
  const [data, setData]= useState<Partial<Preregister>[]>([]);
  useEffect(() => {
    getPreregisters().then((apiData) => {
      if(apiData) setData(apiData);
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
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              {item.avatar ? (
                <img
                  className="img"
                  src={transformAvatarToUrl(item.avatar)}
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
