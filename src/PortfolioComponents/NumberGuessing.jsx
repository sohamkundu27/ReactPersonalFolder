import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function NumberGuessing() {
  const [index, setIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const slides = [
    "../src/PortfolioComponents/portfoliopics/NumberGuessing1.png",
    "../src/PortfolioComponents/portfoliopics/NumberGuessing2.png",
    "../src/PortfolioComponents/portfoliopics/NumberGuessing3.png",
    "../src/PortfolioComponents/portfoliopics/NumberGuessing4.png",
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
    <div className="row swap">

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
        <a href="https://github.com/sohamkundu27/Number-Guessing-Game" target="_blank">
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
      <div className="col">
        <span className="miniheader">Number Guessing Game</span><br />
        <div className="port-text">
        This is a fun game where the player tries to guess a number that is randomly selected by the computer. The player enters guesses and receives feedback: whether their guess is too high or low. An error response is given when a guess is entered and it isn't between 1 and 100 and when no guess is entered. I coded this project with python, using the framework flask. As well as HTML and CSS.
        <br /><br />Languages and tools used- HTML CSS Flask Python
        
        </div>
      </div>
    </div>
  );
}

export default NumberGuessing;
