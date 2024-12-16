import { motion } from 'framer-motion';

function LogoSlider({ partners }) {
  return (
    <div className="overflow-hidden whitespace-nowrap relative h-24">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
      <motion.div
        className="inline-flex items-center h-full"
        animate={{
          x: ["0%", "-50%"]
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {/* First set of logos */}
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="mx-12 inline-flex items-center justify-center bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="h-12 w-auto object-contain"
              src={partner.logo}
              alt={partner.name}
              style={{ maxWidth: partner.width }}
              loading="eager"
            />
          </div>
        ))}
        
        {/* Duplicate set of logos for seamless loop */}
        {partners.map((partner) => (
          <div
            key={`${partner.name}-duplicate`}
            className="mx-12 inline-flex items-center justify-center bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="h-12 w-auto object-contain"
              src={partner.logo}
              alt={partner.name}
              style={{ maxWidth: partner.width }}
              loading="eager"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default LogoSlider;