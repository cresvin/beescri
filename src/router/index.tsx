import { PlayLayout } from "@/layouts/play-layout";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/root-layout";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        element: <PlayLayout />,
        children: [
          {
            path: "/",
            async lazy() {
              const { Play } = await import("../routes/play");
              return {
                Component: Play,
              };
            },
          },
        ],
      },
    ],
  },
]);
