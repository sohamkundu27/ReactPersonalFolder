import { Navbar, Nav } from 'react-bootstrap';

function Head() {
  return (
    <div className='Tbarcontain'>
        <Navbar bg="none" variant="dark" expand="lg" className='fixed-navbar'>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" style={{ marginLeft: "auto" }}>
              <Nav.Link className="navlinks" href="#about">About Me</Nav.Link>
              <Nav.Link className="navlinks" href="#experience">Experience</Nav.Link>
              <Nav.Link className="navlinks" href="#skills">Skills</Nav.Link>
              <Nav.Link className="navlinks" href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link className="navlinks" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      <div className='seniorpiccontain'>
        <img src="../src/assets/pics/sohamsenior.jpg" id="seniorpic" alt="wdw" />
        <div className="header" id='name'>Soham Kundu</div>
        <div className="description">Computer Engineering hi | UW-Madison</div>
        <div className='iconscontainer'>
          <a href="https://github.com/SoKu27" target="_blank"><button className='icon-buttons'><img id="gitid" className="iconpics" src="../src/assets/pics/githubicon.png" alt="" /><span id='githubtext'>Github</span></button></a>
          <a href="../src/assets/SohamKundu-Resume.pdf" target='_blank'><button className='icon-buttons'><img id="resid" className="iconpics" src="../src/assets/pics/resumeicon.png" alt="" /><span id='resume-text'>Resume</span></button></a>
          <a href="#contact"><button className='icon-buttons'><img id="contid" className="iconpics" src="../src/assets/pics/contacticon.png" alt="" /><span id='contact-text'>Contact</span></button></a>
          <a href="https://www.linkedin.com/in/soham-kundu-a067092b3/" target='_blank'><button className='icon-buttons'><img id="linkid" className="iconpics" src="../src/assets/pics/linkedinicon.png" alt="" /><span id='linkedin-text'>Linkedin</span></button></a>
          <a href="#portfolio"><button className='icon-buttons'><img id="portid" className="iconpics" src="../src/assets/pics/portfolioicon.png" alt="" /><span id='portfolio-text'>Portfolio</span></button></a>
        </div>
      </div>
    </div>
  );
}

export default Head;