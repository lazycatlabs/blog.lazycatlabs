import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { useState } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'

export default function GirdLayout({ posts, title, initialDisplayPosts = [], pagination }) {
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
      <div className="space-y-2 pb-4 pt-4 md:space-y-6 md:pt-12">
        <h1 className="font-extrabold text-mauve sm:text-3xl sm:leading-10 md:text-6xl">{title}</h1>
        <div className="relative max-w-sm overflow-hidden">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="w-full rounded-md border-transparent bg-mantle px-4 py-2 text-text focus:border-yellow"
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
      {!filteredBlogPosts.length ? (
        <div className="content-center py-12 text-center">
          <span className="text-2xl font-medium text-red">" {searchValue} "</span>
          <span> is not found</span>
        </div>
      ) : null}

      <ul className="grid gap-x-4 md:grid-cols-2">
        {displayPosts.map((frontMatter) => {
          const { slug, date, title, summary, tags } = frontMatter
          return (
            <li
              key={slug}
              className="my-4 transform overflow-hidden rounded-md bg-mantle transition-transform duration-300 hover:scale-105"
            >
              <Link href={`/posts/${slug}`}>
                <div className="pb-3">
                  <h3 className="text-3xl font-extrabold tracking-tight  md:line-clamp-2">
                    <div className="px-4 py-4">{title}</div>
                    {title.length <= 50 ? <br /> : null}
                  </h3>
                  <div className="flex flex-wrap px-4">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} isFromList={true} />
                    ))}
                  </div>
                </div>
                <div className="prose max-w-none space-y-4 px-4 text-subtext0 md:line-clamp-2">
                  <div>{summary}</div>
                  {summary.length <= 65 ? <br /> : null}
                </div>

                <div className="px-4 py-4 text-end italic text-rosewater">
                  <span className="text-text">Published on </span>
                  <time dateTime={date}>{formatDate(date)}</time>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
