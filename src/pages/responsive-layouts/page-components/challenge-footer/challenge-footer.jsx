import React from "react";
import { Link } from "react-router-dom";
import "./challenge-footer.style.scss";

const ChallengeFooter = ({ title, nextId }) => {
  return (
    <footer className="challenge-footer">
      <div className="wrapper">
        <Link to="/">Home</Link>
        <Link to="/responsive-layouts">Back</Link>
      </div>
      <span className="h5">{title}</span>
      <Link to={`/responsive-layout-${nextId}`}>Next Challenge</Link>
    </footer>
  );
};

export default ChallengeFooter;
