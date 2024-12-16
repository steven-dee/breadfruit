function AnalyticsSummary({ data }) {
  const stats = [
    { name: 'Total Policies', value: data.totalPolicies },
    { name: 'Active Applications', value: data.activeApplications },
    { name: 'Monthly Revenue', value: `$${data.monthlyRevenue.toLocaleString()}` },
    { name: 'Conversion Rate', value: `${data.conversionRate}%` },
    { name: 'Average Premium', value: `$${data.averagePremium}` },
    { name: 'Customer Retention', value: `${data.customerRetention}%` }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.name} className="bg-white overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <dt className="text-sm font-medium text-gray-500 truncate">
              {stat.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stat.value}
            </dd>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnalyticsSummary;