import Card from "@/components/Card";
import Container from "@/components/Container";

export default function Services() {
  return (
    <main className="">
      <div className="grid grid-cols-3 mt-10 p-10 gap-5">
        <Card
          header="Logo Design"
          description="Give us your vision and idea, we make you a logo. Work with the best artists."
          href="/services/logo_design"
          hrefLabel="Learn More"
        />
        <Card
          header="Consultation"
          description="We will meet with you and discuss ideas."
          href="/services/consultation"
          hrefLabel="Schedule Now"
        />
        <Card
          header="Investment Services"
          description="Let us help you with your portfolio. We can manage assets and funds on your behalf."
          href="/services/investment"
          hrefLabel="Sign Up Today"
        />
      </div>
    </main>
  );
}
