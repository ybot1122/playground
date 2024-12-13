import BlogRow from "@/components/BlogRow";
import Container from "@/components/Container";
import Link from "next/link";

export default function About() {
  return (
    <main className="">
      <Container>
        <p>All About Us.</p>

        <BlogRow
          articleTitle="Learn About Our History"
          articleId="history-123"
        />

        <BlogRow
          articleTitle="Understand our Values"
          articleId="values-yadada-123"
        />

        <BlogRow articleTitle="Meet Our Team" articleId="meet-our-team" />
      </Container>

      <Container>
        <p className="text-sm">
          Psst... you ready to{" "}
          <Link href="/rabbithole/start" className="underline">
            Go down the rabbit hole?
          </Link>
        </p>
      </Container>
    </main>
  );
}
