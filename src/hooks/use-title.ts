import { useEffect, useRef } from "react";

export const useTitle = (title: string): void => {
  const documentDefined: boolean = typeof document !== "undefined";
  const originalTitle = useRef<string | null>(
    documentDefined ? document.title : null
  );

  useEffect(() => {
    if (!documentDefined) return;

    if (document.title !== title) {
      document.title = title;
    }

    return () => {
      if (originalTitle.current !== null) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        document.title = originalTitle.current;
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);
};
