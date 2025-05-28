export const PHONE_NUMBER = '+919026793233';

export const getWhatsAppLink = (context: string, additionalInfo?: string) => {
  const baseMessage = {
    hero: 'Hello! I would like to book a taxi ride.',
    car: 'Hello! I am interested in booking this specific car.',
    adventure: 'Hello! I would like to book this adventure activity.',
    service: 'Hello! I would like to inquire about this service.',
    default: 'Hello! I would like to make a booking.'
  };

  const message = additionalInfo 
    ? `${baseMessage[context as keyof typeof baseMessage] || baseMessage.default} ${additionalInfo}`
    : baseMessage[context as keyof typeof baseMessage] || baseMessage.default;

  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}; 