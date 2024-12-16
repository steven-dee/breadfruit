import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ReferralSetup({ onSubmit, onBack, data = {} }) {
  const [formData, setFormData] = useState({
    referralCode: data.referralCode || '',
    message: data.message || '',
    contacts: data.contacts || null,
    termsAccepted: data.termsAccepted || false
  });

  // Get user info from previous steps through localStorage
  useEffect(() => {
    const personalInfo = JSON.parse(localStorage.getItem('referralPersonalInfo') || '{}');
    if (personalInfo.firstName && personalInfo.lastName && !formData.referralCode) {
      generateReferralCode(personalInfo);
    }
  }, []);

  const generateReferralCode = (personalInfo) => {
    const { firstName, lastName } = personalInfo;
    const prefix = `${firstName.substring(0, 2)}${lastName.substring(0, 2)}`.toUpperCase();
    const serialNumber = Math.floor(Math.random() * 9000 + 1000); // 4-digit number
    setFormData(prev => ({
      ...prev,
      referralCode: `${prefix}${serialNumber}`
    }));
  };

  const handleContactsAccess = async () => {
    try {
      // Check if contacts API is available
      if ('contacts' in navigator && 'select' in navigator.contacts) {
        const contacts = await navigator.contacts.select(
          ['name', 'tel', 'email'],
          { multiple: true }
        );
        
        // Format contacts for display/use
        const formattedContacts = contacts.map(contact => ({
          name: contact.name.join(' '),
          phone: contact.tel ? contact.tel[0] : '',
          email: contact.email ? contact.email[0] : ''
        }));

        setFormData(prev => ({
          ...prev,
          contacts: formattedContacts
        }));
      } else {
        // Fallback for browsers that don't support the Contacts API
        alert('Your browser does not support direct contact access. Please upload a contacts file instead.');
      }
    } catch (error) {
      console.error('Error accessing contacts:', error);
      alert('Unable to access contacts. Please try uploading a file instead.');
    }
  };

  const handleContactsUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        contacts: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Your Referral Code
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <input
              type="text"
              readOnly
              value={formData.referralCode}
              className="flex-1 min-w-0 block w-full rounded-md border-gray-300 focus:border-primary focus:ring-primary"
              placeholder="Your personalized referral code"
            />
            <button
              type="button"
              onClick={() => generateReferralCode(JSON.parse(localStorage.getItem('referralPersonalInfo') || '{}'))}
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Regenerate
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Customize Your Referral Message
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="Hey! I just found this amazing insurance platform. Use my code for exclusive discounts!"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Share with Your Contacts
          </label>
          <div className="grid grid-cols-1 gap-4">
            <button
              type="button"
              onClick={handleContactsAccess}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Access Phone Contacts
            </button>

            <div className="relative">
              <div className="flex items-center justify-center px-6 py-4 border-2 border-gray-300 border-dashed rounded-md hover:border-primary transition-colors cursor-pointer">
                <input
                  type="file"
                  onChange={handleContactsUpload}
                  accept=".csv,.vcf"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <p className="mt-1 text-sm text-gray-600">
                    Upload contacts file
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    CSV or VCF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {formData.contacts && (
            <div className="mt-4 p-4 bg-gray-50 rounded-md">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Selected Contacts</h4>
              {Array.isArray(formData.contacts) ? (
                <p className="text-sm text-gray-600">
                  {formData.contacts.length} contacts selected
                </p>
              ) : (
                <p className="text-sm text-gray-600">
                  File selected: {formData.contacts.name}
                </p>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
            className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
          />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
            I accept the terms and conditions and confirm that all provided information is accurate
          </label>
        </div>
      </div>

      <div className="flex justify-between">
        <motion.button
          type="button"
          onClick={onBack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Back
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Submit Application
        </motion.button>
      </div>
    </form>
  );
}

export default ReferralSetup;