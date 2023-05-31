import { Outlet } from "react-router-dom";

export const UserDashboard = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const InstructorDashboard = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export const AdminDashboard = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
