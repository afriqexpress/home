import { Link } from "react-router-dom";
import Tables from "../components/tables/Tables";

const Home = () => {
    return(
        <>
            <Link to="/AfriQExpress">AfriQExpress</Link>
            <Link to="/AfriQPay">AfriQPay</Link>
            <h1>Home</h1>

            <Tables />
        </>
    );
}

export default Home;