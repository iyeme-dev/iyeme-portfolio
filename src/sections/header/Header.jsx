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
          I design and build end-to-end data solutions that move raw data from source
          systems into reliable, analytics-ready datasets. My work covers ETL/ELT,
          cloud data platforms, Lakehouse architecture, batch and real-time processing,
          orchestration, data quality and reporting using technologies including
          Microsoft Fabric, Azure, Python, PySpark, SQL, Airflow, Kafka, Snowflake,
          dbt and Google Cloud.
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
