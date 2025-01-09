// Question Types
export const QUESTION_TYPES = {
  TEXT_INPUT: 'TEXT_INPUT',
  SELECT: 'SELECT',
  MAKE_SELECT: 'MAKE_SELECT',
  MODEL_SELECT: 'MODEL_SELECT',
  YEAR_SELECT: 'YEAR_SELECT',
  COLOR_SELECT: 'COLOR_SELECT',
  DRIVER_SELECT: 'DRIVER_SELECT',
  NIC_INPUT: 'NIC_INPUT',
  PASSPORT_INPUT: 'PASSPORT_INPUT',
  PASSPORT_COUNTRY: 'PASSPORT_COUNTRY',
  DATE_INPUT: 'DATE_INPUT',
  LICENSE_SELECT: 'LICENSE_SELECT',
  LICENSE_NUMBER: 'LICENSE_NUMBER',
  FOREIGN_LICENSE_SELECT: 'FOREIGN_LICENSE_SELECT',
  FOREIGN_LICENSE_NUMBER: 'FOREIGN_LICENSE_NUMBER'
};

// Questions Array
export const questions = [
  {
    id: 'personalInfo',
    type: QUESTION_TYPES.TEXT_INPUT,
    messages: [
      {
        text: "Hi! I'm Tanya, your personal insurance assistant. I'm here to find you the best insurance on the market.",
        showTriangle: true
      },
      {
        text: "Let's start with your name.",
        showTriangle: false
      }
    ],
    fields: ['firstName', 'lastName']
  },
  {
    id: 'vehicleYear',
    type: QUESTION_TYPES.YEAR_SELECT,
    messages: [{ text: "What year was your vehicle manufactured?", showTriangle: true }],
    field: 'vehicleYear'
  },
  {
    id: 'vehicleMake',
    type: QUESTION_TYPES.MAKE_SELECT,
    messages: [{ text: "What's the make of your vehicle?", showTriangle: true }],
    field: 'vehicleMake'
  },
  {
    id: 'vehicleModel',
    type: QUESTION_TYPES.MODEL_SELECT,
    messages: [{ text: "What model is your vehicle?", showTriangle: true }],
    field: 'vehicleModel'
  },
  {
    id: 'vehicleColor',
    type: QUESTION_TYPES.COLOR_SELECT,
    messages: [{ text: "What color is your vehicle?", showTriangle: true }],
    field: 'vehicleColor'
  },
  {
    id: 'primaryDriver',
    type: QUESTION_TYPES.DRIVER_SELECT,
    messages: [{ text: "Who will be the primary driver?", showTriangle: true }],
    field: 'primaryDriver'
  },
  {
    id: 'driverNIC',
    type: QUESTION_TYPES.NIC_INPUT,
    messages: [{ text: "What is their NIC number?", showTriangle: true }],
    field: 'driverNIC',
    showIf: (values) => values.primaryDriver === 'someone_else'
  },
  {
    id: 'passportId',
    type: QUESTION_TYPES.PASSPORT_INPUT,
    messages: [{ text: "What is their passport ID number?", showTriangle: true }],
    field: 'passportId',
    showIf: (values) => values.driverNIC === 'NO_NIC'
  },
  {
    id: 'passportCountry',
    type: QUESTION_TYPES.PASSPORT_COUNTRY,
    messages: [{ text: "Which country issued their passport?", showTriangle: true }],
    field: 'passportCountry',
    showIf: (values) => values.driverNIC === 'NO_NIC'
  },
  {
    id: 'dateOfBirth',
    type: QUESTION_TYPES.DATE_INPUT,
    messages: [{ text: "What is their date of birth?", showTriangle: true }],
    field: 'dateOfBirth'
  },
  {
    id: 'hasLicense',
    type: QUESTION_TYPES.LICENSE_SELECT,
    messages: [{ text: "Do they have a St. Lucian driver's license?", showTriangle: true }],
    field: 'hasLicense'
  },
  {
    id: 'licenseNumber',
    type: QUESTION_TYPES.LICENSE_NUMBER,
    messages: [{ text: "What is their driver license number?", showTriangle: true }],
    field: 'licenseNumber',
    showIf: (values) => values.hasLicense === 'YES'
  },
  {
    id: 'hasLicenseFromAnotherCountry',
    type: QUESTION_TYPES.FOREIGN_LICENSE_SELECT,
    messages: [{ text: "Do they have a valid driver license from another country?", showTriangle: true }],
    field: 'hasLicenseFromAnotherCountry',
    showIf: (values) => values.hasLicense === 'NO'
  },
  {
    id: 'foreignLicenseNumber',
    type: QUESTION_TYPES.FOREIGN_LICENSE_NUMBER,
    messages: [{ text: "Which country issued their license?", showTriangle: true }],
    field: 'foreignLicenseNumber',
    showIf: (values) => values.hasLicenseFromAnotherCountry === 'YES'
  },
  {
    id: 'isVehicleRegisteredUnderYourName',
    type: QUESTION_TYPES.REGISTERED_UNDER_YOUR_NAME,
    messages: [{ text: "Is the vehicle registered under your name?", showTriangle: true }],
    field: 'isVehicleRegisteredUnderYourName',
  }
];

// Helper function to get next question
export const getNextQuestion = (currentIndex, values) => {
  if (currentIndex >= questions.length - 1) return null;
  
  let nextIndex = currentIndex + 1;
  let nextQuestion = questions[nextIndex];
  
  // Skip questions that don't meet their showIf condition
  while (nextQuestion && nextQuestion.showIf && !nextQuestion.showIf(values)) {
    nextIndex++;
    nextQuestion = questions[nextIndex];
  }
  
  return nextQuestion || null;
};

// Helper function to check if a question is complete
export const isQuestionComplete = (question, values) => {
  if (question.type === QUESTION_TYPES.TEXT_INPUT) {
    return question.fields.every(field => values[field]?.trim());
  }
  return values[question.field]?.trim();
};