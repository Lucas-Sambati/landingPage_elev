import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default Layout;
