import CustomLink from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

export default function Card({ slug, date, title, summary, tags }) {
  const splitSlug = slug.split('/')
  const category = splitSlug.length > 2 ? splitSlug[1] : splitSlug[0]

  return (
    <li className="transform overflow-hidden  shadow-md card glass rounded-xl bg-base-100 transition-transform duration-300 hover:scale-105">
      <div className="flex flex-wrap justify-between">
        <div className="px-4 py-1  text-sm  text-base-content font-medium">
          <time dateTime={date}>{formatDate(date)}</time>
        </div>
        <div className="w-1/5  rounded-md text-base-300 rounded-br-none rounded-tl-none bg-base-content py-1 text-center font-medium first-letter:uppercase ">
          {category}
        </div>
      </div>
      <CustomLink href={`/posts/${slug}`} className="card-body">
        <h3 className="text-3xl font-extrabold md:line-clamp-2">
          {title}
          {title.length <= 50 ? <br /> : null}
        </h3>
        <div className="prose space-y-4  md:line-clamp-2">
          <div>{summary}</div>
          {summary.length <= 65 ? <br /> : null}
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
