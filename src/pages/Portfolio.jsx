import projects from '../projects'
import Project from '../components/Project'

function Portfolio() {
  return (
    <Project projects={projects} />
  );
};

export default Portfolio;
