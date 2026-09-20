import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.flatMap(item =>
    Array.isArray(item.category) ? item.category : [item.category]
  );

  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }

    const filteredProjects = data.filter(project =>
      Array.isArray(project.category)
        ? project.category.includes(category)
        : project.category === category
    );

    setProjects(filteredProjects);
  }

  return (
    <section id="portfolio">
      <h2>Featured Data Engineering Projects</h2>
      <p>
        Hands-on projects covering Lakehouse architecture, cloud-native batch pipelines,
        real-time streaming, orchestration, transformation and analytics.
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        />
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio
