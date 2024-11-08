import { visit } from 'unist-util-visit'
import { slug } from 'github-slugger'
import { toString } from 'mdast-util-to-string'

export default function remarkTocHeadings(options) {
  return (tree) =>
    visit(tree, 'heading', (node) => {
      const textContent = toString(node)
      const heading = {
        value: textContent,
        url: '#' + slug(textContent),
        depth: node.depth,
      }
      if (node.depth === 2) {
        options.exportRef.push(heading)
      } else if (node.depth === 3) {
        const lastHeading = options.exportRef[options.exportRef.length - 1]
        if (lastHeading && lastHeading.depth === 2) {
          lastHeading.children = lastHeading.children || []
          lastHeading.children.push(heading)
        }
      }
    })
}
