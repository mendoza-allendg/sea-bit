import { defineConfig } from 'orval'

export default defineConfig({
  'authentication-api': {
    input: './orval/api/authentication/registration.yaml',
    output: {
      target: './apis/authentication/endpoints/RegistrationsApi.ts',
      schemas: './apis/authentication/models/',
      override: {
        components: {
          schemas: {
            suffix: 'DTO',
          },
          responses: {
            suffix: 'Response',
          },
          parameters: {
            suffix: 'Params',
          },
          requestBodies: {
            suffix: 'Params',
          },
        },
      },
    },
  },
})
