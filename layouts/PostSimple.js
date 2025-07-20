import CustomLink from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Support from '@/components/Support'

export default function PostLayout({ frontMatter, next, prev, children }) {
  const { date, title } = frontMatter

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/posts/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center ">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text font-medium leading-6 text-subtext0">
                    <time dateTime={date}>{formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-surface0 xl:col-span-3 xl:row-span-2 xl:pb-0 ">
              <div className="prose max-w-none pb-8 pt-10">{children}</div>
            </div>
            {/*<ArticleAd adSlot="7919241591" />*/}
            <Support />
            <Comments frontMatter={frontMatter} />
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-text">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <CustomLink
                      href={`/posts/${prev.slug}`}
                      className="text-peach hover:text-peach"
                    >
                      &larr; {prev.title}
                    </CustomLink>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <CustomLink
                      href={`/posts/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600"
                    >
                      {next.title} &rarr;
                    </CustomLink>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
