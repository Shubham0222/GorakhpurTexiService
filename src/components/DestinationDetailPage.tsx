import React from 'react';
import { useParams } from 'react-router-dom';
import DestinationDetail from './DestinationDetail';
import { destinationDetails } from './destinationDetailsData';
import PageMetadata from './PageMetadata';

const DestinationDetailPage = () => {
  const { slug } = useParams();
  const details = destinationDetails[slug as keyof typeof destinationDetails];

  if (!details) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Destination not found.</div>;
  }

  return (
    <>
      <PageMetadata 
        title={`${details.title} | Gorakhpur Taxi Service`}
        description={`Book reliable taxi service from Gorakhpur to ${details.title}. ${details.description} Professional drivers, comfortable rides, and competitive rates.`}
      />
      <DestinationDetail {...details} />
    </>
  );
};

export default DestinationDetailPage; 