import React from "react";
import { Link } from "react-router-dom";
import "./challenge-footer.style.scss";

const ChallengeFooter = ({ title, nextId }) => {
  let prevId = nextId - 2;

  if (prevId <= 0) {
    prevId = "01";
  } else if (prevId < 10) {
    prevId = "0".concat(prevId.toString());
  }

  return (
    <footer className="challenge-footer">
      {nextId === 2 ? (
        <div className="wrapper">
          <Link to="/">Home</Link>
          <Link to="/responsive-layouts">Back</Link>
        </div>
      ) : (
        <Link to={`/responsive-layout-${prevId}`}>Previous Challenge</Link>
      )}

      <span className="h5">{title}</span>
      <Link to={`/responsive-layout-${nextId}`}>Next Challenge</Link>
    </footer>
  );
};

export default ChallengeFooter;
