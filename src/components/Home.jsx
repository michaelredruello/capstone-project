import React from "react";
import Search from "./Search/Search";
import logo from "../imgs/logo-2.svg";

const Home = () => {
  return (
    <div className="home">
      <section className="banner">
        <div className="container banner-container">
          <div className="banner-text">
            <h1>Find your game at the best price</h1>
            <p>
              Search between 25+ game platform, including <span>Steam</span>,{" "}
              <span>Origin</span> and the <span>EpicGameStore</span> .
            </p>
            <Search />
          </div>
          <div className="banner-elem img-container">
            <img className="banner-img" src={logo} alt="banner_img" />
          </div>
        </div>
      </section>
      <section className="main-content">
        <div className="container">
          <div className="main-content-section">
            <div className="col-img main-img-1"></div>
            <div className="col-txt">
              <div className="main-text">
                <h2>Save up to 98% on your games !</h2>
                <p>
                  {" "}
                  With Best Deals, expensive pricing is no longer a problem!
                </p>
                <br />
                <p>
                  {" "}
                  Find the best price for your favourite game between 25+
                  different sales platforms
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="fixed-bottom">
        Michael Redruello, Copyright © 2022, All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
