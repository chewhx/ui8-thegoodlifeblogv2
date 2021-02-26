import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div className="btn_primary" onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
