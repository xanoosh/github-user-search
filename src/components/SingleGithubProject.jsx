import CommitList from './CommitList';
import PropTypes from 'prop-types';

function SingleGithubProject({ projectData, loginValue }) {
  return (
    <div className="projects-container__project">
      <p className="projects-container__project__title">{projectData.name}</p>
      <a
        className="projects-container__project__link"
        href={projectData.html_url}
        target="_blank"
        rel="noreferrer"
      >
        {projectData.html_url}
      </a>
      <CommitList projectName={projectData.name} loginValue={loginValue} />
    </div>
  );
}

SingleGithubProject.propTypes = {
  projectData: PropTypes.shape({
    name: PropTypes.string,
    html_url: PropTypes.string,
  }),
  loginValue: PropTypes.string,
};

export default SingleGithubProject;
