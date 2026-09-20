import Card from "../../components/Card";
import data from "./data";
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <h2>Core Data Engineering Skills</h2>
      <p>
        Technologies and practices I use to build reliable, scalable and analytics-ready data solutions.
      </p>
      <div className="container skills__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="skill light">
            <div className="skill__icon">{item.icon}</div>
            <div className="skill__details">
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
