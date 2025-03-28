import FacebookIcon from '../assets/Facebook.png'
import InstagramIcon from '../assets/Instagram.png'
import TwitterIcon from '../assets/Twitter.png'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3kxubap', 'template_3g16ap8', form.current, {
        publicKey: 'Ohy7BQyTesITQ0S8R',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
       <section id="contactpage">
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span id="contactDesc">please fill out the form below to discuss any work opportunities</span>

    <form ref={form} onSubmit={sendEmail} className='contactForm'>
      <input type="text" name="from_name" className="name" placeholder="Your Name"/>
      <input type="email" name="from_email" className="email" placeholder="Your Email"/>
      <textarea name="message" className="msg" rows='5' placeholder="Your Message" />
      <button type="submit" className='submitbtn'>Send Message</button>
      <div className="links">
             <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
               <img src={FacebookIcon} alt="Facebook" className="link" />
             </a>
             <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
               <img src={InstagramIcon} alt="Instagram" className="link" />
             </a>
             <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
               <img src={TwitterIcon} alt="Twitter" className="link" />
             </a>
             </div>
    </form>
     </div>
        </section>
  );
}

export default Contact


