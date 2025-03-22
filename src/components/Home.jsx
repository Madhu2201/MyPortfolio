import './Home.css'
import image from '../assets/pic.png'
import bag from '../assets/bag.png'
import { Link } from 'react-scroll'
function Home() {
  return (
    <section id='home' style={{height: '100%'}}>
      <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introtext">i,m <span className='Introname'>Madhu</span><br/>React Developer</span>
         <p className="intropara">Aspiring React Developer passionate about building interactive, scalable, and user-friendly web applications. Skilled in React.js, JavaScript, Redux, and modern UI frameworks like Tailwind CSS. Strong problem-solving abilities, especially in array manipulation and state management using useReducer and Redux.</p>
         <Link><button className="btn"><img src={bag} alt="Hire" className='bag' />Hire me</button></Link>
      </div>
      <img src={image} alt="portfolio" className="bg" />
    </section>
  )
}

export default Home