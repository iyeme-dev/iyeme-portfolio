import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Motivated Web Developer with 2+ years of hands-on experience
            building responsive, user-friendly websites and email templates.
            Skilled in HTML, CSS, JavaScript/TypeScript, and Python, with
            growing knowledge of modern frameworks (React, Node.js) and
            backend technologies. Passionate about writing clean, accessible
            code and eager to continue developing full-stack skills. Strong team
            collaborator with a track record of working with designers and
            developers to deliver digital solutions that meet client needs
          </p>
          <p>
            Passionate about writing clean, accessible code and eager to
            continue developing full-stack skills. Strong team collaborator with
            a track record of working with designers and developers to deliver
            digital solutions that meet client needs. Check out my resume below!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
