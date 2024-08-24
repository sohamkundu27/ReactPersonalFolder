import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function StockTracker() {
  const [index, setIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const slides = [
    "../src/PortfolioComponents/portfoliopics/StockTracker1.png",
    "../src/PortfolioComponents/portfoliopics/StockTracker2.png",
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
        <span className="miniheader">Stock Tracker</span><br />
        <div className="port-text">
        I've created a web application powered by Python and Flask that enables users to access and analyze stock price data. By integrating the Alpha Vantage API, I've facilitated real-time stock data retrieval, encompassing time series information and handling errors for invalid ticker symbols. Furthermore, I used Matplotlib to graph stock price trends, providing users with information visually. The CSS is designed by Bootstrap, giving this application a simple, responsive UI.
        <br /><br /> Languages and tools used- HTML CSS Bootstrap Flask Python
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
        <a href="https://github.com/SoKu27/Stock-Tracker" target="_blank">
          <button className="icon-buttons portview">
            <img
              id="viewcodeid"
              className="iconpics"
              src="../src/assets/pics/viewcode.png"
              alt=""
            />
            <span>Click to view code!</span>
          </button>
        </a>
      </div>
      </div>

    </div>
  );
}

export default StockTracker;
