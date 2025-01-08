import kebabCase from '@/lib/utils/kebabCase'
import CustomLink from '@/components/Link'

const Tag = ({ text }) => {
  return (
    <CustomLink
      href={`/tags/${kebabCase(text)}`}
      className={`rounded-md bg-subtext0 bg-base-content text-base-300 p-2 text-xs font-semibold uppercase text-green hover:font-bold `}
    >
      {text.split(' ').join('-')}
    </CustomLink>
  )
}

export default Tag
