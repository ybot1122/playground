import Container from "@/components/Container";

export default async function Page({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const articleId = (await params).articleId;
  return <Container>My Post: {articleId}</Container>;
}
