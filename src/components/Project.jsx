function Project({ projects }) {
  return (
    <div className="container">
    <ul className="list-group">
      {/* Here we use the map method to iterate through each user and return a new array of list items for each user */}
      {projects.map((project) => (
        <div>
          <img 
            className="bg-img" 
            src={project.thumbnail}
            alt={project.alttext}
          ></img>
          <a href={project.weblink}>
            <h2 
              className="project-name" 
              key={project.id}
            >{`${project.name}`}
            </h2>
          </a>
          <a href={project.githublink}>
            <img
              className="icon"
              src="https://www.svgrepo.com/show/361181/github.svg"
            ></img>
          </a>
          <p>{`${project.description}`}</p>
        </div>
      ))}
    </ul>
    </div>
  );
}

export default Project;
