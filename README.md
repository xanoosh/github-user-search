# Github user search

      <p>
        App uses external Github API to fetch user projects data based on login
        provided. It uses front-end validation for empty field & displays messages
        based on response:
      </p>
      <ul>
        <li>
          5 last projects with 5 last commits on success, no commits available
        </li>
        <li> on empty projects array - has no public projects available</li>
        <li>
          on 404 (projects call) - No projects found, please verify your login
        </li>
        <li>
          on anything else besides 200 (projects and commit data) - Failed to
          fetch github projects/commits
        </li>
      </ul>
      <p>Technologies used:</p>
      <ul>
        <li>React query (custom hooks)</li>
        <li>react-hot-toast for error handling</li>
        <li>React hook form</li>
        <li>scss styling</li>
        <li>react router (code splitting with lazy)</li>
      </ul>
