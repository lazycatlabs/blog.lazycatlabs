import React, { useEffect } from 'react'
import CustomLink from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Support from '@/components/Support'
import LeftNavigation from '@/components/LeftNavigation'

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }

export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, date, title, tags } = frontMatter

  const [ids, setIds] = React.useState([])
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3'))

    const tocData = headings.map((heading) => ({
      id: heading.id,
      text: heading.innerText,
      level: heading.tagName.toLowerCase(),
    }))
    setIds(tocData)
  }, [])

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/posts/${slug}`}
        authorDetails={authorDetails}
        {...frontMatter}
      />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-surface1">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div className="">
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-subtext0">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)} |{' '}
                      {frontMatter.readingTime.text}
                    </time>
                  </dd>
                </div>
              </dl>
            </div>
          </header>
          <div
            className="divide-y divide-surface0 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 "
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pb-10 pt-6 xl:border-b xl:border-surface1 xl:pt-11">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width={46}
                          height={46}
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="font-medium text-text">{author.name}</dd>
                        <dt className="sr-only">Github</dt>
                        <dd>
                          {author.github && (
                            <CustomLink
                              href={author.github}
                              className="font-medium text-pink hover:text-pink"
                            >
                              {author.github.replace('https://github.com/', '@')}
                            </CustomLink>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-surface1 xl:col-span-3 xl:row-span-2 xl:pb-0 ">
              <div className="prose max-w-none pb-8 pt-10">{children}</div>
              <Support />
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="divide-surface1 text-sm font-medium leading-5 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h3 className="mb-4 text-xs uppercase tracking-wide text-subtext0">Tags</h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-5">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} className="mb-1" />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h3 className=" text-xs uppercase tracking-wide text-subtext0">
                          Previous Article
                        </h3>
                        <div className="text-peach hover:text-peach">
                          <CustomLink href={`/posts/${prev.slug}`}>{prev.title}</CustomLink>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h3 className="text-xs uppercase tracking-wide text-subtext0">
                          Next Article
                        </h3>
                        <div className="text-peach hover:text-peach">
                          <CustomLink href={`/posts/${next.slug}`}>{next.title}</CustomLink>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="sticky top-[50px] mb-2 pt-4 xl:pt-8">
                <CustomLink href="/posts" className="text-secondary hover:text-secondary">
                  &larr; Back to the posts
                </CustomLink>
                <div className="hidden xl:block">
                  <LeftNavigation ids={ids} />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
