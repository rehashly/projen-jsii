import { cdk, javascript } from 'projen'

const project = new cdk.JsiiProject({
  author: 'Haitham Gad',
  authorAddress: 'haitham@rehashly.com',
  authorOrganization: true,
  copyrightOwner: 'Rehashly, LLC',
  copyrightPeriod: `${new Date().getFullYear().toString()}`,
  defaultReleaseBranch: 'main',
  description: "Rehashly's opinionated projen JSII project type.",
  keywords: ['projen', 'jsii'],
  license: 'MIT',
  name: 'rehashly-projen-jsii',
  npmAccess: javascript.NpmAccess.PUBLIC,
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
  projenrcTs: true,
  deps: ['projen'],
  peerDeps: ['projen'],
})

project.synth()
