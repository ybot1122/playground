import Container from "@/components/Container";

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container>
      <h1>My Company Got Your Back!</h1>
      <h2>
        And these headers are in a nested <code>layout.tsx</code>
      </h2>
      {children}
    </Container>
  );
}
