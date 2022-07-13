import { cdk, javascript } from 'projen'

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...any} objects - Objects to merge
 *
 * @returns {any} New object with merged key/values
 */
function merge(...objects: any[]): any {
  const isObject = (obj: any) => obj && typeof obj === 'object'

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = merge(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })

    return prev
  }, {})
}

export type RehashlyJsiiProjectOptions = cdk.JsiiProjectOptions

/**
 * Create a rehashly JSII project.
 *
 * @pjid rehashly-jsii-project
 */
export class RehashlyJsiiProject extends cdk.JsiiProject {
  constructor(options: RehashlyJsiiProjectOptions) {
    super(
      merge(
        {
          authorOrganization: true,
          keywords: ['projen', 'jsii'],
          npmAccess: javascript.NpmAccess.PUBLIC,
          packageManager: javascript.NodePackageManager.NPM,
          prettier: true,
          prettierOptions: {
            settings: {
              singleQuote: true,
              semi: false,
            },
          },
          deps: ['projen'],
          peerDeps: ['projen'],
        },
        options
      )
    )
  }
}
