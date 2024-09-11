import React, { createContext, useContext, useState } from "react";

type ChangeValue = (editor: "html" | "css" | "js", value: string) => void;

interface EditorContext {
  html: string;
  css: string;
  js: string;
  changeValue: ChangeValue;
}

const EditorContext = createContext<EditorContext | null>(null);

export const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  const changeValue: ChangeValue = (editor, value) => {
    switch (editor) {
      case "html":
        setHtml(value);
        break;
      case "css":
        setCss(value);
        break;
      case "js":
        setJs(value);
        break;
      default:
        throw new Error("Invalid editor");
    }
  };

  const value = {
    html,
    css,
    js,
    changeValue,
  };

  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEditor = () => {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error(
      "useEditorContext must be used within EditorContextProvider"
    );
  }
  return context;
};
