import { Analytics } from "@vercel/analytics/react";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export const RootLayout = () => {
  return (
    <>
      <Outlet />
      <Analytics />
      <Toaster
        position="top-center"
        theme="dark"
        toastOptions={{
          className: "bg-background border-border",
        }}
      />
    </>
  );
};
