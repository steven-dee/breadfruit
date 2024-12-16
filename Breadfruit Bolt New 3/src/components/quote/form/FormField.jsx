import { motion } from 'framer-motion';
import CurrencyInput from '../inputs/CurrencyInput';

function FormField({ field, value, onChange }) {
  if (field.type === 'currency') {
    return (
      <div>
        <label className="block text-white text-center mb-2">
          {field.label}
        </label>
        <CurrencyInput
          value={value}
          onChange={(val) => onChange(field.id, val)}
          placeholder={field.placeholder}
        />
      </div>
    );
  }

  return (
    <div>
      <label className="block text-white text-center mb-2">
        {field.label}
      </label>
      <input
        type={field.type}
        value={value || ''}
        onChange={(e) => onChange(field.id, e.target.value)}
        placeholder={field.placeholder}
        required={field.required}
        className="w-full p-4 bg-[#1e2937] text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-center"
      />
    </div>
  );
}

export default FormField;