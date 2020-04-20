import React from "react";
import ChallengeFooter from "../page-components/challenge-footer/challenge-footer";
import "./challenge-01.style.scss";

const Challenge01 = () => {
  return (
    <>
      <section className="challenge-sandbox" id="ch01">
        <div className="container01">
          <div className="intro-content">
            <h1>Lorem ipsum dolor sit.</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem aspernatur distinctio laudantium dolores. Nulla
              quibusdam reprehenderit eum sit minus aliquid!
            </p>
          </div>
        </div>
        <ChallengeFooter
          title="Challenge 01: Using percentages & avoiding heights"
          nextId={"02"}
        />
      </section>
    </>
  );
};

export default Challenge01;
