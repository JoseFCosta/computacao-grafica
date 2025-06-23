import './components.css';

const DateInput = ({ value, onChange, label}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        className="DateInput"
        type="date"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default DateInput;
