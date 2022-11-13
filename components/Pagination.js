import Link from '@/components/Link'

export default function Pagination({ totalPages, currentPage }) {
  const prevPage = parseInt(currentPage) - 1 > 0
  const nextPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button
            className="text-primary-500 hover:text-primary-600 disabled:opacity-50 dark:hover:text-primary-400"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 ">
              &larr; Previous
            </button>
          </Link>
        )}
        <span className=" text-gray-500 dark:text-gray-400">
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            className="text-primary-500 hover:text-primary-600 disabled:opacity-50 dark:hover:text-primary-400"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 ">
              Next &rarr;
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
