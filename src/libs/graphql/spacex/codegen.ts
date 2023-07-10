import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://spacex-production.up.railway.app/',
  documents: ['./**/*.spacex.graphql'],
  generates: {
    './src/libs/graphql/spacex/types/graphql-types.ts': {
      plugins: ['typescript', 'typescript-resolvers']
    },
    './': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.generated.ts',
        cwd: process.cwd() + '/src',
        baseTypesPath: 'libs/graphql/spacex/types/graphql-types.ts'
      },
      plugins: ['typescript-operations', 'typed-document-node']
    }
  }
};

export default config;
