import { useTitle } from "@/hooks/use-title";

export const NotFound = () => {
  useTitle("Page Not Found");

  return (
    <div className="h-dvh flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Oops, 404!</h1>
      <p className="text-muted-foreground mt-1.5">
        The page you are looking for does not exist
      </p>
    </div>
  );
};
