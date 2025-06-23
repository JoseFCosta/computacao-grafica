import './components.css'

const ButtonCancel = ({ children, onClick, type = "button" }) => {
  return (
    <button className="ButtonCancel" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default ButtonCancel;