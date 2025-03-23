import "./About1.css";

function About1() {
  const educationData = [
    {
      degree: "Full Stack Developer",
      institution: "GUVI GEEK NETWORK PRIVATE LIMITED",
      year: "2023 - 2024",
      Percentage: "85.10%",
    },
    {
      degree: "Bachelor of Engineering",
      institution: "ARJ College of Engineering and Technology",
      year: "2015 - 2019",
      Percentage: "64%",
    },
    {
      degree: "Higher secoundary",
      institution: "Bharathidasan Hr.Sec School",
      year: "2014-2015",
      Percentage: "73%",
    }
  ];

  return (
    <div id="about" style={{ height: "100%" }}>
      <div className="education-container">
        <h2 className="education-title">🎓 Education</h2>
        <ul className="education-list">
          {educationData.map((edu, index) => (
            <li key={index} className="education-item">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-year">{edu.year}</p>
              <p className="education-year">{edu.Percentage}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default About1;
