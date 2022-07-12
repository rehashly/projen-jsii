const { cdk, javascript } = require('projen')
const { NpmAccess } = require('projen/lib/javascript')
const project = new cdk.JsiiProject({
  author: 'Haitham Gad',
  authorAddress: 'haitham@rehashly.com',
  authorOrganization: true,
  defaultReleaseBranch: 'main',
  description: "Rehashly's opinionated projen JSII project type.",
  name: 'projen-jsii',
  npmAccess: NpmAccess.PUBLIC,
  packageManager: javascript.NodePackageManager.NPM,
  packageName: '@rehashly/projen-jsii',
  repositoryUrl: 'https://github.com/rehashly/projen-jsii.git',
  prettier: true,
  prettierOptions: {
    settings: {
      singleQuote: true,
      semi: false,
    },
  },
  deps: ['projen'],
  peerDeps: ['projen'],
})
project.synth()
