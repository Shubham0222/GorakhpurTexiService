import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface PageMetadataProps {
  title?: string;
  description?: string;
}

const PageMetadata = ({ 
  title = "Best Taxi Service in Gorakhpur | Online Cab Booking",
  description = "Need a taxi in Gorakhpur? Book online for airport pickup, wedding car rental, and more. Affordable cab service like Uber and Ola."
}: PageMetadataProps) => {
  const location = useLocation();
  const baseUrl = "https://bestgorakhpurtaxi.com"; // Replace with your actual domain
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:url" content={canonicalUrl} />
    </Helmet>
  );
};

export default PageMetadata; 