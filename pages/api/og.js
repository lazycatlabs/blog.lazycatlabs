import { ImageResponse } from 'next/og'
import Logo from '@/data/logo.svg'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Welcome to Lazycatlabs 👋🏻'
  const description =
    searchParams.get('description') ||
    'A blog about programming, peripheral, and technology in a lazy way'
  const author = searchParams.get('author') || 'Mudassir'
  const date = searchParams.get('date') || new Date().toISOString()
  const site = searchParams.get('site') || 'https://lazycatlabs.com'

  // Fetch the Onest font from Google Fonts
  const fontUrl = 'https://fonts.gstatic.com/s/onest/v6/gNMZW3F-SZuj7zOT0IfSjTS16cPhEhiZsg.ttf'
  let fontData
  try {
    const fontResponse = await fetch(fontUrl)
    if (!fontResponse.ok) {
      throw new Error('Failed to fetch font')
    }
    fontData = await fontResponse.arrayBuffer()
  } catch (error) {
    console.error('Error fetching font:', error)
    fontData = null
  }

  const textColor = '#4c4f69'
  const subText1 = '#6c6f85'
  const backgroundColor = '#eff1f5'
  const urlColor = '#dd7878'

  return new ImageResponse(
    (
      <div
        tw={`flex flex-col w-full h-full px-8 py-4`}
        style={{
          backgroundColor: backgroundColor,
          backgroundImage:
            'radial-gradient(circle at 25px 25px, lightgray 3%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div tw={`flex justify-end mb-auto`}>
          <Logo />
        </div>
        <div tw={`flex flex-col justify-end`}>
          <h1
            tw={`text-7xl p-0`}
            style={{
              color: textColor,
            }}
          >
            {title}
          </h1>
          <p
            tw={`text-2xl`}
            style={{
              color: subText1,
            }}
          >
            {description}
          </p>

          <div tw={`flex flex-row justify-between`}>
            <p
              tw={`text-xl`}
              style={{
                color: textColor,
              }}
            >
              {author} | {new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' })}
            </p>
            <p
              tw={`text-xl`}
              style={{
                color: urlColor,
              }}
            >
              {site}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData
        ? [
            {
              name: 'Onest',
              data: fontData,
              style: 'normal',
            },
          ]
        : [],
    }
  )
}
