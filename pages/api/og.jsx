import { ImageResponse } from 'next/og'
import Logo from '@/data/logo_dark.svg'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  try {
    const { searchParams } = new URL(req.nextUrl)
    const title = searchParams.get('title') || 'Welcome to Lazycatlabs 👋🏻'
    const description =
      searchParams.get('description') ||
      'A blog about programming, peripheral, and technology in a lazy way'
    const author = searchParams.get('author') || 'Mudassir'
    const date = searchParams.get('date')
    const site = searchParams.get('site') || 'https://lazycatlabs.com'

    // Simplified font fetching with more robust error handling
    const fontUrl = 'https://fonts.gstatic.com/s/onest/v6/gNMZW3F-SZuj7zOT0IfSjTS16cPhEhiZsg.ttf'
    let fontData = null
    try {
      const response = await fetch(fontUrl)
      if (response.ok) {
        fontData = await response.arrayBuffer()
      }
    } catch (fontError) {
      console.error('Font Fetch Error:', fontError)
    }

    const textColor = '#000000'
    const subText1 = '#707070'
    const backgroundColor = '#ffffff'
    const urlColor = '#FF77B7'
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
          <div tw={`flex justify-end mb-auto`}>{<Logo />}</div>
          <div tw={`flex flex-col justify-end`}>
            <h1 tw={`text-7xl p-0`} style={{ color: textColor }}>
              {title}
            </h1>

            <p tw={`text-3xl`} style={{ color: subText1 }}>
              {description}
            </p>

            <div tw={`flex flex-row justify-between items-end mt-16`}>
              <p tw={`text-xl`} style={{ color: urlColor }}>
                {site}
              </p>
              <p tw={`text-2xl`} style={{ color: textColor }}>
                {author}{' '}
                {date && `| ${new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' })}`}
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
  } catch (error) {
    console.error('OG Image Error Details:', {
      message: error.message,
      stack: error.stack,
      type: error.constructor.name,
      req: {
        method: req.method,
        url: req.url,
        headers: req.headers,
      },
    })

    // More comprehensive error response
    return new Response(
      JSON.stringify({
        error: 'OG Image Generation Failed',
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}
