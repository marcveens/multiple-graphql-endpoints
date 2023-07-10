# multiple-graphql-endpoints
An example repo showing how to handle multiple GraphQL endpoints using Apollo Client and GraphQL Code Generator.

---

Commands to use: 

1. `npm run generate-gql-types` to generate most up to date Typescript files based on GraphQL schemas and operation files
2. `npm run dev` to run application

---

In this demo app Vite is used for running the React application. These 2 free-to-use GraphQL endpoints are used as an example:

- https://spacex-production.up.railway.app/ 
  - Get all sorts of information about previous Space X launches, like information about the rocket, astronauts, and more
- https://countries.trevorblades.com/graphql
  - A public GraphQL API for information about countries, continents, and languages.

