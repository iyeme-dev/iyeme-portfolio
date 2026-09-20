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
        <h1 data-aos="fade-up">Data Engineer</h1>
        <p data-aos="fade-up">
          I build reliable data pipelines and cloud data solutions using Microsoft Fabric,
          Azure, Python, PySpark and SQL — transforming raw data into trusted,
          analytics-ready datasets for reporting and decision-making.
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#portfolio" className="btn primary">
            View Data Projects
          </a>
          <a href="#contact" className="btn light">
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
