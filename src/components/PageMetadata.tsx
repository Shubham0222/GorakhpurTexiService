import { Helmet } from 'react-helmet';

interface PageMetadataProps {
  title?: string;
  description?: string;
}

const PageMetadata = ({ 
  title = "Best Taxi Service in Gorakhpur | Online Cab Booking",
  description = "Need a taxi in Gorakhpur? Book online for airport pickup, wedding car rental, and more. Affordable cab service like Uber and Ola."
}: PageMetadataProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};

export default PageMetadata; 