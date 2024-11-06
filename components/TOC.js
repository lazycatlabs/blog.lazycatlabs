import CustomLink from '@/components/Link'
import useScrollSpy from '@/lib/scrollSpy'

/**
 * This offset is meant for the smooth scrolling and
 * Scrollspy to take into account the header height
 */

const Table_of_Contents = ({ ids }) => {
  const filteredIds = ids.filter((item) => item.id)
  const currentActiveId = useScrollSpy(filteredIds)
  if (filteredIds.length > 0) {
    return (
      <div className="table-of-contents mt-8">
        <ul>
          {filteredIds.map((item) => {
            return (
              <CustomLink href={`#${item.id}`} key={item.id}>
                <span
                  className={
                    currentActiveId === item.id
                      ? 'font-medium text-peach underline '
                      : 'text:text hover:italic '
                  }
                >
                  <li key={item.id} className={`${item.level === 'h3' ? 'ml-4 py-1' : 'py-2'} `}>
                    {item.text}
                  </li>
                </span>
              </CustomLink>
            )
          })}
        </ul>
      </div>
    )
  }
  return <></>
}

export default Table_of_Contents
