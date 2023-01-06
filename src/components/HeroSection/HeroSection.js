import "../../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero">
      <div >
        <h1 className="hero__container">
          SAFE DESTINATIONS FOR{" "}
          <span className="hero__underline">WOMEN</span>
        </h1>
        <div className="hero__box">
          <p>
            “The world is waiting for you. Good Luck. Travel Safe. Go!” –{" "}
            <span className="hero__name">Phil Keoghan</span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeroSection;
