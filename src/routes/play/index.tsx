import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { useEditor } from "@/contexts/editor-context";
import { Editor } from "./components/editor";
import { PanelHeader } from "./components/panel-header";
import { Preview } from "./components/preview";

export const Play = () => {
  const { html, css, js, changeValue } = useEditor();

  return (
    <div className="flex flex-col h-dvh">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <PanelHeader title="HTML" dotColor="#E44D26" />
              <Editor
                language="html"
                value={html}
                onChange={(value) => changeValue("html", value as string)}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <PanelHeader title="JS" dotColor="#F0DB4F" />
              <Editor
                language="javascript"
                value={js}
                onChange={(value) => changeValue("js", value as string)}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={50}>
              <PanelHeader title="CSS" dotColor="#264de4" />
              <Editor
                language="css"
                value={css}
                onChange={(value) => changeValue("css", value as string)}
              />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
              <PanelHeader title="Preview" />
              <Preview />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};
