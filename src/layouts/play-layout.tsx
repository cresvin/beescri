import { EditorProvider } from "@/contexts/editor-context";
import { Outlet } from "react-router-dom";

export const PlayLayout = () => {
  return (
    <EditorProvider>
      <Outlet />
    </EditorProvider>
  );
};
