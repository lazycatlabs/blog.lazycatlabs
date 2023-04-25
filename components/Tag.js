import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 rounded-md bg-primary-600/10 px-2 py-1 text-xs font-bold  uppercase text-primary-500 hover:text-primary-600 dark:hover:font-semibold dark:hover:text-primary-600">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
