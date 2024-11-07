// components/BlogPostItem.js
import CustomLink from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

export default function Card({ slug, date, title, summary, tags }) {
  const splitSlug = slug.split('/')
  const category = splitSlug.length > 2 ? splitSlug[1] : splitSlug[0]

  return (
    <li className="transform overflow-hidden rounded-md bg-mantle pb-2 pl-2 transition-transform duration-300 hover:scale-105">
      <div className="w-1/5 justify-self-end rounded-md rounded-br-none rounded-tl-none bg-subtext0 bg-opacity-10 py-1 text-center font-medium first-letter:uppercase ">
        {category}
      </div>
      <CustomLink href={`/posts/${slug}`}>
        <div className="py-2">
          <h3 className="text-3xl font-extrabold md:line-clamp-2">
            <div className="px-4 ">{title}</div>
            {title.length <= 50 ? <br /> : null}
          </h3>
          <div className="prose space-y-4 px-4 py-2 text-subtext1 md:line-clamp-2">
            <div>{summary}</div>
            {summary.length <= 65 ? <br /> : null}
          </div>
        </div>
        <div className="px-4  text-end text-sm  text-subtext0">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
      </CustomLink>
      <div className="flex flex-wrap gap-4 p-4">
        {tags.map((tag) => (
          <Tag key={tag} text={tag} isFromList={true} />
        ))}
      </div>
    </li>
  )
}
