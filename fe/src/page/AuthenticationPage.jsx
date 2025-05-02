import React from "react";
import { Link } from "react-router-dom";

const AuthenticationPage = ({ children, className = "" }) => {
  return (
    <div
      className={`max-w-[1000px] w-full bg-white mx-auto mt-5 rounded-xl ${className}`}
    >
      <div className="text-center">
        <div className="text-xl md:text-4xl font-bold text-primary">
          Chào mừng tới với Pine Perfume
        </div>
      </div>
      {children}
    </div>
  );
};

export default AuthenticationPage;
