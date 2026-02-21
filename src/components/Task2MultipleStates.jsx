import { useState } from "react";

const MultipleStates = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isLoggedIn = () => {

    setIsLoading(true);

    setTimeout(() => {
      if (loggedIn) {
        setLoggedIn(false);
      } else {
        setLoggedIn(true);
      }
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div className="border">
      <p>**Exercise 2: Conditional Rendering with Multiple States**</p>
      <p>
        Build a component that displays: - "Loading..." if `isLoading` is true.
        - "Welcome, User!" if `isLoggedIn` is true and `isLoading` is false. -
        "Please log in" if `isLoggedIn` is false and `isLoading` is false.
      </p>

      <div className="border w-full p-2">
        <p className="font-bold text-xl">
          {isLoading ? "Is loading..." : (loggedIn ? "Welcome user" : "Please log in")}
        </p>
        <button
          onClick={isLoggedIn}
          className="border pl-4 pr-4 rounded-lg m-2 shadow"
        >
          {loggedIn ? "Log out" : "Log in"}
        </button>
      </div>
    </div>
  );
};

export default MultipleStates;
