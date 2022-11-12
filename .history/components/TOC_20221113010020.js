import React from 'react'
import Link from 'next/link'

import useScrollSpy from '../lib/scrollSpy'

/**
 * This offset is meant for the smooth scrolling and
 * Scrollspy to take into account the header height
 */
const OFFSET = 100

const Table_of_Contents = ({ ids }) => {
  const [currentActiveIndex] = useScrollSpy(
    ids.map((item) =>
      document?.querySelector(`#${item.id.toString()}`)?.parentElement.closest('section')
    ),
    { offset: OFFSET }
  )
  if (ids.length > 0) {
    return (
      <div className="table-of-contents mt-8">
        <ul>
          {ids.map((item, index) => {
            return (
              <Link href={`#${item.id}`} key={item.id}>
                <a
                  className={
                    currentActiveIndex === index
                      ? 'toc-a font-medium text-primary-600 underline dark:text-primary-400'
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
