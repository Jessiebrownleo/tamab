import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product' | 'profile' | 'book';
  siteName?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'TAMAB CONSTRUCTION - Your Trusted Construction Materials Supplier',
  description = 'High-quality construction materials and building supplies for all your construction needs. Competitive prices and fast delivery across Cambodia.',
  keywords = [
    'construction materials',
    'building supplies',
    'construction Cambodia',
    'building materials Phnom Penh',
    'construction equipment',
    'wholesale construction supplies',
    'construction hardware',
    'tamab construction'
  ],
  image = '/images/og-image.jpg',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  siteName = 'TAMAB CONSTRUCTION',
  twitterCard = 'summary_large_image',
  twitterSite = '@tamab_construction',
  twitterCreator = '@tamab_construction',
  noIndex = false,
  noFollow = false,
  canonical = typeof window !== 'undefined' ? window.location.href : '',
}) => {
  const fullTitle = title.includes('TAMAB') ? title : `${title} | TAMAB CONSTRUCTION`;
  const fullImageUrl = image.startsWith('http') ? image : `${typeof window !== 'undefined' ? window.location.origin : ''}${image}`;
  
  const robots = [];
  if (noIndex) robots.push('noindex');
  if (noFollow) robots.push('nofollow');
  if (robots.length === 0) robots.push('index, follow');

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content={robots.join(', ')} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="TAMAB CONSTRUCTION" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default SEO;
