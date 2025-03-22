// import React from 'react'
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
  
    console.log("Sending email with data:", {
      from_name: form.current.from_name.value,
      from_email: form.current.from_email.value,
      message: form.current.message.value,
    });
  
    emailjs.sendForm('service_gs85x2h', 'template_6fuggyv', form.current, '7vq8yzxX1CjPxKsJFj2OR')

      .then(
        (result) => {
          console.log('✅ Email sent successfully!', result.text);
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('❌ Email sending failed...', error);
          alert('Email sending failed. Check console for errors.');
        }
      );
      fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: 'service_gs85x2h',
          template_id: 'template_6fuggyv',
          user_id: '7vq8yzxX1CjPxKsJFj2OR',
          template_params: {
            from_name: 'Test User',
            from_email: 'test@example.com',
            message: 'This is a test message.',
          }
        }),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
      
  };
  

  return (
   <section id="contactpage">
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span id="contactDesc">please fill out the form below to discuss any work opportunities</span>
        <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
            {/* <input type="text" className="name" placeholder="Your Name" name='Your_name' />
            <input type="email" className="email" placeholder="your Email" name='Your_Email'/>
            <textarea name="message" className="msg" rows='5' placeholder="your message" ></textarea> */}
            <input type="text" className="name" placeholder="Your Name" name='from_name' />
<input type="email" className="email" placeholder="Your Email" name='from_email'/>
<textarea name="message" className="msg" rows='5' placeholder="Your message"></textarea>

            <button type="submit" value="send" className="submitbtn">Submit</button>
            <div className="links">
                <img src={FacebookIcon} alt="Facebook" className="link" />
                <img src={InstagramIcon} alt="Instagram" className="link" />
                <img src={TwitterIcon} alt="Twitter" className="link" />
            </div>
            </form>    
    </div>
   </section>
  )
}

export default Contact


// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import FacebookIcon from "../assets/Facebook.png";
// import InstagramIcon from "../assets/Instagram.png";
// import TwitterIcon from "../assets/Twitter.png";
// import "./Contact.css";

// function Contact() {
//   const form = useRef();
//   const [status, setStatus] = useState("");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("Sending email...");
  
//     emailjs.sendForm(
//       "service_gs85x2h",
//       "template_6fuggyv",
//       form.current,
//       { publicKey: "7vq8yzxX1CjPxKsJFj2OR" }  
//     )
    
//       .then(
//         (result) => {
//           console.log("✅ Email sent successfully!", result.text);
//           setStatus("Email sent successfully!");
//           form.current.reset();
//         },
//         (error) => {
//           console.error("❌ Email sending failed...", error);
//           setStatus("Failed to send email. Please check your API keys or template settings.");
//         }
//       );
//       fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     service_id: 'service_gs85x2h',
//     template_id: 'template_6fuggyv',
//     user_id: '7vq8yzxX1CjPxKsJFj2OR',
//     template_params: {
//       from_name: 'Test User',
//       from_email: 'test@example.com',
//       message: 'Testing EmailJS API',
//     },
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log('EmailJS API Response:', data))
//   .catch((err) => console.error('Error:', err));

//   };
  

//   return (
//     <section id="contactpage">
//       <div id="contact">
//         <h1 className="contactPageTitle">Contact Me</h1>
//         <span id="contactDesc">
//           Please fill out the form below to discuss any work opportunities
//         </span>

//         <form ref={form} className="contactForm" onSubmit={sendEmail}>
//           <input type="text" className="name" placeholder="Your Name" name="from_name" required />
//           <input type="email" className="email" placeholder="Your Email" name="from_email" required />
//           <textarea name="message" className="msg" rows="5" placeholder="Your Message" required></textarea>
//           <button type="submit" className="submitbtn">Submit</button>
//         </form>

//         {status && <p className="statusMessage">{status}</p>}

//         <div className="links">
//           <img src={FacebookIcon} alt="Facebook" className="link" />
//           <img src={InstagramIcon} alt="Instagram" className="link" />
//           <img src={TwitterIcon} alt="Twitter" className="link" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;
