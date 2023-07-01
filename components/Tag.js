import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="my-1 mr-3 rounded-md bg-card px-2 py-1 text-xs font-bold uppercase text-pink hover:text-pink dark:bg-card-dark dark:text-pink-dark dark:hover:font-semibold dark:hover:text-pink-dark">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
