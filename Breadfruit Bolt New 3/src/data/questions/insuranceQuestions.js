export const insuranceQuestions = [
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
    component: 'InsuranceSelector',
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
  }
];