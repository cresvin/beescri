interface PanelHeaderProps {
  title: string;
  dotColor?: string;
}

export const PanelHeader = ({ title, dotColor }: PanelHeaderProps) => {
  return (
    <header className="text-sm py-2 px-5 flex items-center gap-2">
      <div
        className="size-2 bg-white rounded-full"
        style={{
          backgroundColor: dotColor || "#fff",
        }}
      />
      <p className="text-muted-foreground">{title}</p>
    </header>
  );
};
