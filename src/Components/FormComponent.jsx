import { useState } from "react";
import "./components.css";

export const FormComponent = ({ title, inputs = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="expandable-form">
      <div className="expandable-header">
        <span className="form-title">{title}</span>
        <button
          className="toggle-button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen((prev) => !prev);
          }}
        >
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      <div className="separator" />

      {isOpen && (
        <div className="expandable-content">
          <div className="form-grid">
            {inputs.map((input, index) => (
              <div
                key={index}
                className="form-grid-item"
                style={{
                  gridColumn: `span ${Math.min(input.resCol, 30)}`,
                }}
              >
                <label className="form-component-input-label">{input.label}</label>
                <input
                  type="text"
                  className="form-component-input"
                  placeholder={input.placeholder}
                  onChange={input.onChange}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
