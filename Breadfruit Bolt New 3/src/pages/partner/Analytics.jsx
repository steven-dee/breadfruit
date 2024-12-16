import { useState } from 'react';
import { mockAnalytics } from '../../data/mockAnalytics';
import AnalyticsChart from '../../components/partner/AnalyticsChart';
import AnalyticsSummary from '../../components/partner/AnalyticsSummary';

function Analytics() {
  const [timeframe, setTimeframe] = useState('month');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">
              Track your performance metrics and insights
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>
        </div>
      </div>

      <AnalyticsSummary data={mockAnalytics.summary} />
      
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Policy Distribution</h3>
          <AnalyticsChart
            data={mockAnalytics.policyDistribution}
            type="pie"
          />
        </div>
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Revenue Trend</h3>
          <AnalyticsChart
            data={mockAnalytics.revenueTrend}
            type="line"
          />
        </div>
      </div>
    </div>
  );
}

export default Analytics;