import { motion } from 'framer-motion';
import YearButton from './YearButton';

function YearSelector({ question, selectedYear, onSelect, vehicleIndex, totalVehicles }) {
  const currentYear = new Date().getFullYear() + 1;
  const years = Array.from({ length: 40 }, (_, i) => currentYear - i);
  
  // Group years into rows of 7 for desktop layout
  const yearRows = [];
  for (let i = 0; i < years.length; i += 7) {
    yearRows.push(years.slice(i, i + 7));
  }

  const questionText = totalVehicles > 1 
    ? `${getVehicleLabel(vehicleIndex)} Vehicle Year` 
    : 'Vehicle Year';

  return (
    <div className="space-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl md:text-3xl font-bold text-white text-center"
      >
        {questionText}
      </motion.h2>
      
      {/* Mobile Layout */}
      <div className="sm:hidden space-y-2 max-w-sm mx-auto">
        {years.map(year => (
          <YearButton
            key={year}
            year={year}
            selected={selectedYear === year.toString()}
            onClick={() => onSelect(year.toString())}
            layout="mobile"
          />
        ))}
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:block">
        <div className="grid gap-y-2 max-w-4xl mx-auto px-4">
          {yearRows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: rowIndex * 0.05 }}
              className="grid grid-cols-7 gap-x-2"
            >
              {row.map(year => (
                <YearButton
                  key={year}
                  year={year}
                  selected={selectedYear === year.toString()}
                  onClick={() => onSelect(year.toString())}
                  layout="desktop"
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getVehicleLabel(index) {
  const labels = ['First', 'Second', 'Third', 'Fourth', 'Fifth'];
  return labels[index] || 'Additional';
}

export default YearSelector;