import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link
      href={`/tags/${kebabCase(text)}`}
      className={`rounded-md bg-subtext0 bg-opacity-10 p-2 text-xs font-semibold uppercase text-pink hover:font-bold hover:text-pink`}
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
