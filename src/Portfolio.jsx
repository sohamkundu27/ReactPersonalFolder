import Jetbot from "./PortfolioComponents/Jetbot";
import MLActivity from "./PortfolioComponents/MLActivity";
import PremierLeagueStats from "./PortfolioComponents/PremierLeagueStats";
import StockTracker from "./PortfolioComponents/StockTracker";


function Portfolio() {


    return (
        <div className="portfoliomaincon" id="portfolio">
            <div className="header">Portfo234lio</div>
            <div className="container text-center">
                <Jetbot/>
                <hr className="horiline2"/>
                <MLActivity/>
                <hr className="horiline2"/>
                <StockTracker/>
                <hr className="horiline2"/>
                <PremierLeagueStats/>
            </div>
        </div>
    );
  }
  
  export default Portfolio;