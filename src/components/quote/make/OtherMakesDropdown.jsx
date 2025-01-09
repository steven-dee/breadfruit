import { useState } from 'react';
import { motion } from 'framer-motion';

function OtherMakesDropdown({ makes, onSelect, layout = 'mobile' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMakes = makes.filter(make => 
    make.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const baseClasses = "w-full bg-[#1e2937] text-white hover:bg-[#2d3745] transition-colors";
  const mobileClasses = "p-4 rounded-xl text-left";
  const desktopClasses = "p-6 rounded-lg text-center";

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseClasses} ${layout === 'mobile' ? mobileClasses : desktopClasses}`}
      >
        Select other make
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-50 w-full mt-2 bg-[#1e2937] rounded-lg shadow-xl"
        >
          <div className="p-4">
            <input
              type="text"
              placeholder="Search makes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 bg-[#2d3745] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredMakes.map((make) => (
              <button
                key={make}
                onClick={() => {
                  onSelect(make.toLowerCase());
                  setIsOpen(false);
                }}
                className="w-full p-4 text-left text-white hover:bg-[#2d3745] transition-colors"
              >
                {make}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default OtherMakesDropdown;