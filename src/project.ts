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
      packageManager: javascript.NodePackageManager.NPM,
      prettier: true,
      prettierOptions: {
        settings: {
          singleQuote: true,
          semi: false,
        },
      },
    })

    this.addDeps('projen@^0.58.13')
    this.addPeerDeps('projen@^0.58.13')
  }
}
