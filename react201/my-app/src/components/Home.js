import Hero from "./Hero";
const Home = () => {
  return (
    <>
      <h1>
        <Hero text="Home Page" />
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Sint esse consectetur et dolor magna ea pariatur exercitation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
