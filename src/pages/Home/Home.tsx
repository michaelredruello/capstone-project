import "./index.css";

const Home = () => {
  return (
    <main>
      <section className="first-banner">
        <div className="first-banner-text">
          <h1>Find your games at the best price!</h1>
          <p>
            Search across 25+ platforms including <span>Steam</span>,{" "}
            <span>Origin</span>, and <span>Epic Game Store</span>.
          </p>
        </div>
        <div className="first-banner-img-container">
          <img
            className="first-banner-img"
            src="/ControllerLogo.png"
            alt="Controller illustration"
          />
        </div>
      </section>

      <section className="second-banner">
        <div className="second-banner-img-container">
          <img
            className="second-banner-img"
            src="/Gaming.jpg"
            alt="Gaming artwork"
          />
        </div>
        <div className="second-banner-text">
          <h2>Save up to 98% on your games!</h2>
          <p>With Best Deals, expensive pricing is no longer a problem.</p>
          <p>
            Browse deals from over 25 trusted stores and always get the best
            price.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
