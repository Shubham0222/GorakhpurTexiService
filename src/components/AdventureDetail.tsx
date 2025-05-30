import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './AdventureDetail.module.css';
import { getWhatsAppLink } from '../utils/whatsapp';

interface Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  bannerImage: string;
  sliderImages: string[];
  duration: string;
  difficulty: string;
  bestTime: string;
  location: string;
  price: string;
  details: string[];
  requirements: string[];
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Paragliding',
    description: 'Experience the thrill of flying like a bird over the beautiful landscapes of Nepal.',
    image: '/assets/image/adventure/P1.jpg',
    bannerImage: '/assets/image/adventure/P1.jpg',
    sliderImages: [
      '/assets/image/adventure/paragliding/P1_Paragliding.jpg',
      // '/assets/image/adventure/paragliding/P2.jpg',
      // '/assets/image/adventure/paragliding/P3.jpg',
      // '/assets/image/adventure/paragliding/P4.jpg'
    ],
    duration: '1-2 hours',
    difficulty: 'Beginner friendly',
    bestTime: 'September to November',
    location: 'Pokhara, Nepal',
    price: 'Starting from $80',
    details: [
      'Experience the thrill of flying like a bird over the beautiful landscapes of Nepal',
      'Professional instructors and safety equipment provided',
      'Breathtaking views of the Annapurna range and Phewa Lake',
      'Perfect for beginners and experienced flyers',
      'Video and photo packages available'
    ],
    requirements: [
      'Minimum age: 16 years',
      'Weight limit: 90 kg',
      'No prior experience needed',
      'Comfortable clothing and shoes recommended'
    ]
  },
  {
    id: 2,
    title: 'Bungee Jumping',
    description: 'Take the ultimate leap of faith from one of the highest bungee jumping spots in the world.',
    image: '/assets/image/adventure/P1.jpg',
    bannerImage: '/assets/image/adventure/P1.jpg',
    sliderImages: [
      '/assets/image/adventure/Bungee_Jumping/P1.jpg'
      // '/assets/image/adventure/Bungee_Jumping/P2.jpg',
      // '/assets/image/adventure/Bungee_Jumping/P3.jpg',
      // '/assets/image/adventure/Bungee_Jumping/P4.jpg'
    ],
    duration: '2-3 hours',
    difficulty: 'Moderate',
    bestTime: 'October to May',
    location: 'The Last Resort, Nepal',
    price: 'Starting from $100',
    details: [
      'Jump from 160 meters above the Bhote Koshi River',
      'One of the highest bungee jumps in the world',
      'Professional safety equipment and trained staff',
      'Video and photo packages available',
      'Certificate of achievement provided'
    ],
    requirements: [
      'Minimum age: 18 years',
      'Weight limit: 100 kg',
      'No heart conditions or back problems',
      'Comfortable clothing and secure shoes required'
    ]
  },
  {
    id: 5,
    title: 'Water Rafting',
    description: 'Navigate the thrilling rapids of Nepal\'s rivers with expert guides and all safety gear provided.',
    image: '/assets/image/rafting.jpg',
    bannerImage: '/assets/image/rafting-banner.jpg',
    sliderImages: [
      '/assets/image/adventure/Rafting/rafting.jpg'
      // '/assets/image/adventure/Rafting/P2.jpg',
      // '/assets/image/adventure/Rafting/P3.jpg',
      // '/assets/image/adventure/Rafting/P4.jpg'
    ],
    duration: '1 day to multi-day',
    difficulty: 'Intermediate',
    bestTime: 'October to May',
    location: 'Trishuli River, Nepal',
    price: 'Starting from $50',
    details: [
      'Exciting rapids and beautiful river valleys',
      'Includes life jackets, helmets, and paddles',
      'Trained rafting guides for your safety',
      'Scenic riverside lunch on most trips',
      'Great for team adventures and group tours'
    ],
    requirements: [
      'Minimum age: 14 years',
      'Basic swimming ability recommended',
      'Good physical condition',
      'No major health issues'
    ]
  },
  {
    id: 3,
    title: 'Trekking to Poon Hill',
    description: 'A short Himalayan trek offering sunrise views over the Annapurna and Dhaulagiri ranges.',
    image: '/assets/image/poonhill.jpg',
    bannerImage: '/assets/image/poonhill-banner.jpg',
    sliderImages: [
      '/assets/image/adventure/Trekking/P1.jpg'
      // '/assets/image/adventure/Trekking/P2.jpg',
      // '/assets/image/adventure/Trekking/P3.jpg',
      // '/assets/image/adventure/Trekking/P4.jpg'
    ],
    duration: '4-5 days',
    difficulty: 'Moderate',
    bestTime: 'March to May, September to November',
    location: 'Ghorepani, Nepal',
    price: 'Starting from $300 (all inclusive)',
    details: [
      'Scenic trails through rhododendron forests and Gurung villages',
      'Stunning mountain views at sunrise from Poon Hill',
      'Experienced trekking guide included',
      'Accommodation in tea houses along the route',
      'Great for first-time trekkers'
    ],
    requirements: [
      'Moderate fitness level',
      'Trekking shoes and warm clothing required',
      'Trekking permits arranged by provider',
      'Acclimatization and hydration important'
    ]
  },
  {
    id: 6,
    title: 'Jungle Safari in Chitwan',
    description: 'Explore the wildlife and dense forests of Chitwan National Park in a jeep or canoe.',
    image: '/assets/image/safari.jpg',
    bannerImage: '/assets/image/safari-banner.jpg',
    sliderImages: [
      '/assets/image/adventure/Jungle_Safari/jungle-safari.jpg'
      // '/assets/image/adventure/Jungle_Safari/P2.jpg',
      // '/assets/image/adventure/Jungle_Safari/P3.jpg',
      // '/assets/image/adventure/Jungle_Safari/P4.jpg'
    ],
    duration: '1-3 days',
    difficulty: 'Easy',
    bestTime: 'October to March',
    location: 'Chitwan, Nepal',
    price: 'Starting from $120',
    details: [
      'Jeep safari, canoe ride, and jungle walk',
      'Chance to spot rhinos, tigers, elephants, and crocodiles',
      'Visit the local Tharu village',
      'Stay in eco-lodges with meals included',
      'Nature guide and park permit included'
    ],
    requirements: [
      'No physical restrictions',
      'Wear earth-toned clothes',
      'Insect repellent and sunscreen recommended',
      'Follow guide\'s instructions strictly for safety'
    ]
  },
  {
    id: 4,
    title: 'Mountaineering',
    description: 'Challenge yourself with professional mountaineering expeditions in the Himalayas.',
    image: '/assets/image/mountaineering.jpg',
    bannerImage: '/assets/image/mountaineering-banner.jpg',
    sliderImages: [
      '/assets/image/adventure/Mountaineering/mounting.jpg'
      // '/assets/image/adventure/Mountaineering/P2.jpg',
      // '/assets/image/adventure/Mountaineering/P3.jpg',
      // '/assets/image/adventure/Mountaineering/P4.jpg'
    ],
    duration: '10-30 days (depending on peak)',
    difficulty: 'Advanced',
    bestTime: 'April to May, September to November',
    location: 'Everest, Manaslu, Island Peak – Nepal',
    price: 'Starting from $2,000',
    details: [
      'Climb iconic Himalayan peaks under expert guidance',
      'Includes acclimatization, technical training, and full expedition support',
      'Spectacular views from the world\'s highest mountains',
      'Sherpa guides and porters included',
      'All gear, camping, and meals included in package'
    ],
    requirements: [
      'Excellent physical fitness and stamina',
      'Prior high-altitude trekking or climbing experience required',
      'Medical fitness clearance necessary',
      'Technical gear (ice axe, crampons) – provided or bring your own'
    ]
  },
  {
    id: 7,
    title: 'Mountain Biking',
    description: 'Ride through scenic trails and challenging terrains of Nepal.',
    image: '/assets/image/biking.jpg',
    bannerImage: '/assets/image/biking-banner.jpg',
    sliderImages: [
      '/assets/image/adventure/Mountain_Biking/mountain-biking.jpg'
      // '/assets/image/adventure/Mountain_Biking/P2.jpg',
      // '/assets/image/adventure/Mountain_Biking/P3.jpg',
      // '/assets/image/adventure/Mountain_Biking/P4.jpg'
    ],
    duration: 'Half-day to multi-day trips',
    difficulty: 'Moderate to Advanced',
    bestTime: 'October to April',
    location: 'Kathmandu Valley, Mustang, Pokhara',
    price: 'Starting from $40',
    details: [
      'Thrilling downhill and cross-country routes',
      'Explore local villages and remote trails',
      'Rental of high-performance bikes available',
      'Support vehicle and guide included for long trips',
      'Customizable trails for all skill levels'
    ],
    requirements: [
      'Basic cycling experience required',
      'Helmet and gloves mandatory',
      'Knee and elbow guards recommended',
      'Minimum age: 14 years'
    ]
  },
  {
    id: 8,
    title: 'Rock Climbing',
    description: 'Test your skills on natural rock formations and artificial climbing walls.',
    image: '/assets/image/climbing.jpg',
    bannerImage: '/assets/image/climbing-banner.jpg',
    sliderImages: [
      '/assets/image/adventure/Rock_Climbing/rock-climbing.jpg'
      // '/assets/image/adventure/Rock_Climbing/P1.jpg',
      // '/assets/image/adventure/Rock_Climbing/P2.jpg',
      // '/assets/image/adventure/Rock_Climbing/P3.jpg',
      // '/assets/image/adventure/Rock_Climbing/P4.jpg'
    ],
    duration: '2-4 hours',
    difficulty: 'Beginner to Advanced',
    bestTime: 'All year round (except monsoon)',
    location: 'Nagarjun Forest, Hattiban – Kathmandu, Nepal',
    price: 'Starting from $25',
    details: [
      'Top-rope, lead, and bouldering routes available',
      'Certified instructors and safety equipment provided',
      'Ideal for first-timers and seasoned climbers',
      'Climb on limestone cliffs surrounded by forest',
      'Gear rental included (harness, shoes, helmet)'
    ],
    requirements: [
      'Minimum age: 10 years',
      'Basic fitness required',
      'No prior climbing experience needed for beginner routes',
      'Comfortable, stretchable clothing recommended'
    ]
  },
  {
    id: 9,
    title: 'Zip-lining',
    description: 'Soar through the air on Nepal\'s longest and fastest zip lines.',
    image: '/assets/image/zipline.jpg',
    bannerImage: '/assets/image/zipline-banner.jpg',
    sliderImages: [
      '/assets/image/adventure/Zip-lining/zip-lining.jpg'
      // '/assets/image/adventure/Zip-lining/P2.jpg',
      // '/assets/image/adventure/Zip-lining/P3.jpg',
      // '/assets/image/adventure/Zip-lining/P4.jpg'
    ],
    duration: '1-2 hours',
    difficulty: 'Easy',
    bestTime: 'All year round (except heavy rain season)',
    location: 'Sarangkot, Pokhara',
    price: 'Starting from $30',
    details: [
      'Fly 1.8 km at speeds of up to 140 km/h',
      'One of the world\'s longest and steepest zip-lines',
      'Breathtaking views of the Annapurna and Machapuchare',
      'Harness, safety helmet, and orientation included',
      'Photos and videos available for purchase'
    ],
    requirements: [
      'Minimum age: 12 years',
      'Weight limit: 35 kg to 100 kg',
      'Not suitable for those with heart or spinal conditions',
      'Closed shoes and secure clothing recommended'
    ]
  }
];

const AdventureDetail = () => {
  const { id } = useParams();
  const activity = activities.find(a => a.id === Number(id));
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!activity?.sliderImages) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => 
        prev === (activity.sliderImages.length - 1) ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [activity?.sliderImages]);

  const nextSlide = () => {
    if (!activity?.sliderImages) return;
    setCurrentSlide((prev) => 
      prev === (activity.sliderImages.length - 1) ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    if (!activity?.sliderImages) return;
    setCurrentSlide((prev) => 
      prev === 0 ? (activity.sliderImages.length - 1) : prev - 1
    );
  };

  if (!activity) {
    return <div>Activity not found</div>;
  }

  return (
    <div className={styles.detailPage}>
      {/* Banner Section with Slider */}
      <div className={styles.banner}>
        <div className={styles.bannerOverlay}></div>
        <div className={styles.sliderContainer}>
          {activity.sliderImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`${activity.title} - Slide ${index + 1}`}
              className={styles.bannerImage}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: index === currentSlide ? 1 : 0,
                zIndex: index === currentSlide ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
        
        {/* Navigation Buttons */}
        <button 
          className={styles.sliderButton} 
          onClick={prevSlide}
          style={{ left: '20px' }}
        >
          ←
        </button>
        <button 
          className={styles.sliderButton} 
          onClick={nextSlide}
          style={{ right: '20px' }}
        >
          →
        </button>

        {/* Slide Indicators */}
        <div className={styles.slideIndicators}>
          {activity.sliderImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>

        <div className={styles.bannerContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.bannerTitle}
          >
            {activity.title}
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <div className={styles.overview}>
              <h2>Overview</h2>
              <p>{activity.description}</p>
            </div>

            <div className={styles.details}>
              <h2>Activity Details</h2>
              <ul>
                {activity.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className={styles.requirements}>
              <h2>Requirements</h2>
              <ul>
                {activity.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.sidebar}>
            <div className={styles.infoCard}>
              {/* <h3>Quick Info</h3>
              <ul>
                <li><strong>Duration:</strong> {activity.duration}</li>
                <li><strong>Difficulty:</strong> {activity.difficulty}</li>
                <li><strong>Best Time:</strong> {activity.bestTime}</li>
                <li><strong>Location:</strong> {activity.location}</li>
                <li><strong>Price:</strong> {activity.price}</li>
              </ul>
              <a 
                href={getWhatsAppLink('adventure', `Activity: ${activity.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookButton}
              >
                Book Now
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdventureDetail; 