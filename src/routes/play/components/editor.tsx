import {
  Editor as MonacoEditor,
  OnChange,
  OnMount,
} from "@monaco-editor/react";

interface EditorProps {
  value: string;
  onChange: OnChange;
  language: "html" | "css" | "javascript";
}

export const Editor = ({ value, onChange, language }: EditorProps) => {
  const handleEditorDidMount: OnMount = (_, monaco) => {
    monaco.editor.defineTheme("beescri", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#020611",
        "editor.foreground": "#f8f9fa",
        "editorWidget.background": "#020611",
        "editorWidget.foreground": "#f8f9fa",
        "editor.lineHighlightBackground": "#0f1722",
        "input.background": "#020611",
        "input.foreground": "#f8f9fa",
        "dropdown.background": "#020611",
        "dropdown.foreground": "#f8f9fa",
        "dropdown.border": "#1f2937",
        "scrollbarSlider.background": "#1f2937",
        "scrollbarSlider.hoverBackground": "#374151",
        "scrollbarSlider.activeBackground": "#4b5563",
        "editorLineNumber.foreground": "#6b7280",
        "editorLineNumber.activeForeground": "#f8f9fa",
        "editor.selectionBackground": "#264f78",
      },
    });
    monaco.editor.setTheme("beescri");
  };

  return (
    <MonacoEditor
      theme="vs-dark"
      onMount={handleEditorDidMount}
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
