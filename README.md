# multiple-graphql-endpoints
An example repo showing how to handle multiple GraphQL endpoints using Apollo Client and GraphQL Code Generator.

--- 

## Demo
[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://marcveens.github.io/multiple-graphql-endpoints/)


## Local development
Commands to use: 

1. `npm run generate-gql-types` to generate most up to date Typescript files based on GraphQL schemas and operation files
2. `npm run dev` to run application

## Used endpoints for demo 
In this demo app Vite is used for running the React application. These 2 free-to-use GraphQL endpoints are used as an example:

- https://spacex-production.up.railway.app/ 
  - Get all sorts of information about previous Space X launches, like information about the rocket, astronauts, and more
- https://countries.trevorblades.com/graphql
  - A public GraphQL API for information about countries, continents, and languages.

