// saveLocal.js

/** 
 * Save a value to localStorage
 * @param {string} key - The key to save under
 * @param {any} value - The value to save
 */
export function saveToLocal(key, value) {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }
  
  /**
   * Load a value from localStorage
   * @param {string} key - The key to load
   * @param {any} defaultValue - The default value if the key doesn't exist
   * @returns {any} The loaded value or the default value
   */
  export function loadFromLocal(key, defaultValue) {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) {
        return defaultValue;
      }
      return JSON.parse(serializedValue);
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return defaultValue;
    }
  }
  
  /**
   * Remove a value from localStorage
   * @param {string} key - The key to remove
   */
  export function removeFromLocal(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from localStorage:', error);
    }
  }