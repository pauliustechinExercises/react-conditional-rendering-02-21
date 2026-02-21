import { useState } from "react";

const ControlledForm = () => {
  const [userInput, setUserInput] = useState("");

  const handleInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="border">
      <p>**Exercise 6: Styling Based on Conditions**</p>
      <p>
        Create a `Notification` component that: - Displays a green background if
        `type` is `"success"`. - Displays a red background if `type` is
        `"error"`. - Displays a yellow background if `type` is `"warning"`.
      </p>

      <div className="border w-full p-2">
        <form className="mb-4">
          <label>
            Enter (student / teacher):
          </label>
          <input className="border rounded-sm ml-2" type="text" onChange={handleInput}/>
        </form>
        <form>
          {(userInput === "teacher") ? (
            <label>Enter your subject:
              <input type="text" className="border rounded-sm ml-2"/>
            </label>
          ) : ((userInput === "student") ? (
            <label>Enter your grade:
              <input type="number" className="border rounded-sm ml-2" />
            </label>
          ) : (""))}
        </form>
      </div>
    </div>
  );
};

export default ControlledForm;
