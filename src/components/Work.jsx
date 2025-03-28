import './Work.css';
import Airbnb from "../assets/Airbnb.png"
import TravelBooking from "../assets/TravelBooking.png"

function Work() {
  return (
    <section id="work"   style={{ height: "100%" }}>
      <h2 className="worksTitle">My Project</h2>
      <div className="workDesc">UI/UX design to build dynamic and responsive web applications</div>
       <div className="worksImgs">
       <img src={Airbnb} className='worksImg' />
       <div style={{ textAlign: "left", maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>Developed a full-stack Airbnb clone with user login, property listings, and a booking system. Implemented secure authentication for user sign-up and login.Integrated a booking system for reserving properties with date selection.</li>
        <li>Designed a responsive and user-friendly UI for seamless navigation.Optimized performance and state management using React and Redux.</li>
    </ul>
</div>
     <img src={TravelBooking} className='worksImg' />
     <div style={{ textAlign: "left", maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
    <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>Designed a modern, user-friendly travel booking website with a responsive layout.
        Ensured smooth navigation and an intuitive interface for easy bookings.</li>
        <li>Implemented an interactive UI for searching destinations and accommodations.
        Included filtering options to help users find the best travel deals.</li>
    </ul>
       </div>
       </div>
       {/* <div className="parent-container">
  <button className="worksbtn">See More</button>
</div> */}
    </section>
  )
}

export default Work