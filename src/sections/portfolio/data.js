const data = [
  {
    id: 1,
    category: ["Microsoft Fabric", "Azure", "PySpark"],
    image: "https://raw.githubusercontent.com/iyeme-dev/Microsoft-Fabric-Ecommerce/main/assets/microsoft-fabric-architecture.gif",
    title: "Microsoft Fabric E-commerce Customer 360",
    desc: "End-to-end Customer 360 data platform using Azure Storage, Microsoft Fabric Lakehouse, metadata-driven ingestion, Bronze/Silver/Gold layers, PySpark transformations, validation and Power BI semantic modelling.",
    github: "https://github.com/iyeme-dev/Microsoft-Fabric-Ecommerce",
  },
  {
    id: 2,
    category: ["GCP", "Terraform", "BigQuery"],
    image: "https://raw.githubusercontent.com/iyeme-dev/fema-DI-analytics-platform/main/images/pipeline-architecture-fema.png",
    title: "FEMA Cloud-Native Data Pipeline",
    desc: "Cloud-native pipeline that extracts FEMA Public Assistance data, stores raw files in Cloud Storage, loads curated data to BigQuery, schedules processing with Cloud Scheduler and provisions infrastructure with Terraform.",
    github: "https://github.com/iyeme-dev/fema-DI-analytics-platform",
  },
  {
    id: 3,
    category: ["Kafka", "Spark", "PostgreSQL"],
    image: "https://raw.githubusercontent.com/iyeme-dev/Real-Time-Stock-Market_Analysis/main/images/data_pipeline.gif",
    title: "Real-Time Stock Market Data Pipeline",
    desc: "Streaming data pipeline that ingests market data from Alpha Vantage through Apache Kafka, processes events with Spark Structured Streaming and writes transformed records to PostgreSQL.",
    github: "https://github.com/iyeme-dev/Real-Time-Stock-Market_Analysis",
  },
  {
    id: 4,
    category: ["Airflow", "Snowflake", "dbt"],
    image: "https://raw.githubusercontent.com/iyeme-dev/Tourism-Triplens_Countries_Explorer-DE/main/img/pipeline_architecture.gif",
    title: "Tourism TripLens ELT Pipeline",
    desc: "Automated ELT workflow using MinIO, Apache Airflow, Snowflake and dbt. Raw tourism data is orchestrated through structured transformation layers to create analytics-ready datasets.",
    github: "https://github.com/iyeme-dev/Tourism-Triplens_Countries_Explorer-DE",
  },
];

export default data;
