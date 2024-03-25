import { useCommits } from '../hooks/useCommits';
import PropTypes from 'prop-types';

import Loading from './Loading';
function CommitList({ projectName, loginValue }) {
  const { data, isLoading } = useCommits({
    login: loginValue,
    repo: projectName,
  });

  return isLoading ? (
    <Loading variant="sm" />
  ) : data?.length ? (
    <div className="projects-container__project__commits-container">
      <ul>
        {data.map((el) => (
          <li
            className="projects-container__project__commits-container__list__element"
            key={el.node_id}
          >
            {el.commit.message}
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <p>no commits available</p>
  );
}

CommitList.propTypes = {
  projectName: PropTypes.string,
  loginValue: PropTypes.string,
};

export default CommitList;
