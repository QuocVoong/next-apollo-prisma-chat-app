
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3000/api/graphql",
  documents: "**/*.{gql,graphql}",
  generates: {
    "graphql/generated/schema.ts": {
      // preset: "client",
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    },
  }
};

export default config;
