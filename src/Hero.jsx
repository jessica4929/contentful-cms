import heroImg from "./assets/myHero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            quo sunt temporibus earum mollitia dolor enim ab hic minima.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and browser" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
