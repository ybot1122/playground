import Container from "@/components/Container";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const articleId = (await params).articleId;
  return (
    <Container>
      <div>My Post: {articleId}</div>
      <div className="my-2 gap-5">
        <Link
          href={`/about/${articleId}/comment/user-128492`}
          className="text-sm text-orange-500 inline-block border border-orange-500 hover:border-orange-800 p-2 mx-2 rounded-lg"
        >
          Leave a Comment
        </Link>
        <Link
          href={`/about/${articleId}/bookmark/user-128492`}
          className="text-sm text-orange-500 inline-block border border-orange-500 hover:border-orange-800 p-2 mx-2 rounded-lg"
        >
          Bookmark this Article
        </Link>
        <Link
          href={`/about/${articleId}/like/user-128492`}
          className="text-sm text-orange-500 inline-block border border-orange-500 hover:border-orange-800 p-2 mx-2 rounded-lg"
        >
          Like this Article
        </Link>
      </div>
      <div className="my-2"></div>
      <div className="my-2"></div>
    </Container>
  );
}
