import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Iyeme Salubi" />
        </div>

        <h3 data-aos="fade-up">Iyeme Salubi</h3>
        <h1 data-aos="fade-up">Data Engineering Consultant</h1>

        <p data-aos="fade-up">
          I design, build and support scalable batch and real-time data pipelines across
          Microsoft Fabric, Azure and Google Cloud. My work covers Python, SQL, PySpark,
          ETL/ELT, data modelling, orchestration, data quality and cloud data platforms,
          including Fabric Lakehouse, Azure Data Factory, Airflow, Kafka, Spark,
          Snowflake, dbt and BigQuery.
        </p>

        <div className="header__cta" data-aos="fade-up">
          <a href="#portfolio" className="btn primary header__project-btn">
            View Projects
          </a>
          <a href="#contact" className="btn light header__contact-btn">
            Contact Me
          </a>
        </div>

        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
