import { motion } from 'framer-motion';

function MakeButton({ make, selected, onClick, layout = 'mobile' }) {
  const baseClasses = `
    relative flex items-center transition-all duration-200
    ${selected 
      ? 'bg-primary text-white shadow-lg shadow-primary/30' 
      : 'bg-[#1e2937] text-white hover:bg-primary'
    }
  `;

  const mobileClasses = "w-full p-4 rounded-xl";
  const desktopClasses = "p-6 rounded-lg aspect-[4/2]";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${layout === 'mobile' ? mobileClasses : desktopClasses}`}
    >
      <img 
        src={make.logo} 
        alt={make.name}
        className="h-6 w-auto mr-3"
      />
      <span className="font-medium">{make.name}</span>
    </motion.button>
  );
}

export default MakeButton;