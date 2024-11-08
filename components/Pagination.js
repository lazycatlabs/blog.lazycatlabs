import CustomLink from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="text-sky  disabled:opacity-50 " disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <CustomLink href={currentPage - 1 === 1 ? `/posts/` : `/posts/page/${currentPage - 1}`}>
            <button className="font-medium text-sky hover:text-sky disabled:opacity-50">
              &larr; Previous
            </button>
          </CustomLink>
        )}
        <span className="text-gray-500">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className=" text-sky hover:text-sky disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <CustomLink href={`/posts/page/${currentPage + 1}`}>
            <button className="font-medium text-sky hover:text-sky disabled:opacity-50">
              Next &rarr;
            </button>
          </CustomLink>
        )}
      </nav>
    </div>
  )
}
