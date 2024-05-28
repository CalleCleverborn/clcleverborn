import { projectData } from "../data/projectData";

export const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <div className="project-item-box">
        {projectData.map(({ id, title, url, imageUrl, description }) => (
          <div key={id} className="project-item">
            <a href={url}>
              <img
                src={imageUrl}
                alt={description}
                className="project-image"
              ></img>
            </a>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
