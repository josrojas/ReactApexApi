import { useContext } from 'react';
import { MapContext } from './MapContext';

export const useMapData = () => {
  const context = useContext(MapContext);

  if (context === undefined) {
    throw new Error('useMapData must be used within a MapProvider');
  }

  return context;
};
