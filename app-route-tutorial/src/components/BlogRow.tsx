import Link from "next/link";

export default function ({
  articleTitle,
  articleId,
}: {
  articleTitle: string;
  articleId: string;
}) {
  return (
    <div className="flex text-lg w-[500px] my-5 border-b-2 border-indigo-500">
      <div className="flex-grow">{articleTitle}</div>
      <div>
        <Link href={`/about/${articleId}`} className="text-sm">
          Read More...
        </Link>
      </div>
    </div>
  );
}
