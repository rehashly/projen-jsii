const { cdk, javascript } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Haitham Gad',
  authorAddress: 'haitham@rehashly.com',
  defaultReleaseBranch: 'main',
  name: 'projen-jsii',
  packageManager: javascript.NodePackageManager.NPM,
  packageName: '@rehashly/projen-jsii',
  repositoryUrl: 'https://github.com/rehashly/projen-jsii.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
});
project.synth();