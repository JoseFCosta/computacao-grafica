const InputDropDown = ({ options, placeholder, label, onChange }) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <select className="Input-DropDown" onChange={onChange} defaultValue="">
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDropDown;
