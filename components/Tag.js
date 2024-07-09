import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text, isFromList }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`/tags/${kebabCase(text)}`}>
      <span
        className={`my-2 mr-2 rounded-md  px-3 py-2 text-xs font-bold uppercase text-pink hover:font-semibold hover:text-pink ${
          isFromList ? 'bg-base' : 'bg-crust'
        }`}
      >
        {text.split(' ').join('-')}
      </span>
    </Link>
  )
}

export default Tag
