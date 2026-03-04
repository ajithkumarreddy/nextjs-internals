export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid blue", padding: 16 }}>
      <h2>Settings Layout</h2>
      {children}
    </div>
  );
}
