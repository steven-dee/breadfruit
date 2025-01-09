import { createContext, useContext, useState } from 'react';

const VehicleContext = createContext();

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState([]);
  const [currentVehicleIndex, setCurrentVehicleIndex] = useState(0);

  const addVehicle = (vehicleData) => {
    setVehicles(prev => [...prev, vehicleData]);
  };

  const updateCurrentVehicle = (data) => {
    setVehicles(prev => {
      const updated = [...prev];
      updated[currentVehicleIndex] = {
        ...updated[currentVehicleIndex],
        ...data
      };
      return updated;
    });
  };

  const nextVehicle = () => {
    setCurrentVehicleIndex(prev => prev + 1);
  };

  return (
    <VehicleContext.Provider value={{
      vehicles,
      currentVehicleIndex,
      addVehicle,
      updateCurrentVehicle,
      nextVehicle
    }}>
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicles() {
  return useContext(VehicleContext);
}