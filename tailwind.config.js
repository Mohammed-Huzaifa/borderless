/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Primary Colors
        'bc-primary': '#3B5CCC',        // BC-Primary-SteroBlue
        'bc-secondary': '#F97316',      // BC-Secondary-Trangerine  
        'bc-tertiary': '#22C55E',       // BC-Tertiary-Lightgreen
        
        // Primary Blue Variations
        'bc-primary-50': '#EFF3FF',
        'bc-primary-100': '#DBE4FE', 
        'bc-primary-200': '#BFD0FD',
        'bc-primary-300': '#93B4FB',
        'bc-primary-400': '#6090F7',
        'bc-primary-500': '#3B5CCC',
        'bc-primary-600': '#2845B8',
        'bc-primary-700': '#1F3A95',
        'bc-primary-800': '#1E3278',
        'bc-primary-900': '#1E2D63',
        
        // Secondary Orange Variations
        'bc-secondary-50': '#FFF7ED',
        'bc-secondary-100': '#FFEDD5',
        'bc-secondary-200': '#FED7AA',
        'bc-secondary-300': '#FDBA74',
        'bc-secondary-400': '#FB9339',
        'bc-secondary-500': '#F97316',
        'bc-secondary-600': '#EA580C',
        'bc-secondary-700': '#C2410C',
        'bc-secondary-800': '#9A3412',
        'bc-secondary-900': '#7C2D12',
        
        // Status Colors
        'bc-success': '#10B981',
        'bc-warning': '#EAB308', 
        'bc-error': '#EF4444',
        
        // Text Colors
        'bc-text': '#1A1A1A',
        'bc-text-light': '#6B7280',
        'bc-text-inverse': '#FFFFFF',
        
        // Background Colors
        'bc-bg-default': '#FFFFFF',
        'bc-bg-surface': '#F9FAFB',
        'bc-bg-section': '#F3F4F6',
      },
      fontSize: {
        // Desktop Typography
        'heading-desktop': ['40px', { lineHeight: '48px', fontWeight: '400' }],
        'subheading-desktop': ['32px', { lineHeight: '38px', fontWeight: '400' }],
        'subtitle-desktop': ['24px', { lineHeight: '28px', fontWeight: '400' }],
        
        // Mobile Typography  
        'heading-mobile': ['32px', { lineHeight: '38px', fontWeight: '400' }],
        'subheading-mobile': ['24px', { lineHeight: '28px', fontWeight: '400' }],
        'subtitle-mobile': ['18px', { lineHeight: '22px', fontWeight: '400' }],
        
        // Body Text
        'para-m': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'para-s': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        
        // Button Text
        'btn-large': ['18px', { lineHeight: '22px', fontWeight: '500' }],
        'btn-medium': ['16px', { lineHeight: '20px', fontWeight: '500' }],
        'btn-small': ['14px', { lineHeight: '18px', fontWeight: '500' }],
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'bc': '8px',
        'bc-lg': '12px',
        'bc-xl': '16px',
      },
      boxShadow: {
        'bc': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'bc-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'bc-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
