import CustomLink from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'

export async function getStaticProps() {
  const tags = await getAllTags('posts')

  return { props: { tags } }
}

export default function Tags({ tags }) {
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])
  return (
    <>
      <PageSEO title={`Tags - ${siteMetadata.author}`} description="" />
      <div className="flex flex-col items-start justify-start   md:my-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
        <h1 className="animate-text bg-gradient-to-r from-teal via-pink to-peach bg-clip-text py-8 text-6xl font-black text-transparent">
          Tags
        </h1>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mb-2 mr-5 mt-2">
                <Tag text={t} />
                <CustomLink
                  href={`/tags/${kebabCase(t)}`}
                  className=" text-sm font-semibold uppercase text-gray-600"
                >
                  {`[${tags[t]}]`}
                </CustomLink>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
