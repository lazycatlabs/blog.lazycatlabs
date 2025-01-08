import CustomLink from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pb-8 pt-24 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="text-secondary  disabled:opacity-40 " disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <CustomLink href={currentPage - 1 === 1 ? `/posts/` : `/posts/page/${currentPage - 1}`}>
            <button className="font-medium text-secondary hover:text-secondary disabled:opacity-40">
              &larr; Previous
            </button>
          </CustomLink>
        )}
        <span className="text-base-content">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className=" text-secondary hover:text-secondary disabled:opacity-40"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <CustomLink href={`/posts/page/${currentPage + 1}`}>
            <button className="font-medium text-secondary hover:text-secondary disabled:opacity-40">
              Next &rarr;
            </button>
          </CustomLink>
        )}
      </nav>
    </div>
  )
}
