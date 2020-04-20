import React from "react";
import Header from "../../components/header/header";
import LinkedCard from "./page-components/linked-card/linked-card";
import { challengeDB } from "./challengeDB";

const ResponsiveLayouts = () => {
  return (
    <>
      <Header />
      <div className="responsive-layout-page">
        <h2 className="page-title">Responsive Layout Challenges</h2>
        <div className="menu-container">
          {challengeDB.map((item) => {
            return (
              <LinkedCard
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                url={`/${item.url}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ResponsiveLayouts;
