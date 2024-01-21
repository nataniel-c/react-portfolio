import projects from '../projects'
import Project from '../components/Project'

function Portfolio() {
  return (
    <div><h1>My Projects</h1>
    <Project projects={projects} />
    </div>
  );
};

export default Portfolio;
