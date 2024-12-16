import { useState } from 'react';
import { motion } from 'framer-motion';
import MakeButton from './MakeButton';
import OtherMakesDropdown from './OtherMakesDropdown';
import { popularMakes, otherMakes } from '../../../data/vehicleData';

function MakeSelector({ selectedMake, onSelect, vehicleIndex, totalVehicles }) {
  const [showOtherMakes, setShowOtherMakes] = useState(false);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        {totalVehicles > 1 && (
          <div className="text-sm text-gray-400">2022</div>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          {totalVehicles > 1 ? `${getVehicleLabel(vehicleIndex)} Vehicle Make` : 'Vehicle Make'}
        </motion.h2>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden space-y-2">
        {popularMakes.map((make) => (
          <MakeButton
            key={make.id}
            make={make}
            selected={selectedMake === make.id}
            onClick={() => onSelect(make.id)}
            layout="mobile"
          />
        ))}
        <OtherMakesDropdown
          makes={otherMakes}
          onSelect={onSelect}
          layout="mobile"
        />
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
          {popularMakes.map((make) => (
            <MakeButton
              key={make.id}
              make={make}
              selected={selectedMake === make.id}
              onClick={() => onSelect(make.id)}
              layout="desktop"
            />
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold text-white text-center mb-4">
            Browse Other Makes
          </h3>
          <OtherMakesDropdown
            makes={otherMakes}
            onSelect={onSelect}
            layout="desktop"
          />
        </div>
      </div>
    </div>
  );
}

function getVehicleLabel(index) {
  const labels = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  return labels[index] || 'Additional';
}

export default MakeSelector;