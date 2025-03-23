import './Work.css';
import workpic1 from '../assets/workimg1.png';
import workpic2 from '../assets/workimg2.png';
import workpic3 from '../assets/workimg3.png';
import workpic4 from '../assets/workimg4.png';
import workpic5 from '../assets/workimg5.png';
import workpic6 from '../assets/workimg6.png';

function Work() {
  return (
    <section id="work"   style={{ height: "100%" }}>
      <h2 className="worksTitle">My Portfolio</h2>
      <div className="workDesc">UI/UX design to build dynamic and responsive web applications</div>
       <div className="worksImgs">
        <img src={workpic1} alt="" className="worksImg" />

        <img src={workpic2} alt="" className="worksImg" />

        <img src={workpic3} alt="" className="worksImg" />

        <img src={workpic4} alt="" className="worksImg" />

        <img src={workpic5} alt="" className="worksImg" />

        <img src={workpic6} alt="" className="worksImg" />

       </div>
       <div className="parent-container">
  <button className="worksbtn">See More</button>
</div>
    </section>
  )
}

export default Work