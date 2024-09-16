import { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function MLActivity() {
  const [index, setIndex] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const slides = [
    "../src/PortfolioComponents/portfoliopics/MLActivity1.png",
    "../src/PortfolioComponents/portfoliopics/MLActivity2.png",
    "../src/PortfolioComponents/portfoliopics/MLActivity3.png",
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
        <a href="https://github.com/sohamkundu27/ML-Activities-Recomender-System" target="_blank">
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
        <span className="miniheader">ML Activities Recomender System</span><br />
        <div className="port-text sm">
        I designed and developed a dynamic full-stack web which allows users to input their age, gender, and time of day to receive personalized activity recommendations. I created a custom synthetic dataset with over 10,000 data points using Pandas and NumPy and trained a machine learning model using Scikit-learn’s MultiOutputClassifier with a RandomForestClassifier (500 estimators, max depth of 3), achieving 75% accuracy and a 25% hamming loss on test data. The application includes an end-to-end ML pipeline with train-test splits and model evaluation for optimal performance. Additionally, I generated a tailored activity list using ChatGPT, incorporating unique options based on user preferences and displayed how well each activity matched users through a custom percentage-based scoring system. I also implemented a robust SQL database to store user inputs, providing insights into user behavior trends and enabling future model improvements.        <br /> <br />Languages and tools used - Python, Flask, Machine Learning, Pandas, NumPy, Scikit-Learn, Jupyter Notebook, SQL, HTML, CSS, Bootstrap
        </div>
      </div>
    </div>
  );
}

export default MLActivity;
