import Table from "react-bootstrap/Table";

interface Props {
  items: string[];
}

function Tables({ items }: Props) {
  return (
    <Table striped bordered hover>
      <tbody>
        {items.length === 0 && (
          <tr>
            <td>No items Found</td>
          </tr>
        )}
        {items.map((item) => (
          //TODO: key should be ID
          <tr key={item}>
            <td></td>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Tables;
