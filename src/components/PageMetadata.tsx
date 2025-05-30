import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface PageMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
}

const PageMetadata = ({ 
  title = "Best Taxi Service in Gorakhpur | Online Cab Booking",
  description = "Need a taxi in Gorakhpur? Book online for airport pickup, wedding car rental, and more. Affordable cab service like Uber and Ola.",
  keywords = "gorakhpur taxi, taxi service gorakhpur, cab booking gorakhpur, airport taxi gorakhpur, car rental gorakhpur, gorakhpur to lucknow taxi service, gorakhpur to delhi taxi service, gorakhpur to allahabad taxi service, gorakhpur to varanasi taxi service, gorakhpur to kanpur taxi service, gorakhpur to agra taxi service, gorakhpur to sitapur taxi service, gorakhpur to ayodhya taxi service, gorakhpur to noida taxi service, gorakhpur to ghaziabad taxi service, gorakhpur to bareilly taxi service, gorakhpur to gurgaon taxi, gorakhpur to darbhanga taxi, gorakhpur to patna taxi, gorakhpur to chapra taxi, gorakhpur to muzaffarpur taxi, gorakhpur to ghazipur taxi, gorakhpur to gaya taxi, gorakhpur to sitamarhi taxi, gorakhpur to begusarai taxi, gorakhpur to motihari taxi, gorakhpur to azamgarh taxi, gorakhpur to sultanpur taxi, gorakhpur to jaunpur taxi, gorakhpur to basti taxi, gorakhpur to balrampur taxi, gorakhpur to sonauli border taxi, gorakhpur to pokhara taxi, gorakhpur to pashupatinath taxi, gorakhpur to kathmandu taxi, gorakhpur to lumbini taxi",
  image = "https://bestgorakhpurtaxi.com/assets/image/logo.jpg",
  type = "website"
}: PageMetadataProps) => {
  const location = useLocation();
  const baseUrl = "https://bestgorakhpurtaxi.com";
  const canonicalUrl = `${baseUrl}${location.pathname}`;

  // Structured data for Local Business
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Best Gorakhpur Taxi",
    "image": image,
    "description": description,
    "url": baseUrl,
    "telephone": "+91-XXXXXXXXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Your Street Address",
      "addressLocality": "Gorakhpur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "273001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.7606",
      "longitude": "83.3732"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "₹₹",
    "areaServed": [
      "Lucknow",
      "Delhi",
      "Allahabad",
      "Varanasi",
      "Kanpur",
      "Agra",
      "Sitapur",
      "Ayodhya",
      "Noida",
      "Ghaziabad",
      "Bareilly",
      "Gurgaon",
      "Darbhanga",
      "Patna",
      "Chapra",
      "Muzaffarpur",
      "Ghazipur",
      "Gaya",
      "Sitamarhi",
      "Begusarai",
      "Motihari",
      "Azamgarh",
      "Sultanpur",
      "Jaunpur",
      "Basti",
      "Balrampur",
      "Sonauli Border",
      "Pokhara",
      "Pashupatinath",
      "Kathmandu",
      "Lumbini"
    ],
    "serviceType": [
      "Taxi Service",
      "Cab Service",
      "Car Rental",
      "Airport Transfer",
      "Outstation Taxi",
      "Local Taxi"
    ]
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Best Gorakhpur Taxi" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Best Gorakhpur Taxi" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="generator" content="React" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default PageMetadata; 