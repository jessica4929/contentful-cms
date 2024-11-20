import heroImg from "./assets/myHero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Innovative Projects in React</h1>
          <h5>Your Vision, My Code: Front-End Solutions that Shine</h5>
          <p>React Projects by Jessica L. Kaul</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
