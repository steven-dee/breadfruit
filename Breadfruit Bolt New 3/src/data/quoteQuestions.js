export const questions = [
  {
    id: 'vehicles',
    question: 'How many vehicles will be on your policy?',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3+', label: '3+' }
    ]
  },
  {
    id: 'vehicleYear',
    question: 'Vehicle Year'
  },
  {
    id: 'vehicleMake',
    question: 'Vehicle Make'
  },
  {
    id: 'vehicleModel',
    question: 'Vehicle Model'
  },
  {
    id: 'vehicleTrim',
    question: 'Vehicle Trim'
  },
  {
    id: 'hasInsurance',
    question: 'Have you had auto insurance in the past 30 days?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  },
  {
    id: 'currentInsurer',
    question: 'Current Auto Insurance',
    options: [
      { value: 'sagicor', label: 'Sagicor' },
      { value: 'gtm', label: 'GTM' },
      { value: 'newIndia', label: 'New India' },
      { value: 'caribbeanAlliance', label: 'Caribbean Alliance' },
      { value: 'beacon', label: 'Beacon Insurance' }
    ],
    showIf: (answers) => answers.hasInsurance === 'yes'
  },
  {
    id: 'insuranceLength',
    question: 'How long have you continuously had auto insurance?',
    options: [
      { value: 'lessThanYear', label: 'Less than a year' },
      { value: '1to2', label: '1 to 2 years' },
      { value: '2to3', label: '2 to 3 years' },
      { value: '4plus', label: '4+ years' }
    ],
    showIf: (answers) => answers.hasInsurance === 'yes'
  },
  {
    id: 'gender',
    question: 'Gender',
    options: [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' }
    ]
  },
  {
    id: 'married',
    question: 'Married?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  }
];

// Rest of the existing code...