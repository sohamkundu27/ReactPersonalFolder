import Jetbot from "./PortfolioComponents/Jetbot";
import PremierLeagueStats from "./PortfolioComponents/PremierLeagueStats";
import StockTracker from "./PortfolioComponents/StockTracker";
import Aspersion from "./PortfolioComponents/Aspersion";
import NumberGuessing from "./PortfolioComponents/NumberGuessing";
import JavascriptMP from "./PortfolioComponents/JavascriptMP";

function Portfolio() {


    return (
        <div className="portfoliomaincon" id="portfolio">
            <div className="header">Portfolio</div>
            <div className="container text-center">
                <Jetbot/>
                <hr className="horiline2"/>
                <PremierLeagueStats/>
                <hr className="horiline2"/>
                <StockTracker></StockTracker>
                <hr className="horiline2"/>
                <Aspersion/>
                <hr className="horiline2"/>
                <NumberGuessing></NumberGuessing>
                <hr className="horiline2"/>
                <JavascriptMP></JavascriptMP>
            </div>
        </div>
    );
  }
  
  export default Portfolio;