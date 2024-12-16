import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'react-hot-toast';

function APIConfiguration() {
  const [config, setConfig] = useState({
    apiEndpoint: '',
    apiKey: '',
    secretKey: '',
    environment: 'sandbox',
    webhookUrl: '',
    retryPolicy: {
      maxRetries: 3,
      retryInterval: 5
    },
    timeout: 30,
    ipWhitelist: [],
    endpoints: {
      getQuote: '/api/v1/quotes',
      createPolicy: '/api/v1/policies',
      updatePolicy: '/api/v1/policies/{id}',
      getPolicy: '/api/v1/policies/{id}',
      cancelPolicy: '/api/v1/policies/{id}/cancel'
    }
  });

  const [newIp, setNewIp] = useState('');

  const handleSave = () => {
    // In a real app, this would make an API call
    console.log('Saving API configuration:', config);
    toast.success('API configuration saved successfully!');
  };

  const handleTestConnection = async () => {
    try {
      // In a real app, this would make an actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('API connection test successful!');
    } catch (error) {
      toast.error('API connection test failed');
    }
  };

  const addIpAddress = () => {
    if (newIp && !config.ipWhitelist.includes(newIp)) {
      setConfig({
        ...config,
        ipWhitelist: [...config.ipWhitelist, newIp]
      });
      setNewIp('');
    }
  };

  const removeIpAddress = (ip) => {
    setConfig({
      ...config,
      ipWhitelist: config.ipWhitelist.filter(item => item !== ip)
    });
  };

  return (
    <div className="space-y-8">
      {/* Basic Configuration */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">API Configuration</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">API Endpoint</label>
            <input
              type="url"
              value={config.apiEndpoint}
              onChange={(e) => setConfig({ ...config, apiEndpoint: e.target.value })}
              placeholder="https://api.example.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">API Key</label>
              <input
                type="password"
                value={config.apiKey}
                onChange={(e) => setConfig({ ...config, apiKey: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Secret Key</label>
              <input
                type="password"
                value={config.secretKey}
                onChange={(e) => setConfig({ ...config, secretKey: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Environment</label>
            <select
              value={config.environment}
              onChange={(e) => setConfig({ ...config, environment: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            >
              <option value="sandbox">Sandbox</option>
              <option value="production">Production</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Webhook URL</label>
            <input
              type="url"
              value={config.webhookUrl}
              onChange={(e) => setConfig({ ...config, webhookUrl: e.target.value })}
              placeholder="https://your-domain.com/webhooks/insurance"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Endpoint Configuration */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">API Endpoints</h3>
        <div className="space-y-4">
          {Object.entries(config.endpoints).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700">
                {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => setConfig({
                  ...config,
                  endpoints: {
                    ...config.endpoints,
                    [key]: e.target.value
                  }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Security Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">IP Whitelist</label>
            <div className="mt-1 flex space-x-2">
              <input
                type="text"
                value={newIp}
                onChange={(e) => setNewIp(e.target.value)}
                placeholder="Enter IP address"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
              <button
                onClick={addIpAddress}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600"
              >
                Add IP
              </button>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {config.ipWhitelist.map((ip) => (
                <span
                  key={ip}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {ip}
                  <button
                    onClick={() => removeIpAddress(ip)}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Max Retries</label>
              <input
                type="number"
                value={config.retryPolicy.maxRetries}
                onChange={(e) => setConfig({
                  ...config,
                  retryPolicy: {
                    ...config.retryPolicy,
                    maxRetries: parseInt(e.target.value)
                  }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Retry Interval (seconds)</label>
              <input
                type="number"
                value={config.retryPolicy.retryInterval}
                onChange={(e) => setConfig({
                  ...config,
                  retryPolicy: {
                    ...config.retryPolicy,
                    retryInterval: parseInt(e.target.value)
                  }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Request Timeout (seconds)</label>
            <input
              type="number"
              value={config.timeout}
              onChange={(e) => setConfig({ ...config, timeout: parseInt(e.target.value) })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleTestConnection}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Test Connection
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600"
        >
          Save Configuration
        </motion.button>
      </div>
    </div>
  );
}

export default APIConfiguration;