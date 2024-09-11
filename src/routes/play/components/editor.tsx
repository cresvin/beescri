import { Editor as MonacoEditor, OnChange } from "@monaco-editor/react";

interface EditorProps {
  value: string;
  onChange: OnChange;
  language: "html" | "css" | "javascript";
}

export const Editor = ({ value, onChange, language }: EditorProps) => {
  return (
    <MonacoEditor
      theme="vs-dark"
      value={value}
      onChange={onChange}
      language={language}
      options={{
        tabSize: 2,
        smoothScrolling: true,
        cursorSmoothCaretAnimation: "on",
        minimap: { enabled: false },
        wordWrap: "bounded",
        lineHeight: 2,
        renderLineHighlightOnlyWhenFocus: true,
        scrollbar: { verticalSliderSize: 4 },
        overviewRulerLanes: 0,
        cursorBlinking: "solid",
        fixedOverflowWidgets: true,
        fontSize: 14,
        stickyScroll: { enabled: true },
        fontFamily: "Fira Code Variable",
        fontLigatures: true,
      }}
    />
  );
};
