import { useState } from "react";

const Notification = () => {
  const [notification, setNotification] = useState({ type: "" });

  const handleInput = (event) => {
    setNotification({...notification, type: event.target.value });
  };

  const applyBackground = () => {
    switch (notification.type.toLowerCase()) {
      case "success":
        return "#008000";
      case "error":
        return "#ff0000";
      case "warning":
        return "#ffff00";
      default:
        return "#3fa3d1";
    }
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
          <label htmlFor="notification">
            Enter (succes / error / warning):
          </label>
          <input className="border rounded-sm ml-2" type="text" name="notification" id="notification" onChange={handleInput}/>
        </form>
        <div className="w-full h-20 border pt-5" style={{background:applyBackground()}}>Notification status</div>
      </div>
    </div>
  );
};

export default Notification;
