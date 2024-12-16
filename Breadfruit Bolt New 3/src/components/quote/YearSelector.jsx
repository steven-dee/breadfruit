import { motion } from 'framer-motion';
import QuestionHeader from './QuestionHeader';
import YearButton from './YearButton';

function YearSelector({ question, selectedYear, onSelect, vehicleIndex, totalVehicles }) {
  const currentYear = new Date().getFullYear() + 1;
  const years = Array.from({ length: 40 }, (_, i) => currentYear - i);
  
  // Group years into rows of 7 to match the design
  const yearRows = [];
  for (let i = 0; i < years.length; i += 7) {
    yearRows.push(years.slice(i, i + 7));
  }

  return (
    <>
      <QuestionHeader vehicleIndex={vehicleIndex} totalVehicles={totalVehicles}>
        {question}
      </QuestionHeader>
      
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
              />
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default YearSelector;