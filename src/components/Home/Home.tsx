import "./index.css";

const Home = () => {
  return (
    <main>
      <section className="first-banner">
        <div className="first-banner-text">
          <h1>Find your game at the best price!</h1>
          <p>
            Search between 25+ game platforms, including <span>Steam</span>,{" "}
            <span>Origin</span>, and <span>Epic Game Store</span>.
          </p>
        </div>
        <div className="first-banner-img-container">
          <img
            className="first-banner-img"
            src="/ControllerLogo.png"
            alt="banner"
          />
        </div>
      </section>

      <section className="second-banner">
        <div className="second-banner-img-container">
          <img className="second-banner-img" src="./Gaming.jpg" alt="banner" />
        </div>
        <div className="second-banner-text">
          <h2>Save up to 98% on your games!</h2>
          <p>With Best Deals, expensive pricing is no longer a problem!</p>
          <p>
            Find the best price for your favourite game across 25+ different
            sales platforms.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Michael Redruello — All Rights Reserved
        </p>
      </footer>
    </main>
  );
};

export default Home;
