import { ImageResponse } from 'next/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  console.log('Full Request URL:', req.url)
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Cross-Origin-Resource-Policy': 'cross-origin',
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Content-Type': 'image/png',
  }

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers,
    })
  }

  try {
    const { searchParams } = new URL(req.url)
    const title = searchParams.get('title') || 'Welcome to Lazycatlabs 👋🏻'
    const description =
      searchParams.get('description') ||
      'A blog about programming, peripheral, and technology in a lazy way'
    const author = searchParams.get('author') || 'Mudassir'
    const date = searchParams.get('date') || new Date().toISOString()
    const site = searchParams.get('site') || 'https://lazycatlabs.com'

    console.log('OG Image Parameters:', {
      title,
      description,
      author,
      date,
      site,
    })

    // Simplified font fetching with more robust error handling
    // const fontUrl = 'https://fonts.gstatic.com/s/onest/v6/gNMZW3F-SZuj7zOT0IfSjTS16cPhEhiZsg.ttf'
    // let fontData = null
    // try {
    //   const response = await fetch(fontUrl)
    //   if (response.ok) {
    //     fontData = await response.arrayBuffer()
    //   }
    // } catch (fontError) {
    //   console.error('Font Fetch Error:', fontError)
    // }

    const textColor = '#4c4f69'
    const subText1 = '#6c6f85'
    const backgroundColor = '#eff1f5'
    const urlColor = '#dd7878'

    return new ImageResponse(
      (
        <div
          // tw={`flex flex-col w-full h-full px-8 py-4`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: backgroundColor,
            backgroundImage:
              'radial-gradient(circle at 25px 25px, lightgray 3%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)',
            backgroundSize: '100px 100px',
          }}
        >
          <div
            style={{
              display: 'flex',
            }}
            // tw={`flex justify-end mb-auto`}
          >
            {/*<Logo />*/}
          </div>
          <div
            style={{
              display: 'flex',
            }}
            // tw={`flex flex-col justify-end`}
          >
            <h1
              // tw={`text-7xl p-0`}
              style={{
                color: textColor,
              }}
            >
              {title}
            </h1>
            <p
              // tw={`text-2xl`}
              style={{
                color: subText1,
              }}
            >
              {description}
            </p>

            <div
              style={{
                display: 'flex',
              }}
              // tw={`flex flex-row justify-between`}
            >
              <p
                // tw={`text-xl`}
                style={{
                  color: textColor,
                }}
              >
                {author} | {new Date(date).toLocaleDateString('en-US', { dateStyle: 'medium' })}
              </p>
              <p
                // tw={`text-xl`}
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
        headers,
        // fonts: fontData
        //   ? [
        //       {
        //         name: 'Onest',
        //         data: fontData,
        //         style: 'normal',
        //       },
        //     ]
        //   : [],
      }
    )
  } catch (error) {
    console.error('Complete OG Image Error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
    })
    return new Response(`OG Image Generation Failed: ${error.message}`, {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
      },
    })
  }
}
