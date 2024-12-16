import { useState } from 'react';
import ReferralStats from '../../components/referral/dashboard/ReferralStats';
import ReferralHistory from '../../components/referral/dashboard/ReferralHistory';
import EarningsChart from '../../components/referral/dashboard/EarningsChart';
import ReferralCode from '../../components/referral/dashboard/ReferralCode';
import BankAccountManager from '../../components/referral/dashboard/BankAccountManager';

function Dashboard() {
  const [timeframe, setTimeframe] = useState('month');

  const stats = {
    totalReferrals: 24,
    activeReferrals: 18,
    totalEarnings: 2450,
    conversionRate: 75,
    pendingPayouts: 350,
    lifetimeEarnings: 3800
  };

  const referrals = [
    {
      id: 1,
      name: 'John Smith',
      date: '2023-11-15',
      status: 'Completed',
      commission: 150,
      product: 'Auto Insurance'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      date: '2023-11-14',
      status: 'Pending',
      commission: 200,
      product: 'Home Insurance'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Referral Dashboard</h1>
        <select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
        >
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
          <option value="all">All Time</option>
        </select>
      </div>

      <ReferralStats stats={stats} />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Your Referral Code</h2>
          <ReferralCode code="JOHN1234" />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Earnings Overview</h2>
          <EarningsChart timeframe={timeframe} />
        </div>
      </div>

      <div className="mt-8">
        <ReferralHistory referrals={referrals} />
      </div>

      <div className="mt-8">
        <BankAccountManager />
      </div>
    </div>
  );
}

export default Dashboard;