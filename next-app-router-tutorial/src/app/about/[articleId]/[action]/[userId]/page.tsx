import Container from "@/components/Container";

export default async function Page({
  params,
}: {
  params: Promise<{ articleId: string; action: string; userId: string }>;
}) {
  const { articleId, action, userId } = await params;
  return (
    <Container>
      <div className="w-[350px]">
        <p>
          You want to <span className="font-bold text-green-500">{action}</span>
        </p>
        <p>
          on my Post:{" "}
          <span className="font-bold text-green-500">{articleId}</span>
        </p>
        <p>
          with user ID:{" "}
          <span className="font-bold text-green-500">{userId}</span>
        </p>
      </div>
    </Container>
  );
}
