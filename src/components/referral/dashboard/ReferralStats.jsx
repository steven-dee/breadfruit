import { motion } from 'framer-motion';

function ReferralStats({ stats }) {
  const statItems = [
    { name: 'Total Referrals', value: stats.totalReferrals },
    { name: 'Active Referrals', value: stats.activeReferrals },
    { name: 'Total Earnings', value: `$${stats.totalEarnings}` },
    { name: 'Conversion Rate', value: `${stats.conversionRate}%` },
    { name: 'Pending Payouts', value: `$${stats.pendingPayouts}` },
    { name: 'Lifetime Earnings', value: `$${stats.lifetimeEarnings}` }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {statItems.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white overflow-hidden shadow rounded-lg"
        >
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {stat.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stat.value}
            </dd>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ReferralStats;