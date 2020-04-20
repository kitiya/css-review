import React from "react";
import Header from "../../components/header/header";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <Link to="/responsive-layouts">Responsive Layouts</Link>
    </>
  );
};

export default HomePage;
