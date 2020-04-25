import React from "react";
import ChallengeFooter from "../page-components/challenge-footer/challenge-footer";
import "./challenge-05.style.scss";

const Challenge05 = () => {
  return (
    <>
      <section className="challenge-sandbox">
        <div className="body05">
          <header class="hero">
            <div class="container row">
              <div class="hero__text">
                <h1>Responsive layouts don’t have to be a struggle</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <a href="/#" class="btn">
                  I want to learn
                </a>
              </div>

              <img
                className="hero__image"
                src="https://unsplash.it/386/292"
                alt=""
              />
            </div>
          </header>

          <main className="main">
            <div className="container row">
              <section className="primary-content">
                <h2 className="section__title">
                  Quality designs made custom, on demand, just for you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </section>
              <aside className="sidebar">
                <section className="group">
                  <h2 className="sidebar-title">Cheap</h2>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </section>
                <section className="group">
                  <h2 className="sidebar-title">Quick</h2>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </section>
                <section className="group">
                  <h2 className="sidebar-title">Quality</h2>
                  <p className="subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </section>
              </aside>
            </div>
          </main>
        </div>
      </section>
      <ChallengeFooter title="Challenge 05: Flexbox II: Image" nextId={"06"} />
    </>
  );
};

export default Challenge05;
