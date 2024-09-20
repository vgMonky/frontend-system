import { updateColorVariable, updateShapeVariable, updateTextVariable } from '../variableManager';

const styleFiles = [
  'style-variables.json',
  'style-variables(1).json',
  'style-variables(2).json',
  'style-variables(3).json',
  'style-variables(4).json',
  'style-variables(5).json',
  'style-variables(6).json',
  'style-variables(7).json'
];

async function importRandomStyle() {
  const randomFile = styleFiles[Math.floor(Math.random() * styleFiles.length)];
  try {
    const response = await fetch(`/src/feature_modules/StyleVariables/save/${randomFile}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const style = await response.json();
    
    applyStyle(style);
    console.log(`Applied style from ${randomFile}`);
  } catch (error) {
    console.error('Error importing random style:', error);
  }
}

function applyStyle(style) {
  if (style.colorVariables) {
    Object.entries(style.colorVariables).forEach(([key, value]) => updateColorVariable(key, value));
  }
  if (style.shapeVariables) {
    Object.entries(style.shapeVariables).forEach(([key, value]) => updateShapeVariable(key, value));
  }
  if (style.textVariables) {
    Object.entries(style.textVariables).forEach(([key, value]) => updateTextVariable(key, value));
  }
}

export { importRandomStyle };