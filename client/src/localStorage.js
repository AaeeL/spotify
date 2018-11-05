/**
 * A couple of function to preserve state when page is refreshed
 */

// Function to load the current state from localstorage
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save any state changes to localstorage
export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    return err.message;
  }
};
