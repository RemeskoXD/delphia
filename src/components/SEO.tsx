import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function SEO({
  title = 'Delphia | Průkazy energetické náročnosti budov',
  description = 'Rychlé a spolehlivé vypracování PENB, energetické audity a ESG reporty pro firmy, bytová družstva i rodinné domy. Důvěřují nám lídři na trhu.',
  url = 'https://delphia.sk',
  image = 'https://web2.itnahodinu.cz/delphia/logod.png'
}: SEOProps) {
  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
}
