import "./fotter.css";
const Fotter = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStar f-left">
          <img src="../../public/logo.png" alt="logo" width={120} />
          <span className="secondaryText">
            Our Vision Is To Make Learnig <br />
            Easy For Everyone
          </span>
        </div>
      </div>
    </section>
  );
};

export default Fotter;
