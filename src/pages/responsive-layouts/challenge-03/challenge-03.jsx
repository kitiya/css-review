import React from "react";
import ChallengeFooter from "../page-components/challenge-footer/challenge-footer";
import "./challenge-03.style.scss";

const Challenge03 = () => {
  return (
    <>
      <section className="challenge-sandbox" id="ch02">
        <div className="body03">
          <div className="container">
            <h2 className="title">
              Responsive layouts don't have to be a struggle
            </h2>
            <p className="subtitle">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem aspernatur distinctio laudantium dolores. Nulla
              quibusdam reprehenderit eum sit minus aliquid! Exercitationem
              aspernatur distinctio laudantium dolores.
            </p>
            <a href="#" className="btn">
              I want to learn
            </a>
          </div>
        </div>
      </section>
      <ChallengeFooter title="Challenge 02: Max Width" nextId={"04"} />
    </>
  );
};

export default Challenge03;
