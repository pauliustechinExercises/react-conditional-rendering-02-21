import { useState } from "react";
import AdminPage from "./task4SubComponents/AdminPage";
import UserPage from "./task4SubComponents/UserPage";
import GuestPage from "./task4SubComponents/GuestPage";

const RenderingDiffComp = () => {
  const [role, setRole] = useState("");

  const adminPage = () => {
    setRole("ROLE_ADMIN");
  };

  const userPage = () => {
    setRole("ROLE_USER");
  };

  const guestPage = () => {
    setRole("ROLE_GUEST");
  };

  const pageContent = () => {
    switch (role) {
      case "ROLE_USER":
        return <UserPage />;
      case "ROLE_ADMIN":
        return <AdminPage />;
      case "ROLE_GUEST":
        return <GuestPage />;
      default:
        return <p>Please pick a role</p>;
    }
  };

  return (
    <div className="border">
      <p>**Exercise 4: Rendering Different Components**</p>
      <p>
        Build a component that displays different child components based on a
        user role (`userRole`): - `AdminPanel` component if the role is `admin`.
        - `UserDashboard` component if the role is `user`. - `GuestPage`
        component if no role is set.
      </p>

      <div className="border w-full p-2">
        <button
          className="border pl-4 pr-4 rounded-lg m-2 shadow"
          onClick={userPage}
        >
          User page
        </button>
        <button
          className="border pl-4 pr-4 rounded-lg m-2 shadow"
          onClick={adminPage}
        >
          Admin page
        </button>
        <button
          className="border pl-4 pr-4 rounded-lg m-2 shadow"
          onClick={guestPage}
        >
          Guest page
        </button>
        {pageContent()} 
      </div>
    </div>
  );
};

export default RenderingDiffComp;
