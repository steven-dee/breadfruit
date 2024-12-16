export const insuranceProviders = [
  {
    id: 1,
    name: 'SafeGuard Insurance',
    rating: 4.8,
    reviewCount: 1250,
    logo: '/logos/safeguard.svg'
  },
  {
    id: 2,
    name: 'Premier Protection',
    rating: 4.6,
    reviewCount: 980,
    logo: '/logos/premier.svg'
  },
  {
    id: 3,
    name: 'Elite Coverage',
    rating: 4.7,
    reviewCount: 1120,
    logo: '/logos/elite.svg'
  }
];

export const mockQuotes = [
  {
    id: 'q1',
    provider: insuranceProviders[0],
    monthlyPremium: 89.99,
    annualPremium: 999.99,
    coverage: {
      type: 'Comprehensive',
      deductible: 500,
      liabilityLimit: '1,000,000',
      collisionCoverage: true,
      personalInjury: true
    },
    addOns: [
      {
        id: 'roadside',
        name: 'Roadside Assistance',
        price: 15.99
      },
      {
        id: 'rental',
        name: 'Rental Car Coverage',
        price: 12.99
      }
    ]
  },
  {
    id: 'q2',
    provider: insuranceProviders[1],
    monthlyPremium: 95.99,
    annualPremium: 1079.99,
    coverage: {
      type: 'Comprehensive',
      deductible: 250,
      liabilityLimit: '1,500,000',
      collisionCoverage: true,
      personalInjury: true
    },
    addOns: [
      {
        id: 'roadside',
        name: 'Roadside Assistance',
        price: 12.99
      },
      {
        id: 'windscreen',
        name: 'Windscreen Coverage',
        price: 8.99
      }
    ]
  },
  {
    id: 'q3',
    provider: insuranceProviders[2],
    monthlyPremium: 105.99,
    annualPremium: 1199.99,
    coverage: {
      type: 'Comprehensive Plus',
      deductible: 100,
      liabilityLimit: '2,000,000',
      collisionCoverage: true,
      personalInjury: true
    },
    addOns: [
      {
        id: 'roadside',
        name: 'Roadside Assistance',
        price: 10.99
      },
      {
        id: 'rental',
        name: 'Rental Car Coverage',
        price: 11.99
      },
      {
        id: 'windscreen',
        name: 'Windscreen Coverage',
        price: 7.99
      }
    ]
  }
];