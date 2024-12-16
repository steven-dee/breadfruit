import { format } from 'date-fns';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

function ReferralHistory({ referrals }) {
  const [followUpMessage, setFollowUpMessage] = useState('');
  const [selectedReferral, setSelectedReferral] = useState(null);

  const handleSendFollowUp = (referral) => {
    // In a real app, this would make an API call
    console.log(`Sending follow-up message to ${referral.name}: ${followUpMessage}`);
    toast.success('Follow-up message sent successfully!');
    setFollowUpMessage('');
    setSelectedReferral(null);
  };

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 border-b">
        <h3 className="text-lg font-medium text-gray-900">Recent Referrals</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Commission
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {referrals.map((referral) => (
              <tr key={`referral-${referral.id}`}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {referral.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {format(new Date(referral.date), 'MMM d, yyyy')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {referral.product}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${referral.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {referral.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${referral.commission}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {referral.status === 'Pending' && (
                    <button
                      onClick={() => setSelectedReferral(referral)}
                      className="text-primary hover:text-primary-600"
                    >
                      Send Follow-up
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {selectedReferral && (
              <tr key={`follow-up-${selectedReferral.id}`}>
                <td colSpan="6" className="px-6 py-4 bg-gray-50">
                  <div className="flex space-x-4">
                    <textarea
                      value={followUpMessage}
                      onChange={(e) => setFollowUpMessage(e.target.value)}
                      placeholder="Write your follow-up message..."
                      className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                      rows="3"
                    />
                    <div className="flex flex-col space-y-2">
                      <button
                        onClick={() => handleSendFollowUp(selectedReferral)}
                        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600"
                      >
                        Send
                      </button>
                      <button
                        onClick={() => setSelectedReferral(null)}
                        className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReferralHistory;