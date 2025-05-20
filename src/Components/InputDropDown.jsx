export const InputDropDown = ({ options, placeholder, onChange }) => {
  return (
    <select className="Input-DropDown" onChange={onChange} defaultValue="">
      <option value="">{placeholder}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};