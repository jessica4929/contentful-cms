import heroImg from "./assets/myHero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Projects</h1>
          <p>
            Check out a few of my projects from the Udemy's{" "}
            <a
              href="https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF&couponCode=ST20MT50724"
              target="_blank"
              rel="noreferrer"
            >
              React 18 Tutorial and Projects Course - 2024 Edition
            </a>
            .
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and browser" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
