import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function PremierLeagueStats() {
  const [index, setIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const slides = [
    "../src/PortfolioComponents/portfoliopics/PremierLeague1.png",
    "../src/PortfolioComponents/portfoliopics/PremierLeague2.png",
    "../src/PortfolioComponents/portfoliopics/PremierLeague3.png",
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
            <a href="https://github.com/SoKu27/PremierLeagueStats" target="_blank">
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
            <span className="miniheader">Premier League Stats Tracker</span><br />
            <div className="port-text">
            This project uses a free API provided by API-Football.com. I used Python for the backend and HTML and CSS for the frontend in this full-stack project. This project has a very easy-to-use UI with a functional backend. The user enters a team name using a dropdown menu of possible options and any season starting from 2011. This application will return the number of goals scored and the number of games they played in that season.
            <br /><br /> Languages and tools used- HTML CSS Flask Python
            </div>
        </div>
    </div>

  );
}

export default PremierLeagueStats;