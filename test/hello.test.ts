import { RehashlyJsiiProject } from '../src'

test('RehashlyJsiiProject', () => {
  new RehashlyJsiiProject({
    name: 'example-jsii-project',
    author: 'Author',
    authorAddress: 'author@example.com',
    repositoryUrl: 'https://example.com/rehashlyjsiiproject',
    defaultReleaseBranch: 'main',
  })
})
