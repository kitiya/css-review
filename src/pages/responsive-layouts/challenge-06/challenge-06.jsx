import React from "react";
import ChallengeFooter from "../page-components/challenge-footer/challenge-footer";
import "./challenge-06.style.scss";

const Challenge06 = () => {
  return (
    <>
      <section className="challenge-sandbox">
        <div className="body06">
          <header>
            <nav class="nav">
              <ul class="nav__list">
                <li class="nav__item">
                  <a href="/#" class="nav__link">
                    Home
                  </a>
                </li>
                <li class="nav__item">
                  <a href="/#" class="nav__link">
                    About
                  </a>
                </li>
                <li class="nav__item">
                  <a href="/#" class="nav__link">
                    Contact
                  </a>
                </li>
                <li class="nav__item">
                  <a href="/#" class="nav__link">
                    Sign In
                  </a>
                </li>
                <li class="nav__item">
                  <a href="/#" class="nav__link nav__link--button">
                    Sign up
                  </a>
                </li>
              </ul>
            </nav>
          </header>

          <section className="hero">
            <div className="container row">
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
              </div>{" "}
              <img
                src="https://unsplash.it/600/400"
                alt="UX design sketches"
                class="hero__img"
              />
            </div>
          </section>

          <main class="main container row">
            <section class="primary-content">
              <h2 class="section-title">
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
            <aside class="sidebar">
              <h2 class="sidebar-title">Cheap</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <h2 class="sidebar-title">Quick</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <h2 class="sidebar-title">Quality</h2>
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
