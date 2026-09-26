import { FaCloud, FaDatabase, FaCogs, FaTools } from "react-icons/fa";

const data = [
  {
    id: 1,
    icon: <FaCloud />,
    title: "Cloud & Data Platforms",
    desc: "Microsoft Fabric, Fabric Lakehouse, Azure Storage / ADLS Gen2, Azure Data Factory, Google Cloud, Cloud Storage, Cloud Run, BigQuery and Snowflake.",
  },
  {
    id: 2,
    icon: <FaDatabase />,
    title: "Programming & Data Processing",
    desc: "Python, SQL, PySpark, Spark Structured Streaming, PostgreSQL, SQLite, JSON, CSV and Parquet for data cleaning, transformation, validation and modelling.",
  },
  {
    id: 3,
    icon: <FaCogs />,
    title: "Pipelines & Orchestration",
    desc: "ETL/ELT, Medallion Architecture (Bronze/Silver/Gold), Apache Airflow (Astro), Kafka and dbt for batch, streaming and automated data workflows.",
  },
  {
    id: 4,
    icon: <FaTools />,
    title: "Analytics, DevOps & Infrastructure",
    desc: "Power BI, Microsoft Fabric semantic models, Terraform, Docker, Git/GitHub, GitHub Actions, CI/CD, testing and technical documentation.",
  },
];

export default data;
