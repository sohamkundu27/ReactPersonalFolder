import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function Jetbot() {
  const [index, setIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const slides = [
    "../src/PortfolioComponents/portfoliopics/jetbot1.jpeg",
    "../src/PortfolioComponents/portfoliopics/jetbot2.jpeg",
    "../src/PortfolioComponents/portfoliopics/jetbot3.jpeg",
    "../src/PortfolioComponents/portfoliopics/jetbot4.jpeg",
    "../src/PortfolioComponents/portfoliopics/jetbot5.jpeg"
  ];

  function handleButtonClick(direction) {
    if (isButtonDisabled) return;

    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 1900);

    if (direction === 'next') {
      setIndex((i) => (i + 1) % slides.length);
    } else {
      setIndex((i) => (i - 1 + slides.length) % slides.length);
    }
  }

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: 'none' },
    config: { mass: 4, tension: 100, friction: 20 },
  });

  return (
    <div className="row">
      <div className="col">
        <span className="miniheader">JetBot</span><br />
        <div className="port-text">
        Building the Jetbot required 3D printing, intricate assembly, and making permanent electrical connections with soldering. The computer used in this build was the Jetson Nano. The chassis was 3D printed, and most of the other parts were bought off Adafruit. Upon completion, I am able to use the software Ubuntu Linux to control the JetBot and move it, utilizing its wheels and camera. Also the jetbot is able to navigate cluttered spaces using its camera and wheels. 
        <br /> <br />Languages and tools used - Python, Jupyter Notebook, Linux Ubuntu

        </div>
      </div>
      <div className="col">
        <div className="mainslidercontent">
          <button
            className="sliderbutton prevbutt"
            onClick={() => handleButtonClick('prev')}
            disabled={isButtonDisabled}
          >
            &#10094;
          </button>
          {transitions((style, item) => (
            <animated.img
              className="sliderimages"
              src={slides[item]}
              alt=""
              style={{ ...style }}
            />
          ))}
          <button
            className="sliderbutton nextbutt"
            onClick={() => handleButtonClick('next')}
            disabled={isButtonDisabled}
          >
            &#10095;
          </button>
        </div>
        <div className="portfolioview">
        <a href="https://github.com/SoKu27" target="_blank">
          <button className="icon-buttons portview">
            <img
              id="viewcodeid"
              className="iconpics"
              src="../src/assets/pics/viewcode.png"
              alt=""
            />
            <span>Code coming soon</span>
          </button>
        </a>
      </div>
      </div>

    </div>
  );
}

export default Jetbot;
