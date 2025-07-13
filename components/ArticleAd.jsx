import { useEffect } from 'react'

const AD_CLIENT = 'ca-pub-2962932702636730'

const ArticleAd = ({ adSlot }) => {
  useEffect(() => {
    try {
      const script = document.createElement('script')
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${AD_CLIENT}`
      script.async = true
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    } catch (err) {
      console.error('Error appending AdSense script:', err)
    }
  }, [adSlot])

  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      console.error('Error loading ads:', e)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'inline-block', width: 'max-w', height: '90px' }}
      data-ad-client={{ AD_CLIENT }}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default ArticleAd
