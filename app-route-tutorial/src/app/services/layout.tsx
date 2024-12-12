import Container from "@/components/Container";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-center text-2xl">My Company Got Your Back!</h1>
      <h2 className="text-center text-sm">
        And these headers are in a nested <code>layout.tsx</code>
      </h2>
      {children}
    </>
  );
}
