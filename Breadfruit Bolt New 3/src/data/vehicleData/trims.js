// Vehicle trims organized by make and model
export const vehicleTrims = {
  'ford-bronco': [
    'Base',
    'Big Bend',
    'Black Diamond',
    'Outer Banks',
    'Badlands',
    'Wildtrak',
    'Raptor',
    'Heritage Edition',
    'Heritage Limited Edition'
  ],
  'ford-bronco-sport': [
    'Base',
    'Big Bend',
    'Outer Banks',
    'Badlands',
    'Heritage Edition',
    'Heritage Limited Edition'
  ],
  'ford-f-150': [
    'XL',
    'XLT',
    'Lariat',
    'King Ranch',
    'Platinum',
    'Limited',
    'Tremor',
    'Raptor'
  ],
  'chevrolet-silverado-1500': [
    'WT',
    'Custom',
    'LT',
    'RST',
    'LTZ',
    'High Country',
    'ZR2'
  ],
  'toyota-camry': [
    'LE',
    'SE',
    'SE Nightshade',
    'XLE',
    'XSE',
    'TRD'
  ],
  'honda-civic': [
    'LX',
    'Sport',
    'EX',
    'Touring',
    'Si',
    'Type R'
  ],
  'subaru-outback': [
    'Base',
    'Premium',
    'Onyx Edition XT',
    'Limited',
    'Touring',
    'Limited XT',
    'Touring XT'
  ]
  // Add more makes and models with their trims
};

// Helper function to get trim key
export const getTrimKey = (make, model) => 
  `${make.toLowerCase()}-${model.toLowerCase().replace(/\s+/g, '-')}`;