import { Link } from "react-router-dom";
import Tables from "../components/tables/Tables";
import Forms from "../components/form/Forms";

const Home = () => {
  return (
    <>
      <Link to="/AfriQExpress">AfriQExpress</Link>
      <Link to="/AfriQPay">AfriQPay</Link>
      <h1>Home</h1>

      <Tables />
      <Forms />
    </>
  );
};

export default Home;
