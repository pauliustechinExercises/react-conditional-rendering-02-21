import { useState } from "react";

const ConditionalWithElements = () => {
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
      <p>**Exercise 3: Conditional Rendering with Elements**</p>
      <p>
        Create a component that displays: - A "Profile" button if `isLoggedIn`
        is true. - A "Log In" button and "Sign Up" button if `isLoggedIn` is
        false.
      </p>

      <div className="border w-full p-2 flex justify-center">
        <div className="flex flex-col w-[20%]">
          {/* nesugalvojau kaip cia apsimoketu naudoti && arba ||, kai dvi salygos yra*/}
          {loggedIn ? (
            <>
              <span className="font-bold text-lg">Username</span>
              <button onClick={isLoggedIn} className="border pl-4 pr-4 rounded-lg m-2 shadow">Logout</button>
            </>
          )
          : (
            <>
              <button onClick={isLoggedIn} className="border pl-4 pr-4 rounded-lg m-2 shadow">Log in</button>
              <button onClick={isLoggedIn} className="border pl-4 pr-4 rounded-lg m-2 shadow">Sign up</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConditionalWithElements;
