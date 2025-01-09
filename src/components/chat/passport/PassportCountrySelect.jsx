import { motion } from 'framer-motion';

function PassportCountrySelect({ value, onChange }) {
  const countries = [
    'Antigua and Barbuda',
    'Barbados',
    'Dominica',
    'Grenada',
    'Jamaica',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Trinidad and Tobago',
    'United Kingdom',
    'United States',
    'Canada',
    'Other'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-md mx-auto"
    >
      <select
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-6 py-4 bg-white border border-gray-200 text-gray-900 rounded-xl appearance-none focus:outline-none text-lg transition-colors hover:border-gray-300"
      >
        <option value="" disabled>Select country</option>
        {countries.map(country => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
    </motion.div>
  );
}

export default PassportCountrySelect;