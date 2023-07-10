import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://countries.trevorblades.com/graphql',
  documents: ['./**/*.countries.graphql'],
  generates: {
    './src/libs/graphql/countries/types/graphql-types.ts': {
      plugins: ['typescript', 'typescript-resolvers']
    },
    './': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        cwd: process.cwd() + '/src',
        baseTypesPath: 'libs/graphql/countries/types/graphql-types.ts'
      },
      plugins: ['typescript-operations', 'typed-document-node']
    }
  }
};

export default config;
