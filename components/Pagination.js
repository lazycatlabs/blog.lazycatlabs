import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="text-sky hover:text-sky-dark disabled:opacity-50 dark:text-sky-dark dark:hover:text-sky"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/posts/` : `/posts/page/${currentPage - 1}`}>
            <button className="font-medium  text-sky hover:text-sky-dark disabled:opacity-50 dark:text-sky-dark dark:hover:text-sky">
              &larr; Previous
            </button>
          </Link>
        )}
        <span className=" text-gray-500 dark:text-text-dark">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="text-sky hover:text-sky-dark disabled:opacity-50 dark:text-sky-dark dark:hover:text-sky"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/posts/page/${currentPage + 1}`}>
            <button className="font-medium text-sky hover:text-sky-dark disabled:opacity-50 dark:text-sky-dark dark:hover:text-sky">
              Next &rarr;
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
