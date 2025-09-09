import { useEffect, useState } from 'react'
import Pagination from '@/components/Pagination'
import Search from '@/components/Search'
import Card from '@/components/Card'
// import DisplayAd from '@/components/DisplayAd'

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
      <div className="space-y-6 pb-16 pt-10 md:pt-16">
        <h1 className=" py-4 text-6xl font-black  sm:leading-10">{title}</h1>
        <Search onChange={setSearchValue} />
      </div>
      {/*<DisplayAd adSlot="8925201504" />*/}
      {!filteredBlogPosts.length ? (
        <div className="content-center py-12 text-center">
          <span className="text-2xl font-medium text-red">" {searchValue} "</span>
          <span> is not found</span>
        </div>
      ) : null}

      <ul className="grid gap-8 md:grid-cols-2">
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
