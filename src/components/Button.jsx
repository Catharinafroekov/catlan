import React from "react";

const Button = ({ onClick }) => {
  return (
    <div
      onClick={onClick} // Når knappen trykkes, udføres onClick funktionen
      className="border-2 border-black w-[200px] h-10 p-3 bg-white flex items-center justify-center cursor-pointer rounded-15"
    >
      <p className="m-0 text-darkblue hover:underline">LÆG I KURV</p>
    </div>
  );
};

export default Button;
