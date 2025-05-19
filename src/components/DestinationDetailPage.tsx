import React from 'react';
import { useParams } from 'react-router-dom';
import DestinationDetail from './DestinationDetail';
import { destinationDetails } from './destinationDetailsData';

const DestinationDetailPage = () => {
  const { slug } = useParams();
  const details = destinationDetails[slug as keyof typeof destinationDetails];

  if (!details) {
    return <div style={{ padding: '4rem', textAlign: 'center' }}>Destination not found.</div>;
  }

  return <DestinationDetail {...details} />;
};

export default DestinationDetailPage; 