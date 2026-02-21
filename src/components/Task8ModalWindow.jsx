import { useState } from "react";

const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="border">
      <p>**Exercise 8: Advanced Component Visibility**</p>
      <p>
        Create a `Modal` component that: - Displays when `isOpen` is true. - Is
        hidden when `isOpen` is false.
      </p>

      <div className="border w-full p-2 relative">
        <button 
        className="border rounded-lg p-2 bg-green-200"
        onClick={handleOpen}
        >
          Open Modal
        </button>
        <div 
        className="w-[80%] h-60 absolute z-10 bottom-50 right-20 shadow-2xl border rounded-lg bg-blue-200 flex flex-col justify-center items-center"
        style={{display:(isOpen ? "block" : "none")}}
        >
          <p>Modal Window</p>
          <button 
          className="border w-[10%] mt-20 rounded-lg bg-red-300 text-white font-bold"
          onClick={handleClose}
          >
            Close modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
