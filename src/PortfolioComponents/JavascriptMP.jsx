import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function JavascriptMP() {
  const [index, setIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const slides = [
    "../src/PortfolioComponents/portfoliopics/jsm1.png",
    "../src/PortfolioComponents/portfoliopics/jsm2.png",
    "../src/PortfolioComponents/portfoliopics/jsm3.png",
    "../src/PortfolioComponents/portfoliopics/jsm4.png",
    "../src/PortfolioComponents/portfoliopics/jsm5.png",
    "../src/PortfolioComponents/portfoliopics/jsm6.png",
    "../src/PortfolioComponents/portfoliopics/jsm7.png",
    "../src/PortfolioComponents/portfoliopics/jsm8.png",
    "../src/PortfolioComponents/portfoliopics/jsm9.png",
  ];

  function handleButtonClick(n) {
    if (isButtonDisabled) return; 

    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 1900); 

    if (n === 'next') {
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
    <div className="row normal">
              <div className="col">
            <span className="miniheader">Javascript Mini Projects</span><br />
            <div className="port-text">
            <ol className='jsmol'>
              <li>
                <span className="jsmbold">Random Password Generator</span>
                - Generates a password that can contain any combination of lowercase letters, uppercase letters, symbols, and/or numbers.
              </li>
              <li>
                <span className="jsmbold">Calculator</span>
                - a simple four-function calculator. Complete with professional CSS and interactive and appealing UI
              </li>
              <li>
                <span className="jsmbold">Digital Clock</span>
                - a functional digital clock. Focused heavily on CSS. 
              </li>
              <li>
                <span className="jsmbold">Number Tracker</span>
                - Website with 6 buttons which allow you to change the number by 1, 10, or, 100. Focused on functionality.
              </li>
              <li>
                <span className="jsmbold">React Color Picker</span>
                - Functional yet simple UI. Custom copy button that allows you to copy the color copy. Allow users to easily choose any color. 
              </li>
              <li>
                <span className="jsmbold">React Todo App</span>
                - Fully functional yet very appealing and easy-to-use UI. Easy to enter, move, and delete tasks. 
              </li>
              <li>
                <span className="jsmbold">Rock Paper Scissors</span>
                - Easy to play RPS game. Appealing UI and focused on functionality. Complete with a score tracker for the user and the computer.
              </li>
              <li>
                <span className="jsmbold">Stopwatch</span>
                - Simple, functional, and easy to use stopwatch website.
              </li>
              <li>
                <span className="jsmbold">Weather App</span>
                - Requires the user to enter any city worldwide and will return the temperature in fahrenheit, humidity, description, and an emoji to describe the weather. Uses the API from openweathermap.com.
              </li>
            </ol>
            <div>Languages and tools used- HTML CSS React Javascript</div>

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
            <a href="https://github.com/sohamkundu27/JavaScript-MiniProjects" target="_blank">
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

export default JavascriptMP;