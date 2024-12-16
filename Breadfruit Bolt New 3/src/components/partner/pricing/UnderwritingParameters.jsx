import { useState } from 'react';
import { motion } from 'framer-motion';

function UnderwritingParameters({ onSave }) {
  const [parameters, setParameters] = useState({
    driverAge: {
      min: 18,
      max: 75,
      riskFactors: {
        '18-25': 1.5,
        '26-35': 1.2,
        '36-50': 1.0,
        '51-65': 1.1,
        '66+': 1.3
      }
    },
    vehicleAge: {
      max: 15,
      riskFactors: {
        '0-3': 1.0,
        '4-7': 1.1,
        '8-12': 1.3,
        '13+': 1.5
      }
    },
    drivingExperience: {
      riskFactors: {
        '0-2': 1.6,
        '3-5': 1.3,
        '6-10': 1.1,
        '10+': 1.0
      }
    },
    claimsHistory: {
      lookbackPeriod: 3,
      maxClaims: 3,
      riskFactors: {
        0: 1.0,
        1: 1.2,
        2: 1.5,
        '3+': 2.0
      }
    },
    vehicleModifications: {
      allowed: true,
      riskIncrease: 1.3
    },
    location: {
      zones: {
        urban: 1.2,
        suburban: 1.0,
        rural: 0.9
      }
    },
    usage: {
      types: {
        personal: 1.0,
        commute: 1.1,
        business: 1.3,
        rideshare: 1.5
      }
    },
    safetyFeatures: {
      discounts: {
        antiTheft: 0.05,
        dashcam: 0.03,
        abs: 0.02,
        airbags: 0.03,
        parkingSensors: 0.02
      }
    }
  });

  const handleSave = () => {
    onSave(parameters);
  };

  return (
    <div className="space-y-8">
      {/* Driver Age Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Driver Age Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Minimum Age</label>
            <input
              type="number"
              value={parameters.driverAge.min}
              onChange={(e) => setParameters({
                ...parameters,
                driverAge: { ...parameters.driverAge, min: parseInt(e.target.value) }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Maximum Age</label>
            <input
              type="number"
              value={parameters.driverAge.max}
              onChange={(e) => setParameters({
                ...parameters,
                driverAge: { ...parameters.driverAge, max: parseInt(e.target.value) }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Age Group Risk Factors</h4>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Object.entries(parameters.driverAge.riskFactors).map(([range, factor]) => (
              <div key={range}>
                <label className="block text-xs font-medium text-gray-600">{range}</label>
                <input
                  type="number"
                  step="0.1"
                  value={factor}
                  onChange={(e) => setParameters({
                    ...parameters,
                    driverAge: {
                      ...parameters.driverAge,
                      riskFactors: {
                        ...parameters.driverAge.riskFactors,
                        [range]: parseFloat(e.target.value)
                      }
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Parameters */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Vehicle Parameters</h3>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Maximum Vehicle Age</label>
            <input
              type="number"
              value={parameters.vehicleAge.max}
              onChange={(e) => setParameters({
                ...parameters,
                vehicleAge: { ...parameters.vehicleAge, max: parseInt(e.target.value) }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
            />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-2">Vehicle Age Risk Factors</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(parameters.vehicleAge.riskFactors).map(([range, factor]) => (
                <div key={range}>
                  <label className="block text-xs font-medium text-gray-600">{range} years</label>
                  <input
                    type="number"
                    step="0.1"
                    value={factor}
                    onChange={(e) => setParameters({
                      ...parameters,
                      vehicleAge: {
                        ...parameters.vehicleAge,
                        riskFactors: {
                          ...parameters.vehicleAge.riskFactors,
                          [range]: parseFloat(e.target.value)
                        }
                      }
                    })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Safety Features & Discounts */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Safety Features & Discounts</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(parameters.safetyFeatures.discounts).map(([feature, discount]) => (
            <div key={feature}>
              <label className="block text-sm font-medium text-gray-700">
                {feature.charAt(0).toUpperCase() + feature.slice(1)} Discount
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type="number"
                  step="0.01"
                  value={discount}
                  onChange={(e) => setParameters({
                    ...parameters,
                    safetyFeatures: {
                      ...parameters.safetyFeatures,
                      discounts: {
                        ...parameters.safetyFeatures.discounts,
                        [feature]: parseFloat(e.target.value)
                      }
                    }
                  })}
                  className="block w-full pr-12 rounded-md border-gray-300 focus:border-primary focus:ring-primary"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-600"
        >
          Save Parameters
        </motion.button>
      </div>
    </div>
  );
}

export default UnderwritingParameters;