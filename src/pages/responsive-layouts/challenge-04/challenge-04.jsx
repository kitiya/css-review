import React from "react";
import ChallengeFooter from "../page-components/challenge-footer/challenge-footer";
import "./challenge-04.style.scss";

const Challenge04 = () => {
  return (
    <>
      <div className="challenge-sandbox">
        <div className="body04">
          <section class="hero">
            <div class="container">
              <div class="hero__text">
                <h1>Responsive layouts don’t have to be a struggle</h1>
                <p className="subtitle">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <a href="/#" class="btn">
                  I want to learn
                </a>
              </div>
            </div>
          </section>

          <section className="three-col">
            <div class="container row">
              <div class="col">
                <h2 className="three-col__title">Cheap</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div class="col">
                <h2 className="three-col__title">Quick</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div class="col">
                <h2 className="three-col__title">Affordable</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </section>

          <section className="two-col">
            <div className="container row">
              <div class="col">
                <h2>Cheap</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
              <div class="col">
                <h2>Quick</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      <ChallengeFooter title="Challenge 04: Flexbox I" nextId={"05"} />
    </>
  );
};

export default Challenge04;
