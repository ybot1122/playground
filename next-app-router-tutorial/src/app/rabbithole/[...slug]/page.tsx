import Container from "@/components/Container";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <Container>
      <div className="w-[350px]">
        {slug.map((t) => (
          <p>{t}</p>
        ))}

        <p className="mt-5">
          <Link
            href={`/rabbithole/${slug.join("/")}/${Math.round(Math.random() * 100)}`}
            className="underline"
          >
            Keep going...
          </Link>
        </p>
        <p className="text-sm mt-5">Watch the URL bar...</p>
      </div>
    </Container>
  );
}
