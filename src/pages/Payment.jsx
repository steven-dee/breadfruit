import { useLocation } from 'react-router-dom';
import PaymentForm from '../components/payment/PaymentForm';

function Payment() {
  const location = useLocation();
  const { quote, provider, selectedAddOns, paymentType } = location.state || {};

  return (
    <PaymentForm
      quote={quote}
      provider={provider}
      selectedAddOns={selectedAddOns}
      paymentType={paymentType}
    />
  );
}

export default Payment;