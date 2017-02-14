// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  serverEndpoint: 'https://programmanager-3.qa.sarineplatform.com/programs/v1/',
  stonesEndpoint: 'https://api-3.qa.sarine.com/stones/v1/',
  authEndpoint: 'https://identityprovider-3.qa.sarineplatform.com/api/v1/'
};
