import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Contact() {
  const [copiedText, setCopiedText] = useState('Copy'); 

  const copyText = () => {
    navigator.clipboard.writeText('sohamkundu2704@gmail.com')
      .then(() => setCopiedText('Copied✅'),
      setTimeout(() => setCopiedText('Copy'), 3000)
    )}
    return (
    <div className='maincontcon'>
      <div id="contact" className="footer">

        <div>
          <h4>Socials</h4>

          <div className='sociallinks'><a href="https://www.linkedin.com/in/sohamkundu27/" target='_blank'>LinkedIn</a></div>
          <div className='sociallinks'><a href="https://www.instagram.com/sohamkundu2704/" target='_blank'>Instagram</a></div>
          <a href="#"><i className="fab fa-instagram"></i></a>

        </div>
        <div>
          
          <img src="../src/assets/pics/icon.png"  className="bottomlogo" />
          <h4>Reach out!</h4>
          <div>763-406-1195</div>
          <div id='email'>
            <a href="mailto:sohamkundu2704@gmail.com">sohamkundu2704@gmail.com</a>
            <br />
            <button className='copy' onClick={copyText}>{copiedText}</button>
          </div>
        </div>
        <div className='contnav'>
          <Navbar>
            <Nav.Link href="#arrowtotop">          
              <button className="icon-buttons">
                <img className="iconpics arrow" src="../src/assets/pics/uparrow.png" alt="" />
              </button></Nav.Link>
          </Navbar>  
        </div> 
      </div>
      <div className='bottomcontcon'>
        <img className = "sokulogo" src="../src/assets/pics/sokulogo.png" alt="" />
        <div className='copyright'>&copy; 2024 Soham Kundu. </div>
      </div>
    </div>
    )
  }
  
  export default Contact
  