import { useState } from "react";

const BasicTask1 = () => {

  const [loggedIn, setLoggedIn] = useState(false);

  const isLoggedIn = () => {

    if (loggedIn) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  };

  return (
    <div className="border">
      <p>**Exercise 1: Basic Conditional Rendering**</p>
      <p>
        Create a component that displays "Welcome, User!" if a user is logged in
        (`isLoggedIn` is true) and "Please log in" if not.
      </p>

      <div className="border w-full p-2">
        <p className="font-bold text-xl">{loggedIn ? "Welcome User!" : "Please log in"}</p>
        <button 
        onClick={isLoggedIn}
        className="border pl-4 pr-4 rounded-lg m-2 shadow"
        >{loggedIn ? "Log out" : "Log in"}</button>
      </div>
    </div>
  );
};

export default BasicTask1;
