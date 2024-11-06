// components/BlogPostItem.js
import CustomLink from '@/components/Link'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'

export default function Card({ slug, date, title, summary, tags }) {
  return (
    <li className="transform overflow-hidden rounded-md bg-mantle p-2 transition-transform duration-300 hover:scale-105">
      <CustomLink href={`/posts/${slug}`}>
        <div className="pb-2">
          <h3 className="text-2xl font-extrabold tracking-tight md:line-clamp-2">
            <div className="px-4 py-4">{title}</div>
            {title.length <= 50 ? <br /> : null}
          </h3>
          <div className="prose space-y-4 px-4 text-subtext0 md:line-clamp-2">
            <div>{summary}</div>
            {summary.length <= 65 ? <br /> : null}
          </div>
        </div>
        <div className="px-4 py-2 text-end text-sm italic text-subtext0">
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
