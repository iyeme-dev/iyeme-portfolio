import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  // Build categories list (supports string OR array categories)
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
      <h2>Recent Projects</h2>
      <p>
        Check out some of my recent projects. Use the buttons to toggle the different categories.
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
