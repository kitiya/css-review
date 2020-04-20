import React from "react";
import ChallengeFooter from "../page-components/challenge-footer/challenge-footer";
import "./challenge-02.style.scss";

const Challenge02 = () => {
  return (
    <>
      <section className="challenge-sandbox" id="ch02">
        <div className="body02">
          <div class="container">
            <div className="wrapper">
              <div class="intro-content">
                <h1>Lorem ipsum dolor sit.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem aspernatur distinctio laudantium dolores. Nulla
                  quibusdam reprehenderit eum sit minus aliquid!
                </p>
              </div>
            </div>
          </div>
          <section className="more-content-wrapper">
            <h2>more content D:</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, mollitia adipisci magnam voluptatibus repellendus
              fuga ut repellat exercitationem eaque amet, omnis aliquam fugiat
              laudantium id dicta at? Consectetur iure porro illum laudantium
              excepturi a laborum!
            </p>
            <p>
              Sit magni soluta porro fugit placeat eius itaque, accusamus
              quisquam voluptates reiciendis pariatur, vitae molestiae. Minima,
              quos reprehenderit autem animi, nisi necessitatibus eligendi quis
              modi, facilis ipsam nihil odit quaerat! Nisi doloribus harum culpa
              ipsam!
            </p>
            <p>
              Sint corporis animi repudiandae. Aliquid illum, tenetur magnam
              provident molestiae rem doloremque aspernatur quia reiciendis est
              facilis enim praesentium officia sequi qui debitis exercitationem
              quaerat hic quos recusandae. Architecto repudiandae aperiam
              tempora iste saepe error.
            </p>
            <p>
              Provident aut suscipit aspernatur doloribus illum assumenda
              cupiditate perferendis dolores! Obcaecati omnis magnam ipsam
              voluptas ipsa eos explicabo quisquam architecto similique, sunt
              repellendus animi a doloribus ab deserunt. Dicta neque nostrum
              modi, illum debitis dolorem.
            </p>
          </section>
        </div>
      </section>
      <ChallengeFooter title="Challenge 02: Max Width" nextId={"03"} />
    </>
  );
};

export default Challenge02;
