import { useState } from 'react';
import { motion } from 'framer-motion';

function SocialProfiles({ onNext, onBack, data = {} }) {
  const [formData, setFormData] = useState({
    instagram: data.instagram || '',
    facebook: data.facebook || '',
    twitter: data.twitter || '',
    tiktok: data.tiktok || '',
    linkedin: data.linkedin || '',
    website: data.website || '',
    followers: data.followers || ''
  });

  const followerRanges = [
    '0-1,000',
    '1,000-5,000',
    '5,000-10,000',
    '10,000-50,000',
    '50,000-100,000',
    '100,000+'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Instagram Profile
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              instagram.com/
            </span>
            <input
              type="text"
              value={formData.instagram}
              onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
              className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-primary focus:ring-primary"
              placeholder="username"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            TikTok Profile
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              tiktok.com/@
            </span>
            <input
              type="text"
              value={formData.tiktok}
              onChange={(e) => setFormData({ ...formData, tiktok: e.target.value })}
              className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-primary focus:ring-primary"
              placeholder="username"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Facebook Profile
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              facebook.com/
            </span>
            <input
              type="text"
              value={formData.facebook}
              onChange={(e) => setFormData({ ...formData, facebook: e.target.value })}
              className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-primary focus:ring-primary"
              placeholder="username"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Twitter Profile
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              twitter.com/
            </span>
            <input
              type="text"
              value={formData.twitter}
              onChange={(e) => setFormData({ ...formData, twitter: e.target.value })}
              className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-primary focus:ring-primary"
              placeholder="username"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            LinkedIn Profile
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              linkedin.com/in/
            </span>
            <input
              type="text"
              value={formData.linkedin}
              onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
              className="flex-1 min-w-0 block w-full rounded-none rounded-r-md border-gray-300 focus:border-primary focus:ring-primary"
              placeholder="username"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Website (Optional)
          </label>
          <input
            type="url"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total Social Media Followers
          </label>
          <select
            value={formData.followers}
            onChange={(e) => setFormData({ ...formData, followers: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Select range</option>
            {followerRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-between">
        <motion.button
          type="button"
          onClick={onBack}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Back
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Next Step
        </motion.button>
      </div>
    </form>
  );
}

export default SocialProfiles;