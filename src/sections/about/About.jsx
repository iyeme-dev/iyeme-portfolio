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
            <img src={AboutImage} alt="Iyeme Salubi" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                {item.desc && <small>{item.desc}</small>}
              </Card>
            ))}
          </div>
          <p>
            I am a Data Engineer with a software development background and hands-on
            experience building batch, streaming and cloud-native data solutions.
            My projects span Microsoft Fabric and Azure, Google Cloud, Kafka and Spark,
            Airflow, Snowflake and dbt.
          </p>
          <p>
            I focus on ETL/ELT pipelines, data cleaning and transformation, data quality,
            automation, Lakehouse architecture and analytics-ready data models. I enjoy
            turning fragmented raw data into reliable datasets that support reporting
            and business decisions.
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
