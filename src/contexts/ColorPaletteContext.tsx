import React, { createContext, useContext, useState, useEffect } from 'react';

const colorPalettes = {
  default: {
    primary: '#0F9547',
    secondary: '#0D8948', 
    accent: '#0C7D49',
    dark: '#0A704A',
    darker: '#08644B',
    darkest: '#07584D',
    midnight: '#054C4E',
    blue: '#033F4F',
    prussian: '#023350',
    oxford: '#002751'
  },
  ocean: {
    primary: '#006A6B',
    secondary: '#0081A7',
    accent: '#00AFB9',
    dark: '#0081A7',
    darker: '#006A6B',
    darkest: '#005F5F',
    midnight: '#003D3D',
    blue: '#002E2E',
    prussian: '#001F1F',
    oxford: '#001010'
  },
  sunset: {
    primary: '#FF6B35',
    secondary: '#F7931E',
    accent: '#FFD23F',
    dark: '#F7931E',
    darker: '#FF6B35',
    darkest: '#E55A2B',
    midnight: '#CC4125',
    blue: '#B8371F',
    prussian: '#A42E19',
    oxford: '#902513'
  },
  forest: {
    primary: '#2D5016',
    secondary: '#3E6B1C',
    accent: '#4F8622',
    dark: '#3E6B1C',
    darker: '#2D5016',
    darkest: '#234012',
    midnight: '#1A300E',
    blue: '#11200A',
    prussian: '#081006',
    oxford: '#040802'
  }
};

interface ColorPaletteContextType {
  currentPalette: string;
  setPalette: (palette: string) => void;
  colors: typeof colorPalettes.default;
  availablePalettes: string[];
}

const ColorPaletteContext = createContext<ColorPaletteContextType | undefined>(undefined);

export const ColorPaletteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPalette, setCurrentPalette] = useState('default');

  const setPalette = (palette: string) => {
    setCurrentPalette(palette);
    // Update CSS custom properties
    const colors = colorPalettes[palette as keyof typeof colorPalettes];
    const root = document.documentElement;
    
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--dark-color', colors.dark);
    root.style.setProperty('--darker-color', colors.darker);
    root.style.setProperty('--darkest-color', colors.darkest);
    root.style.setProperty('--midnight-color', colors.midnight);
    root.style.setProperty('--blue-color', colors.blue);
    root.style.setProperty('--prussian-color', colors.prussian);
    root.style.setProperty('--oxford-color', colors.oxford);
  };

  useEffect(() => {
    setPalette(currentPalette);
  }, [currentPalette]);

  return (
    <ColorPaletteContext.Provider value={{
      currentPalette,
      setPalette,
      colors: colorPalettes[currentPalette as keyof typeof colorPalettes],
      availablePalettes: Object.keys(colorPalettes)
    }}>
      {children}
    </ColorPaletteContext.Provider>
  );
};

export const useColorPalette = () => {
  const context = useContext(ColorPaletteContext);
  if (!context) {
    throw new Error('useColorPalette must be used within a ColorPaletteProvider');
  }
  return context;
};
