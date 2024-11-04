import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((frontMatter) => {
    const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y divide-overlay2">
        <div className="space-y-2 pb-8 pt-4 md:space-y-5 md:pt-24">
          <h1 className="  md:leading-14 text-4xl font-extrabold leading-9 tracking-tight text-peach sm:text-4xl sm:leading-10 md:text-6xl">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md border border-overlay2 bg-mantle px-4 py-2 text-text focus:border-pink focus:ring-pink"
            />
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-text"
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
        <ul>
          {!filteredBlogPosts.length && 'No posts found.'}
          {displayPosts.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                  <div className="flex justify-end md:justify-start">
                    <div className="sr-only">Published on</div>
                    <div className="  py-1 pr-2 text-center font-semibold text-flamingo">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </div>
                  </div>
                  <div className="space-y-3 xl:col-span-3">
                    <div>
                      <h3 className=" mb-2 text-2xl font-extrabold leading-8 tracking-tight">
                        <Link href={`/posts/${slug}`} className=" text-text hover:text-peach">
                          {title}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </div>
                    </div>
                    <div className="prose max-w-none text-subtext0">{summary}</div>
                    <div className="font-medium leading-6 text-text">
                      <button className="group inline-flex h-9 items-center whitespace-nowrap text-sm font-semibold">
                        <Link
                          href={`/posts/${slug}`}
                          className="text-sky hover:text-sky"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </button>
                    </div>
                    <div className="border-b border-surface0 "></div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
