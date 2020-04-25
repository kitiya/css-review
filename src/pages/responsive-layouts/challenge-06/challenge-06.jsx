import React from "react";
import ChallengeFooter from "../page-components/challenge-footer/challenge-footer";
import "./challenge-06.style.scss";

const Challenge06 = () => {
  return (
    <>
      <section className="challenge-sandbox">
        <div className="body06">
          <header>
            <div className="container row">
              <a href="/#" className="logo__link">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/logo/ks_logo.svg`}
                  alt=""
                />
              </a>
              <nav className="nav">
                <ul className="nav__list nav__list--primary">
                  <li className="nav__item">
                    <a href="/#" className="nav__link">
                      Home
                    </a>
                  </li>
                  <li className="nav__item nav__list--secondary">
                    <a href="/#" className="nav__link">
                      About
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="/#" className="nav__link">
                      Contact
                    </a>
                  </li>
                </ul>
                <ul className="nav__list">
                  <li className="nav__item">
                    <a href="/#" className="nav__link">
                      Sign In
                    </a>
                  </li>
                  <li className="nav__item">
                    <a href="/#" className="nav__link nav__link--button">
                      Sign up
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>

          <section className="hero">
            <div className="container row">
              <div className="hero__text">
                <h1>Responsive layouts don’t have to be a struggle</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <a href="/#" className="btn">
                  I want to learn
                </a>
              </div>{" "}
              <img
                src="https://unsplash.it/600/400"
                alt="UX design sketches"
                className="hero__img"
              />
            </div>
          </section>

          <main className="main container row">
            <section className="primary-content">
              <h2 className="section-title">
                Quality designs made custom, on demand, just for you
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </section>
            <aside className="sidebar">
              <h2 className="sidebar-title">Cheap</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <h2 className="sidebar-title">Quick</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <h2 className="sidebar-title">Quality</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </aside>
          </main>
        </div>
      </section>

      <ChallengeFooter title="Challenge 06: Basic Navbar" nextId={"07"} />
    </>
  );
};

export default Challenge06;
