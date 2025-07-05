import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import CustomLink from '@/components/Link'

export default function Banner() {
  const [isMounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const title = 'Free Palestine 🇵🇸'
  const description = `Stand for humanity! Palestine has a right to defend itself. Together, we can put an end to the Gaza genocide. Let's unite to #SAVEGAZA and ensure that every life in this region has access to the most basic necessities.`
  const linkTo = 'https://twitter.com/search?q=%23PalestineLivesMatter'
  // ---- change the content above if you want to ----
  useEffect(() => {
    document.body.classList = theme
    setMounted(true)
  }, [theme])

  if (!isMounted) {
    return null
  }
  return (
    <div
      className={`relative top-0 isolate z-50 flex items-center overflow-hidden bg-base-100 px-3.5 py-2.5 backdrop-blur-sm sm:sticky md:px-6`}
    >
      <div
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <BlurDiv />
      </div>
      <div
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
        aria-hidden="true"
      >
        <BlurDiv />
      </div>
      <p className={`mx-auto text-sm font-medium leading-8 text-text sm:leading-6`}>
        <CustomLink href={linkTo} target="_blank">
          <strong className="font-semibold">{title}</strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {description}
        </CustomLink>
      </p>
    </div>
  )
}

const BlurDiv = () => (
  <div
    className={`aspect-577/310 w-144.25 bg-linear-to-r from-[#149954] to-[#E4312b] opacity-80 md:opacity-50`}
    style={{
      clipPath:
        'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
    }}
  />
)
