import Card from "@/components/Card";
import Container from "@/components/Container";

export default function Services() {
  return (
    <main className="">
      <div className="grid grid-cols-3 mt-10 p-10 gap-5">
        <Card
          header="Logo Design"
          description="Give us your vision and idea, we make you a logo. Work with the best artists."
          href="/logo_design"
          hrefLabel="Learn More"
        />
        <Card
          header="Logo Design"
          description="Give us your vision and idea, we make you a logo. Work with the best artists."
          href="/logo_design"
          hrefLabel="Learn More"
        />
        <Card
          header="Logo Design"
          description="Give us your vision and idea, we make you a logo. Work with the best artists."
          href="/logo_design"
          hrefLabel="Learn More"
        />
      </div>
    </main>
  );
}
