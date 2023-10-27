import { Link } from "react-router-dom";

import PreregisterSection from "../components/preregister/preregistersection";
import React from "react";

const Home = () => {
  return (
    <>
      <Link to="/AfriQExpress">AfriQExpress</Link>
      <Link to="/AfriQPay">AfriQPay</Link>
      <h1>Home</h1>

      <PreregisterSection />
    </>
  );
};

export default Home;
