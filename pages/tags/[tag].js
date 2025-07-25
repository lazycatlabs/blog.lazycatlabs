import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import GridLayout from '@/layouts/GridLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('posts')

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('posts')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => t).includes(params.tag)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`)
    const rssPath = path.join(root, 'public', 'tags', params.tag)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, tag: params.tag } }
}

export default function Tag({ posts, tag }) {
  // Capitalize first letter and convert space to dash
  const title = tag.split('-').join(' ').toUpperCase()
  const titleFormatted = tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
  return (
    <>
      <TagSEO
        title={`${titleFormatted} | ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <GridLayout posts={posts} title={title} />
    </>
  )
}
