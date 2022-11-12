import React from 'react'
import Link from 'next/link'

import useScrollSpy from '../lib/scollSpy'

/**
 * This offset is meant for the smooth scrolling and
 * Scrollspy to take into account the header height
 */
const OFFSET = 100


const Table_of_Contents = ({ ids }: TableOfContentProps) => {
  const [currentActiveIndex] = useScrollSpy(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    ids.map((item) => document.querySelector(`#${item.id}`).parentElement.closest('section')!),
    { offset: OFFSET }
  )
  if (ids.length > 0) {
    return (
      <div className="mt-8 table-of-contents">
        <ul>
          {ids.map((item, index) => {
            return (
              <Link href={`#${item.id}`} key={item.id}>
                <a
                  className={
                    currentActiveIndex === index
                      ? 'text-primary-600 dark:text-primary-400 toc-a underline font-medium'
                      : 'toc-a hover:italic'
                  }
                >
                  <li key={item.id} className="py-4">
                    {item.title}
                  </li>
                </a>
              </Link>
            )
          })}
        </ul>
      </div>
    )
  }
  return <></>
}

export default Table_of_Contents
