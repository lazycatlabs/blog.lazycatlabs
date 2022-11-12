import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-xs uppercase font-bold text-primary-500 hover:text-primary-600 dark:hover:text-primary-600  dark:hover:font-semibold bg-primary-600/10 py-1 px-2 rounded-md">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
