import { useEffect } from 'react'

const ArticleAd = ({ adSlot }) => {
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
      style={{
        display: 'inline-block',
        overflow: 'hidden',
        width: '100%',
        height: 'auto',
        minHeight: '90px',
      }}
      data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_ADS_CLIENT_ID}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default ArticleAd
