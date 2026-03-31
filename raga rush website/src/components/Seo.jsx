import { Helmet } from 'react-helmet-async'

export function Seo({ title, description, path = '', image = '/favicon.svg' }) {
  const siteUrl = 'https://ragarush.in'
  const canonical = `${siteUrl}${path}`
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  )
}
