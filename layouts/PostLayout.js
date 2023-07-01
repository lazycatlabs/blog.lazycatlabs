import React from 'react'
import Link from '@/components/Link'
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
  React.useEffect(() => {
    const titles = document.querySelectorAll('h2')
    const idArrays = Array.prototype.slice
      .call(titles)
      .map((title) => ({ id: title.id, title: title.innerText }))
    setIds(idArrays)
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
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div className="mono-type">
                <PageTitle>{title}</PageTitle>
              </div>
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-roseWater dark:text-roseWater-dark">
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
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="pb-10 pt-6 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <Image
                          src={author.avatar}
                          width="46px"
                          height="46px"
                          alt="avatar"
                          className="h-10 w-10 rounded-full"
                        />
                      )}
                      <dl className="whitespace-nowrap text-sm font-medium leading-5">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-base font-medium text-text dark:text-text-dark">
                          {author.name}
                        </dd>
                        <dt className="sr-only">Github</dt>
                        <dd>
                          {author.github && (
                            <Link
                              href={author.github}
                              className="font-medium text-pink hover:text-pink-dark dark:text-pink-dark dark:hover:text-pink"
                            >
                              {author.github.replace('https://github.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-dark">{children}</div>
              <Support />
              <Comments frontMatter={frontMatter} />
            </div>
            <footer>
              <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h3 className="mb-2 text-xs uppercase tracking-wide text-gray-500 dark:text-text-dark">
                      Tags
                    </h3>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div>
                        <h3 className="text-xs uppercase tracking-wide text-gray-500 dark:text-text-dark">
                          Previous Article
                        </h3>
                        <div className="text-sky hover:text-sky-dark dark:text-sky-dark dark:hover:text-sky ">
                          <Link href={`/posts/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div>
                        <h3 className="text-xs uppercase tracking-wide text-gray-500 dark:text-text-dark">
                          Next Article
                        </h3>
                        <div className="text-sky hover:text-sky-dark dark:text-sky-dark dark:hover:text-sky ">
                          <Link href={`/posts/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="sticky top-[50px] mb-2 pt-4 xl:pt-8">
                <Link
                  href="/posts"
                  className="text-sky hover:text-sky-dark dark:text-sky-dark dark:hover:text-sky"
                >
                  &larr; Back to the posts
                </Link>
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
