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
            I am a Data Engineering Consultant with a software development background
            and hands-on experience building end-to-end batch, streaming and cloud-native
            data solutions. I enjoy solving the challenge of how raw data moves from source
            systems through ingestion, transformation and validation into trusted
            datasets that can be used for reporting and analytics.
          </p>

          <p>
            My projects span Microsoft Fabric and Azure Lakehouse solutions, Google
            Cloud pipelines, Kafka and Spark real-time streaming, Airflow orchestration,
            Snowflake and dbt transformation workflows, PostgreSQL data stores and
            infrastructure automation with Terraform.
          </p>

          <p>
            I have worked with Bronze, Silver and Gold data architectures, ETL/ELT
            workflows, API ingestion, data-quality checks, cloud storage, orchestration
            and business intelligence reporting. My software development experience
            also gives me a strong foundation in Python, SQL, relational databases,
            APIs, Git, testing and collaborative development.
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
