import React  from "react";

const InputField = ({ value, label, name, placeholder, type, onChange }) => (
  <div className="form-group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      name={name}
      className="form-control"
    />
  </div>
);

export default InputField;