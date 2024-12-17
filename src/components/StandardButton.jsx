import Button from "./Button";

const StandardButton = ({ label }) => {
  return (
    <div className="flex justify-center">
      <button className="p-2 rounded-15 border border-darkblue text-darkblue hover:underline">
        {label}
      </button>
    </div>
  );
};

export default StandardButton;
