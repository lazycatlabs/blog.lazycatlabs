import kebabCase from '@/lib/utils/kebabCase'
import CustomLink from '@/components/Link'

const Tag = ({ text }) => {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <CustomLink
      href={`/tags/${kebabCase(text)}`}
      className={`rounded-md bg-subtext0 bg-opacity-10 p-2 text-xs font-semibold uppercase text-green hover:font-bold `}
    >
      {text.split(' ').join('-')}
    </CustomLink>
  )
}

export default Tag
