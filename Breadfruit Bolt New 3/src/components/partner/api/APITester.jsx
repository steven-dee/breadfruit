import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

function APITester() {
  const [endpoint, setEndpoint] = useState('getQuote');
  const [requestBody, setRequestBody] = useState('{\n  \n}');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const endpoints = [
    { id: 'getQuote', name: 'Get Quote', method: 'POST' },
    { id: 'createPolicy', name: 'Create Policy', method: 'POST' },
    { id: 'updatePolicy', name: 'Update Policy', method: 'PUT' },
    { id: 'getPolicy', name: 'Get Policy', method: 'GET' },
    { id: 'cancelPolicy', name: 'Cancel Policy', method: 'POST' }
  ];

  const handleTest = async () => {
    setLoading(true);
    try {
      // In a real app, this would make an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setResponse({
        status: 200,
        data: {
          quote: {
            id: 'Q123',
            premium: 1200,
            coverage: 'Comprehensive',
            term: '12 months'
          }
        }
      });
      toast.success('API test successful!');
    } catch (error) {
      setResponse({
        status: 500,
        error: 'Internal Server Error'
      });
      toast.error('API test failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">API Tester</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Select Endpoint</label>
            <select
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              {endpoints.map((ep) => (
                <option key={ep.id} value={ep.id}>
                  {ep.name} ({ep.method})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Request Body</label>
            <textarea
              value={requestBody}
              onChange={(e) => setRequestBody(e.target.value)}
              rows={8}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary font-mono text-sm"
            />
          </div>

          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleTest}
              disabled={loading}
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600 disabled:opacity-50"
            >
              {loading ? 'Testing...' : 'Test Endpoint'}
            </motion.button>
          </div>
        </div>
      </div>

      {response && (
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Response</h3>
          <div className="bg-gray-50 p-4 rounded-md">
            <pre className="text-sm text-gray-700 whitespace-pre-wrap">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default APITester;