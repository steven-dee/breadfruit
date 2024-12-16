import { useState } from 'react';
import LogoSlider from './LogoSlider';

function Partners() {
  const partners = [
    { 
      name: 'Beacon Insurance', 
      logo: '/images/beacon.png',
      width: 200
    },
    { 
      name: 'Caribbean Alliance', 
      logo: '/images/caribbean-alliance.png',
      width: 240
    },
    { 
      name: 'Consumers Guarantee', 
      logo: '/images/consumers-guarantee.png',
      width: 220
    },
    { 
      name: 'Nagico Insurances', 
      logo: '/images/nagico.png',
      width: 240
    },
    { 
      name: 'GraceKennedy', 
      logo: '/images/gracekennedy.png',
      width: 260
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
            Our Insurance Partners
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            Trusted by leading carriers
          </p>
        </div>
        <div className="mt-12">
          <LogoSlider partners={partners} />
        </div>
      </div>
    </div>
  );
}

export default Partners;