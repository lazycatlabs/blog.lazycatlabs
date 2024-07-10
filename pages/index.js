import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { useState } from 'react'
import Image from 'next/image'

//import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('posts')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts = posts.length > 0 && !searchValue ? posts : filteredBlogPosts

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-overlay2">
        <div className="space-y-2 pb-8 pt-4 md:space-y-5 md:pt-24">
          <h1 className="mono-type text-4xl font-extrabold leading-9 tracking-tight text-peach sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <div className="relative max-w-lg overflow-hidden shadow-xl shadow-mantle">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className=" block w-full rounded-md border border-overlay2 bg-crust px-4 py-2 text-text focus:border-pink focus:bg-surface0 focus:ring-pink"
            />
            <svg
              className=" absolute right-3 top-3 h-5 w-5 text-text"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        {!filteredBlogPosts.length ? (
          <div className="content-center py-12 text-center">
            <span className="text-l font-medium text-red">" {searchValue} "</span>
            <span> is not found</span>
          </div>
        ) : null}
        <ul className="grid gap-x-10 md:grid-cols-2">
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li
                key={slug}
                className="my-4 overflow-hidden rounded-xl bg-surface0 shadow-xl shadow-mantle"
              >
                <article className="space-y-4">
                  <div className="pb-3">
                    <h3 className="mono-type mb-2 text-2xl font-extrabold tracking-tight  md:line-clamp-2">
                      <Link href={`/posts/${slug}`} className="text-text hover:text-peach">
                        <Image
                          src={frontMatter.images[0]}
                          alt=""
                          width={100}
                          height={100}
                          style={{
                            width: '100%',
                            height: 'auto',
                          }}
                          rel="preload"
                        />
                        <div className="border-b border-surface0 "></div>

                        <div className="px-4 pt-4">{title}</div>
                        {title.length <= 50 ? <br /> : null}
                      </Link>
                    </h3>
                    <div className="flex flex-wrap px-4">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} isFromList={true} />
                      ))}
                    </div>
                  </div>
                  <div className="prose max-w-none space-y-4 px-4  text-subtext0 md:line-clamp-2">
                    <div>{summary}</div>
                    {summary.length <= 65 ? <br /> : null}
                  </div>
                  <div className="flex flex-row justify-between px-4 pb-6 pt-4  font-medium leading-6 text-text">
                    <button className="group items-center whitespace-nowrap text-sm font-semibold">
                      <Link
                        href={`/posts/${slug}`}
                        className="text-sky hover:text-sky"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </Link>
                    </button>

                    <div className="row-auto">
                      <div className="sr-only">Published on</div>
                      <div className="mono-type  text-center font-semibold text-flamingo">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end py-8 text-base font-medium leading-6">
          <Link href="/posts" className="text-sky" aria-label="all posts">
            All Posts &rarr;
          </Link>
        </div>
      )}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
