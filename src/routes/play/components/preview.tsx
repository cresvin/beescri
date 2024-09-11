import { useEditor } from "@/contexts/editor-context";
import { useEffect, useRef } from "react";

export const Preview = () => {
  const { html, css, js } = useEditor();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const updateIframeContent = () => {
      const iframeDocument = iframe.contentDocument;

      if (!iframeDocument) {
        return console.warn("Iframe document not found");
      }

      iframeDocument.open();
      iframeDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>
              function runner() { ${js} }
              runner()
            </script>
          </body>
        </html>
      `);
      iframeDocument.close();
    };

    const timeout = setTimeout(updateIframeContent, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return <iframe ref={iframeRef} className="w-full h-full" />;
};
