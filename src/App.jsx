import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Layout from './components/Layout';
import PartnerLayout from './components/partner/PartnerLayout';
import CustomerLayout from './components/customer/CustomerLayout';
import ReferralLayout from './components/referral/ReferralLayout';
import Home from './pages/Home';
import GetQuotes from './pages/GetQuotes';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import PaymentConfirmation from './pages/PaymentConfirmation';
import PartnerLogin from './pages/auth/PartnerLogin';
import ClientLogin from './pages/auth/ClientLogin';
import LoginRouter from './pages/LoginRouter';
import CustomerDashboard from './pages/customer/Dashboard';
import PartnerDashboard from './pages/partner/Dashboard';
import PartnerApplications from './pages/partner/Applications';
import PartnerPolicies from './pages/partner/Policies';
import PartnerQuotes from './pages/partner/Quotes';
import PartnerAnalytics from './pages/partner/Analytics';
import PriceManagementPage from './pages/partner/PriceManagement';
import APIIntegration from './pages/partner/APIIntegration';
import Customers from './pages/partner/Customers';
import InsurancePartners from './pages/InsurancePartners';
import ReferralProgram from './pages/ReferralProgram';
import Register from './pages/partner/Register';
import Apply from './pages/referral/Apply';
import ReferralDashboard from './pages/referral/Dashboard';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="get-quotes" element={<GetQuotes />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
          <Route path="payment-confirmation" element={<PaymentConfirmation />} />
          <Route path="insurance-partners" element={<InsurancePartners />} />
          <Route path="referral-program" element={<ReferralProgram />} />
          <Route path="referral/apply" element={<Apply />} />
        </Route>
        
        <Route path="/login" element={<LoginRouter />} />
        <Route path="/client/login" element={<ClientLogin />} />
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/register" element={<Register />} />
        
        <Route path="/customer" element={<CustomerLayout />}>
          <Route path="dashboard" element={<CustomerDashboard />} />
        </Route>

        <Route path="/partner" element={<PartnerLayout />}>
          <Route path="dashboard" element={<PartnerDashboard />} />
          <Route path="quotes" element={<PartnerQuotes />} />
          <Route path="applications" element={<PartnerApplications />} />
          <Route path="policies" element={<PartnerPolicies />} />
          <Route path="customers" element={<Customers />} />
          <Route path="price-management" element={<PriceManagementPage />} />
          <Route path="api-integration" element={<APIIntegration />} />
          <Route path="analytics" element={<PartnerAnalytics />} />
        </Route>

        <Route path="/referral" element={<ReferralLayout />}>
          <Route path="dashboard" element={<ReferralDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;