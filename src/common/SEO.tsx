import { Helmet } from "react-helmet-async";
import { SITE_CONFIG, defaultOrganizationSchema } from "./siteConfig";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

function normalisePath(path = "/") {
  if (path === "/") return path;
  return path.startsWith("/") ? path : `/${path}`;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  path = "/",
  image = SITE_CONFIG.defaultImage,
  type = "website",
  robots = "index,follow",
  structuredData,
}) => {
  const pagePath = normalisePath(path);
  const canonical = `${SITE_CONFIG.url}${pagePath}`;
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: canonical,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
    },
    about: {
      "@type": "Organization",
      name: SITE_CONFIG.legalName,
    },
  };

  const schemaGraph = [
    defaultOrganizationSchema,
    webPageSchema,
    ...(structuredData
      ? Array.isArray(structuredData)
        ? structuredData
        : [structuredData]
      : []),
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
    </Helmet>
  );
};

export default SEO;
