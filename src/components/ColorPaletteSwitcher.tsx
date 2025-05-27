import React from 'react';
import { useColorPalette } from '../contexts/ColorPaletteContext.tsx';
import { motion } from 'framer-motion';

export const ColorPaletteSwitcher: React.FC = () => {
  const { currentPalette, setPalette, availablePalettes } = useColorPalette();

  const paletteNames = {
    default: 'Green Ocean',
    ocean: 'Deep Ocean', 
    sunset: 'Sunset Glow',
    forest: 'Forest Deep'
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div 
        className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <h3 className="text-sm font-semibold mb-2">Theme</h3>
        <div className="flex gap-2">
          {availablePalettes.map((palette) => (
            <motion.button
              key={palette}
              onClick={() => setPalette(palette)}
              className={`w-8 h-8 rounded-full border-2 ${
                currentPalette === palette ? 'border-gray-800' : 'border-gray-300'
              }`}
              style={{
                backgroundColor: palette === 'default' ? '#0F9547' :
                               palette === 'ocean' ? '#006A6B' :
                               palette === 'sunset' ? '#FF6B35' : '#2D5016'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              title={paletteNames[palette as keyof typeof paletteNames]}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};