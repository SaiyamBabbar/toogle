import "./Toggle.css"; // Import CSS styles for the Toggle component

/**
 * Toggle Component
 * This component renders a toggle switch that allows the user to switch between
 * dark mode and light mode. It receives two props:
 * - handleChange: a function to handle the toggle switch change event
 * - isChecked: a boolean indicating whether dark mode is currently enabled
 */
export const Toggle = ({ handleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Dark Mode</label>
    </div>
  );
};
