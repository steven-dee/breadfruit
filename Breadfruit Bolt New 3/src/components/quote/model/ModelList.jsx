import { motion } from 'framer-motion';
import { vehicleModels } from '../../../data/vehicleData/models';

function ModelList({ selectedMake, onSelect, layout = 'desktop' }) {
  const models = vehicleModels[selectedMake.toLowerCase()] || [];

  const baseClasses = `
    w-full text-left transition-all duration-200
    bg-[#1e2937] text-white hover:bg-[#2d3745]
  `;

  const mobileClasses = "p-4 rounded-xl mb-2";
  const desktopClasses = "p-6 rounded-lg";

  return (
    <div className={layout === 'mobile' ? 'space-y-2' : 'grid grid-cols-2 gap-4'}>
      {models.map((model) => (
        <motion.button
          key={model}
          onClick={() => onSelect(model)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseClasses} ${layout === 'mobile' ? mobileClasses : desktopClasses}`}
        >
          {model}
        </motion.button>
      ))}
      {models.length === 0 && (
        <div className="col-span-2 text-center text-gray-400 py-8">
          No models available for this make
        </div>
      )}
    </div>
  );
}

export default ModelList;