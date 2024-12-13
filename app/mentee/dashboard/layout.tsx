import Header from "./_components/Header";

export default function MenteeDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <main className="flex-grow pb-20 md:pb-0">
        {" "}
        {/* Added padding bottom for mobile nav */}
        {children}
      </main>
    </div>
  );
}
