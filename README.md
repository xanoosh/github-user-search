# Github user search

## Installation:

to install project locally type `npm install`

live development: `npm run dev`

## Description:

App uses external Github API to fetch user projects data based on login provided. It uses front-end validation for empty field & displays messages based on response:

- displays 5 last projects with 5 last commits on success,
- on empty projects array >has no public projects available
- on empty commits array >no commits available
- on 404 (projects API call) >No projects found, please verify your login
- on anything else besides 200 (projects and commit data) >Failed to fetch github projects/commits

## Technologies used:

- React query (custom hooks)
- react-hot-toast for error handling
- React hook form
- scss styling (BEM)
- react router (code splitting with lazy)
