import { cdk, javascript } from 'projen'

export interface RehashlyJsiiProjectOptions extends cdk.JsiiProjectOptions {}

/**
 * Create a rehashly JSII project.
 *
 * @pjid rehashly-jsii-project
 */
export class RehashlyJsiiProject extends cdk.JsiiProject {
  constructor(options: RehashlyJsiiProjectOptions) {
    super({
      ...options,
      authorOrganization: true,
      npmRegistryUrl: 'https://npm.pkg.github.com',
      packageManager: javascript.NodePackageManager.NPM,
      prettier: true,
      prettierOptions: {
        settings: {
          singleQuote: true,
          semi: false,
        },
      },
    })

    this.addDeps('projen')
    this.addPeerDeps('projen')
  }
}
