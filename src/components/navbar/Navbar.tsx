import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <Link to="/AfriQExpress">AfriQExpress</Link>
      <Link to="/AfriQPay">AfriQPay</Link>
    </div>
  );
};

export default Navbar;
