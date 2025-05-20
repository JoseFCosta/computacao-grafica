import './components.css'

export const Button = ({ children, onClick, type = "button" }) => {
  return (
    <button className="Button" onClick={onClick} type={type}>
      {children}
    </button>
  );
};
