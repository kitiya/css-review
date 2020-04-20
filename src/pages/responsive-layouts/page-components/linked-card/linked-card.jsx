import React from "react";
import { Link } from "react-router-dom";
import "./linked-card.style.scss";

const LinkedCard = ({ id, title, url }) => {
  return (
    <>
      <article className="card-container">
        <Link to={url}>
          <h6 className="card-id">{`Challenge ${id}`}</h6>
          <h5 className="card-title">{title}</h5>
          {/* {content ? <p className="card-content">{content}</p> : null} */}
        </Link>
      </article>
    </>
  );
};

export default LinkedCard;
