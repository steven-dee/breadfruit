import { useState } from 'react';
import { motion } from 'framer-motion';
import OnboardingProgress from '../../components/referral/onboarding/OnboardingProgress';
import PersonalInfo from '../../components/referral/onboarding/PersonalInfo';
import SocialProfiles from '../../components/referral/onboarding/SocialProfiles';
import ReferralSetup from '../../components/referral/onboarding/ReferralSetup';
import ConfirmationScreen from '../../components/referral/onboarding/ConfirmationScreen';

function Apply() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personalInfo: {},
    socialProfiles: {},
    referralSetup: {}
  });

  const steps = [
    { number: 1, name: 'Personal Info', component: PersonalInfo },
    { number: 2, name: 'Social Profiles', component: SocialProfiles },
    { number: 3, name: 'Referral Setup', component: ReferralSetup }
  ];

  const handleNext = (data) => {
    const sectionKey = steps[step - 1].name.toLowerCase().replace(' ', '');
    setFormData(prev => ({
      ...prev,
      [sectionKey]: data
    }));
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (finalData) => {
    const completeData = {
      ...formData,
      referralSetup: finalData
    };
    console.log('Submit complete form:', completeData);
    setStep(4); // Move to confirmation screen
  };

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ConfirmationScreen />
        </div>
      </div>
    );
  }

  const CurrentStep = steps[step - 1].component;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Become a Referral Partner
            </h2>
            
            <div className="mb-12">
              <OnboardingProgress steps={steps} currentStep={step} />
            </div>

            <CurrentStep
              onNext={handleNext}
              onBack={handleBack}
              onSubmit={handleSubmit}
              data={formData[steps[step - 1].name.toLowerCase().replace(' ', '')]}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Apply;