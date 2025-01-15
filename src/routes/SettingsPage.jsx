import { useState } from 'react';

const SettingsPage = () => {
  const [colorTheme, setColorTheme] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    setColorTheme(value);
    console.log(`handleChange: ${colorTheme}`);
  };
  return (
    <main>
      <h3>Color Theme Settings</h3>
      <div>
        <select onChange={handleChange}>
          <option value='blue'>Blue</option>
          <option value='grey'>Grey</option>
          <option value='white'>White</option>
        </select>
      </div>
      <button>Save changes</button>
    </main>
  );
};
export default SettingsPage;
