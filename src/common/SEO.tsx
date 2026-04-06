
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  keywords?: string; 
};

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
};

export default SEO;