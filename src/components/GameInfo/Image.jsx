import React from "react";
import logo from "../../imgs/logo-2.svg";

const Image = ({ imgurl, title, price, gameID, addFav }) => {
  return (
    <div className="container">
      <section className="banner">
        <div className="container banner-container">
          <div className="banner-elem">
            <div className="banner-text">
              <h1>{title}</h1>
            </div>
          </div>
          <div className="banner-elem img-container">
            <img className="banner-img" src={logo} />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Image;
