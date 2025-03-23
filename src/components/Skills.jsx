import uidesign from '../assets/UIdesign.png';
import webdesign from '../assets/Webdesign.png';
import appdesign from '../assets/Appdesign.jpg';
import './Skills.css'
function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <div className="skillDesc">Frontend Developer | React & UI/UX Enthusiast</div>
       <div className="skillBars">
        <div className="skillBar">
          <img src={uidesign}  alt="" className="skillImg" />
         <div className="skillBarText">
          <h2>UI/UX design</h2>
          <p>This is a demo test, you can write your own content</p>
         </div>
        </div>
        <div className="skillBar">
          <img src={webdesign} alt="" className="skillImg" />
         <div className="skillBarText">
          <h2>Website Design</h2>
          <p>This is a demo test, you can write your own content</p>
         </div>
        </div>
        <div className="skillBar">
          <img src={appdesign} alt="" className="skillImg" />
         <div className="skillBarText">
          <h2>App Design</h2>
          <p>This is a demo test, you can write your own content</p>
         </div>
        </div>
       </div>
    </section>
  )
}

export default Skills