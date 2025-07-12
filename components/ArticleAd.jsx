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
      style={{ display: 'inline-block', width: '728px', height: '90px' }}
      data-ad-client="ca-pub-2962932702636730"
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default ArticleAd
