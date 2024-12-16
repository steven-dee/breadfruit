// Mock function to generate quotes based on user answers
export function generateQuotes(answers) {
  // In a real app, this would make an API call to get actual quotes
  const mockQuotes = [
    {
      id: 'q1',
      provider: {
        name: 'Sagicor Insurance',
        logo: '/logos/sagicor.png',
        rating: 4.8,
        reviewCount: 1250
      },
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
        { id: 'roadside', name: 'Roadside Assistance', price: 15.99 },
        { id: 'rental', name: 'Rental Car Coverage', price: 12.99 }
      ]
    },
    {
      id: 'q2',
      provider: {
        name: 'GTM Insurance',
        logo: '/logos/gtm.png',
        rating: 4.6,
        reviewCount: 980
      },
      monthlyPremium: 95.99,
      annualPremium: 1079.99,
      coverage: {
        type: 'Comprehensive Plus',
        deductible: 250,
        liabilityLimit: '1,500,000',
        collisionCoverage: true,
        personalInjury: true
      },
      addOns: [
        { id: 'roadside', name: 'Roadside Assistance', price: 12.99 },
        { id: 'windscreen', name: 'Windscreen Coverage', price: 8.99 }
      ]
    },
    {
      id: 'q3',
      provider: {
        name: 'New India Insurance',
        logo: '/logos/new-india.png',
        rating: 4.7,
        reviewCount: 1120
      },
      monthlyPremium: 105.99,
      annualPremium: 1199.99,
      coverage: {
        type: 'Premium',
        deductible: 100,
        liabilityLimit: '2,000,000',
        collisionCoverage: true,
        personalInjury: true
      },
      addOns: [
        { id: 'roadside', name: 'Roadside Assistance', price: 10.99 },
        { id: 'rental', name: 'Rental Car Coverage', price: 11.99 },
        { id: 'windscreen', name: 'Windscreen Coverage', price: 7.99 }
      ]
    }
  ];

  return mockQuotes;
}