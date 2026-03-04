export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid blue", padding: 16 }}>
      <h2>Dashboard Layout</h2>
      {children}
    </div>
  );
}
