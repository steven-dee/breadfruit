export const chatFlow = {
  initial: {
    message: "Hi I'm Tanya. Let's get started with your auto insurance quote. First, I'll need some information about you.",
    options: [
      { id: 'start', text: 'Start Application' }
    ]
  },
  // SECTION 1: APPLICANT INFORMATION
  first_name: {
    message: "What is your first name?",
    type: 'text',
    placeholder: 'Enter your first name'
  },
  last_name: {
    message: "What is your last name?",
    type: 'text',
    placeholder: 'Enter your last name'
  },
  date_of_birth: {
    message: "What is your date of birth?",
    type: 'date',
    placeholder: 'DD/MM/YYYY'
  },
  gender: {
    message: "What is your gender?",
    options: [
      { id: 'male', text: 'Male' },
      { id: 'female', text: 'Female' }
    ]
  },
  phone_number: {
    message: "What is your cell phone number? Don't worry, this information is only used to send your verification codes to ensure your account is secure.",
    type: 'tel',
    placeholder: 'Enter your cell phone number'
  },
  email: {
    message: "What is your email address?",
    type: 'email',
    placeholder: 'Enter your email address'
  },
  residential_address: {
    message: "What is your residential address?",
    type: 'text',
    placeholder: 'Enter your complete address'
  },
  license_number: {
    message: "What is your driver's license number?",
    type: 'text',
    placeholder: 'Enter your license number'
  },
  license_country: {
    message: "In which country was your license issued?",
    options: [
      { id: 'saint_lucia', text: 'Saint Lucia' },
      { id: 'caribbean', text: 'Other Caribbean Country' },
      { id: 'international', text: 'International' }
    ]
  },
  license_expiry: {
    message: "What is your license expiration date?",
    type: 'date',
    placeholder: 'DD/MM/YYYY'
  },
  driving_experience: {
    message: "How many years of driving experience do you have?",
    options: [
      { id: 'less_than_1', text: 'Less than 1 year' },
      { id: '1_to_5', text: '1-5 years' },
      { id: '5_to_10', text: '5-10 years' },
      { id: 'more_than_10', text: 'More than 10 years' }
    ]
  },
  occupation: {
    message: "What is your occupation?",
    options: [
      { id: 'student', text: 'Student' },
      { id: 'salaried', text: 'Salaried Employee' },
      { id: 'contract', text: 'Contract Employee' },
      { id: 'self_employed', text: 'Self-Employed' },
      { id: 'unemployed', text: 'Currently Unemployed' },
      { id: 'retired', text: 'Retired' }
    ]
  },
  marital_status: {
    message: "What is your marital status?",
    options: [
      { id: 'single', text: 'Single' },
      { id: 'married', text: 'Married' },
      { id: 'divorced', text: 'Divorced' },
      { id: 'widowed', text: 'Widowed' }
    ]
  },
  additional_drivers: {
    message: "Will there be additional drivers on this policy?",
    options: [
      { id: 'no_additional', text: 'No Additional Drivers' },
      { id: 'yes_additional', text: 'Yes, Add Drivers' }
    ]
  },
  // SECTION 2: VEHICLE INFORMATION
  vehicle_make: {
    message: "What is the make of your vehicle?",
    options: [
      { id: 'toyota', text: 'Toyota' },
      { id: 'honda', text: 'Honda' },
      { id: 'nissan', text: 'Nissan' },
      { id: 'mazda', text: 'Mazda' },
      { id: 'hyundai', text: 'Hyundai' },
      { id: 'kia', text: 'Kia' },
      { id: 'other', text: 'Other' }
    ]
  },
  vehicle_model: {
    message: "What is the model of your vehicle?",
    options: [
      { id: 'corolla', text: 'Corolla' },
      { id: 'civic', text: 'Civic' },
      { id: 'sentra', text: 'Sentra' },
      { id: 'elantra', text: 'Elantra' },
      { id: 'other', text: 'Other' }
    ]
  },
  vehicle_year: {
    message: "What year was your vehicle manufactured?",
    options: [
      { id: '2023', text: '2023' },
      { id: '2022', text: '2022' },
      { id: '2021', text: '2021' },
      { id: '2020', text: '2020' },
      { id: 'older', text: '2019 or older' }
    ]
  },
  vin_number: {
    message: "What is your Vehicle Identification Number (VIN)?",
    type: 'text',
    placeholder: 'Enter your VIN number'
  },
  license_plate: {
    message: "What is your license plate number?",
    type: 'text',
    placeholder: 'Enter your license plate number'
  },
  market_value: {
    message: "What is the current estimated market value of your vehicle?",
    options: [
      { id: '50k', text: 'Up to $50,000' },
      { id: '100k', text: '$50,001 - $100,000' },
      { id: '150k', text: '$100,001 - $150,000' },
      { id: '200k', text: '$150,001 - $200,000' },
      { id: 'over200k', text: 'Over $200,000' }
    ]
  },
  mileage: {
    message: "What is your current odometer reading (mileage)?",
    options: [
      { id: '50k', text: 'Up to 50,000 km' },
      { id: '100k', text: '50,001 - 100,000 km' },
      { id: '150k', text: '100,001 - 150,000 km' },
      { id: '200k', text: '150,001 - 200,000 km' },
      { id: 'over200k', text: 'Over 200,000 km' }
    ]
  },
  ownership_status: {
    message: "What is your vehicle ownership status?",
    options: [
      { id: 'owned', text: 'Owned outright' },
      { id: 'financed', text: 'Financed' },
      { id: 'leased', text: 'Leased' }
    ]
  },
  financier_details: {
    message: "Please provide the name of the company that financed or leased your vehicle to you.",
    type: 'text',
    placeholder: 'Enter company name'
  },
  vehicle_usage: {
    message: "How do you primarily use your vehicle?",
    options: [
      { id: 'personal', text: 'Personal use' },
      { id: 'business', text: 'Business use' }
    ]
  },
  business_details: {
    message: "Please describe the nature of your business use:",
    type: 'text',
    placeholder: 'Enter business details'
  },
  annual_mileage: {
    message: "What is your approximate annual mileage?",
    options: [
      { id: 'low_mileage', text: 'Less than 10,000 km/year' },
      { id: 'mid_mileage', text: '10,000 - 20,000 km/year' },
      { id: 'high_mileage', text: 'More than 20,000 km/year' }
    ]
  },
  safety_features: {
    message: "Which safety features does your vehicle have? (Select all that apply)",
    options: [
      { id: 'airbags', text: 'Airbags' },
      { id: 'abs', text: 'ABS (Anti-lock Braking System)' },
      { id: 'antitheft', text: 'Anti-theft system' }
    ]
  },
  parking_location: {
    message: "Where is the vehicle typically parked overnight?",
    options: [
      { id: 'garage', text: 'Garage' },
      { id: 'driveway', text: 'Driveway' },
      { id: 'street', text: 'Street parking' }
    ]
  },
  // SECTION 3: INSURANCE HISTORY
  current_insurance: {
    message: "Do you currently have auto insurance?",
    options: [
      { id: 'yes_insured', text: 'Yes' },
      { id: 'no_insured', text: 'No' }
    ]
  },
  current_insurer: {
    message: "Who is your current insurer?",
    type: 'text',
    placeholder: 'Enter insurer name'
  },
  policy_number: {
    message: "What is your current policy number?",
    type: 'text',
    placeholder: 'Enter policy number'
  },
  current_premium: {
    message: "What is your current annual premium?",
    type: 'text',
    placeholder: 'Enter annual premium amount'
  },
  insurance_years: {
    message: "How many years of continuous auto insurance coverage have you had?",
    options: [
      { id: 'new_insurance', text: 'New to insurance' },
      { id: '1_2_years', text: '1-2 years' },
      { id: '3_5_years', text: '3-5 years' },
      { id: 'over_5_years', text: 'Over 5 years' }
    ]
  },
  claims_history: {
    message: "Have you had any insurance claims in the past 5 years?",
    options: [
      { id: 'no_claims', text: 'No claims' },
      { id: 'yes_claims', text: 'Yes, had claims' }
    ]
  },
  // SECTION 4: DRIVER HISTORY
  violations: {
    message: "Have you received any driving violations or tickets in the past 5 years?",
    options: [
      { id: 'no_violations', text: 'No violations' },
      { id: 'yes_violations', text: 'Yes, had violations' }
    ]
  },
  accidents: {
    message: "Have you been involved in any accidents in the past 5 years?",
    options: [
      { id: 'no_accidents', text: 'No accidents' },
      { id: 'yes_accidents', text: 'Yes, had accidents' }
    ]
  },
  verification_docs: {
    message: "Please upload the following documents:",
    type: 'file',
    required: [
      { id: 'license', text: "Driver's License" },
      { id: 'registration', text: 'Vehicle Registration' },
      { id: 'inspection', text: 'Vehicle Inspection' }
    ]
  }
};