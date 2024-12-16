export const drivingHistoryQuestions = [
  {
    id: 'drivingIncidents',
    question: 'Have you had any driving incidents in the last 3 years?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' }
    ]
  },
  {
    id: 'incidentDetails',
    type: 'multiQuestion',
    questions: [
      {
        id: 'atFaultAccident',
        question: 'An at-fault accident in the past three (3) years?',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]
      },
      {
        id: 'multipleTickets',
        question: 'Two (2) or more tickets in the past three (3) years?',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]
      },
      {
        id: 'duiConviction',
        question: 'A DUI conviction in the past three (3) years?',
        options: [
          { value: 'yes', label: 'Yes' },
          { value: 'no', label: 'No' }
        ]
      }
    ],
    showIf: (answers) => answers.drivingIncidents === 'yes'
  }
];