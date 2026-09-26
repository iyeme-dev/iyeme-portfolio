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
            I am a Data Engineering Consultant with hands-on experience designing,
            building and supporting scalable batch and real-time data pipelines across
            Microsoft Fabric, Azure and Google Cloud. I work with Python, SQL, PySpark,
            ETL/ELT, data modelling, orchestration and data-quality controls to produce
            reliable analytical datasets and reporting layers.
          </p>

          <p>
            My experience includes developing Bronze, Silver and Gold Lakehouse
            architectures, automating ingestion and transformation workflows, and
            troubleshooting pipeline and data-quality issues using Fabric Lakehouse,
            Azure Data Factory, Airflow, Kafka, Spark, Snowflake, dbt and BigQuery.
          </p>

          <p>
            I also bring a strong software-engineering foundation in Git/GitHub, APIs,
            CI/CD, testing, technical documentation and Infrastructure as Code with
            Terraform, with experience translating business requirements into
            maintainable, production-ready data solutions.
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
