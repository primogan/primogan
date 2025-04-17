import React, { useState } from 'react';
import { Contrast, ZoomIn, ZoomOut, Sun, Moon, Accessibility } from 'lucide-react';

interface AccessibilityToolbarProps {
  onFontSizeChange: (size: number) => void;
  onContrastChange: (isHighContrast: boolean) => void;
  onThemeChange: (isDark: boolean) => void;
}

const AccessibilityToolbar: React.FC<AccessibilityToolbarProps> = ({
  onFontSizeChange,
  onContrastChange,
  onThemeChange,
}) => {
  const [fontSize, setFontSize] = useState(1);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleFontSizeIncrease = () => {
    if (fontSize < 2) {
      const newSize = fontSize + 0.1;
      setFontSize(newSize);
      onFontSizeChange(newSize);
    }
  };

  const handleFontSizeDecrease = () => {
    if (fontSize > 0.8) {
      const newSize = fontSize - 0.1;
      setFontSize(newSize);
      onFontSizeChange(newSize);
    }
  };

  const handleContrastToggle = () => {
    const newContrast = !isHighContrast;
    setIsHighContrast(newContrast);
    onContrastChange(newContrast);
  };

  const handleThemeToggle = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    onThemeChange(newTheme);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-600 text-white p-3 rounded-full shadow-lg hover:bg-emerald-700 transition-colors"
        aria-label="פתח כלי נגישות"
      >
        <Accessibility className="w-6 h-6" />
      </button>
      
      {isOpen && (
        <div className="absolute bottom-0 right-12 mb-2 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
          <div className="flex flex-col gap-2">
            <button
              onClick={handleFontSizeIncrease}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="הגדל גודל טקסט"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            <button
              onClick={handleFontSizeDecrease}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="הקטן גודל טקסט"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              onClick={handleContrastToggle}
              className={`p-2 hover:bg-gray-100 rounded-md transition-colors ${isHighContrast ? 'bg-gray-100' : ''}`}
              aria-label="החלף ניגודיות"
            >
              <Contrast className="w-5 h-5" />
            </button>
            <button
              onClick={handleThemeToggle}
              className={`p-2 hover:bg-gray-100 rounded-md transition-colors ${isDark ? 'bg-gray-100' : ''}`}
              aria-label="החלף ערכת נושא"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityToolbar; 