import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function Aspersion() {
  const [index, setIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const slides = [
    "../src/PortfolioComponents/portfoliopics/Aspersion1.png",
    "../src/PortfolioComponents/portfoliopics/Aspersion2.png",
    "../src/PortfolioComponents/portfoliopics/Aspersion3.png",
    "../src/PortfolioComponents/portfoliopics/Aspersion4.png",
    "../src/PortfolioComponents/portfoliopics/Aspersion5.png",
    "../src/PortfolioComponents/portfoliopics/Aspersion6.png",
    "../src/PortfolioComponents/portfoliopics/Aspersion7.png",
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
            <span className="miniheader">Aspersion</span><br />
            <div className="port-text">
            This website was created for Business Professionals of America (BPA) my senior year in high school. My team and I competed in the category of visual team design. Our team was responsible for making promotional content for a movie, so we created a movie poster, character posters, a DVD case, a trailer, a merch store, an instagram, and most importantly a website. My main responsibility was the website. The backend consists of python, where I utilized the web framework of Flask to host the website. The frontend is where I spent most of my time and I used HTML and CSS. I believe that this website played a significant part in my group's immense success in our endeavor this year at BPA. We placed 1st place at the regional tournament, 3rd place at state, and top 10 in the nation.
            <br /><br /> Languages and tools used- HTML CSS Flask Python
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
            <a href="https://github.com/sohamkundu27/Aspersion" target="_blank">
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

export default Aspersion;