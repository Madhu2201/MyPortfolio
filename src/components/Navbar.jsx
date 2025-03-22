// import {Link} from 'react-scroll';
// import contactimage from '../assets/contact.png'
// import logo from '../assets/logoimg.png'
// import './Navbar.css'
// function Navbar() {
//   return (
//     <nav className='navbar'>
//                 <img className='logo' src={logo}/> 
//     <div className="navcenter">
// <Link to='Home' className='navlink'>Home</Link>
// <Link to='Skills' className='navlink'>Skills</Link>
// <Link to='About1' className='navlink'>About</Link>
// <Link to='Work' className='navlink'>Work</Link>
//     </div>
//     <Link to='contact'>
//     <button className="navbutton">
//         <img src={contactimage} alt="" className="navcontact"/>contact me
//     </button>
//     </Link>
//     </nav>
//   )
// }

// export default Navbar

import { Link } from "react-scroll";
import contactimage from "../assets/contact.png";
import logo from "../assets/logoimg.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <div className="navcenter">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={500} className="navlink">
          Home
        </Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="navlink">
          Skills
        </Link>
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="navlink">
          About
        </Link>  
        <Link activeClass="active" to="work" spy={true} smooth={true} offset={-50} duration={500} className="navlink">
          Work
        </Link>
      </div>
      <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500}>
        <button className="navbutton">
          <img src={contactimage} alt="Contact" className="navcontact" /> Contact Me
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;

