import { ref } from 'vue';
import { updateColorVariable, updateShapeVariable, updateTextVariable } from '../variableManager';

// Dynamically import all JSON files in the current directory
const styleFiles = import.meta.glob('./*.json', { eager: true });

// Keep track of the currently active style
const currentStyle = ref(null);

async function importRandomStyle() {
  const availableStyles = Object.keys(styleFiles);
  
  if (availableStyles.length === 0) {
    console.error('No style files available');
    return;
  }

  // Filter out the current style
  const eligibleStyles = availableStyles.filter(style => style !== currentStyle.value);

  if (eligibleStyles.length === 0) {
    console.error('No other styles available');
    return;
  }

  const randomFile = eligibleStyles[Math.floor(Math.random() * eligibleStyles.length)];
  console.log(`Attempting to import style from: ${randomFile}`);
  
  try {
    const style = styleFiles[randomFile].default;
    applyStyle(style);
    currentStyle.value = randomFile; // Update the current style
    console.log(`Successfully applied style from ${randomFile}`);
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

// Function to get the current style
function getCurrentStyle() {
  return currentStyle.value;
}

export { importRandomStyle, getCurrentStyle };