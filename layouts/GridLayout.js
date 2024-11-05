import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import Card from '@/components/Card'

export default function GirdLayout({ posts, title, initialDisplayPosts = [], pagination }) {
  const [searchValue, setSearchValue] = useState('')
  const [filteredBlogPosts, setFilteredBlogPost] = useState(posts)

  useEffect(() => {
    const filtered = posts.filter((frontMatter) => {
      const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(' ')
      return searchContent.toLowerCase().includes(searchValue.toLowerCase())
    })
    setFilteredBlogPost(filtered)
  }, [searchValue, posts])

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="space-y-2 pb-4 pt-4 md:space-y-6 md:pt-20">
        <h1 className="font-extrabold text-peach sm:text-3xl sm:leading-10 md:text-6xl">{title}</h1>
        <Search onChange={setSearchValue} />
      </div>
      {!filteredBlogPosts.length ? (
        <div className="content-center py-12 text-center">
          <span className="text-2xl font-medium text-red">" {searchValue} "</span>
          <span> is not found</span>
        </div>
      ) : null}

      <ul className="grid gap-4 md:grid-cols-2">
        {displayPosts.map((frontMatter) => (
          <Card key={frontMatter.slug} {...frontMatter} />
        ))}
      </ul>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
