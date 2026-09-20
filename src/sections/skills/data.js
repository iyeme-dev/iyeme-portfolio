import { FaCloud, FaDatabase, FaCogs, FaTools } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaCloud />,
    title: "Cloud & Data Platforms",
    desc: "Microsoft Fabric, Azure Storage, Fabric Lakehouse, Google Cloud Platform, BigQuery and Snowflake.",
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: "Programming & Data Processing",
    desc: "Python, SQL, PySpark, Apache Spark and PostgreSQL for cleaning, transformation, querying and analytics-ready datasets.",
  },
  {
    id: 3,
    icon: <FaCogs />,
    title: "Pipelines & Orchestration",
    desc: "ETL/ELT, Apache Airflow, Kafka and dbt for batch, streaming and automated data workflows.",
  },
  {
    id: 4,
    icon: <FaTools />,
    title: "BI, DevOps & Infrastructure",
    desc: "Power BI, Terraform, Docker, Git and GitHub for reporting, infrastructure automation and version control.",
  },
];

export default data;
