import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export const RootLayout = () => {
  return (
    <>
      <Outlet />
      <Toaster position="top-center" theme="dark" />
    </>
  );
};
