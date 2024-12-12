import {
  Card as NextCard,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/card";
import Link from "next/link";

export default function Card({
  header,
  description,
  href,
  hrefLabel,
}: {
  header: string;
  description: string;
  href: string;
  hrefLabel: string;
}) {
  return (
    <NextCard className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex justify-center items-center">
          <p className="text-lg">{header}</p>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm">{description}</p>
      </CardBody>
      <CardFooter>
        <Link href={href} className="mt-5 underline">
          {">> " + hrefLabel}
        </Link>
      </CardFooter>
    </NextCard>
  );
}
