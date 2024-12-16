import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../stores/auth';
import ProgressBar from '../components/payment/ProgressBar';
import PolicySummary from '../components/payment/PolicySummary';

function PaymentConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const { quote, provider, selectedAddOns, paymentType } = location.state || {};

  useEffect(() => {
    if (!quote || !provider) {
      navigate('/get-quotes');
      return;
    }

    // Simulate verification steps
    const timer1 = setTimeout(() => setCurrentStep(2), 3000);
    const timer2 = setTimeout(() => setCurrentStep(3), 6000);

    // Auto-login the user
    const autoLogin = async () => {
      try {
        await login({
          email: 'client@example.com',
          password: 'password',
          role: 'customer'
        });
      } catch (error) {
        console.error('Auto-login failed:', error);
      }
    };
    autoLogin();

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [quote, provider, navigate, login]);

  const handleDashboardClick = () => {
    navigate('/customer/dashboard');
  };

  if (!quote || !provider) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Payment Confirmation</h1>

      <div className="mb-12">
        <ProgressBar currentStep={currentStep} />
      </div>

      <PolicySummary
        quote={quote}
        provider={provider}
        selectedAddOns={selectedAddOns}
        paymentType={paymentType}
      />

      <div className="mt-8 text-center">
        <button
          onClick={handleDashboardClick}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}

export default PaymentConfirmation;