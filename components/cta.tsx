import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";

export function CTA() {
  return (
    <section className="py-20 bg-primary">
      <MaxWidthWrapper>
        <div className="text-center">
          <h2 className="text-3xl text-primary-foreground font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="mt-4 text-xl max-w-2xl mx-auto text-primary-foreground">
            Join MentorMatch today and connect with mentors who can help you
            achieve your goals
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" effect={"gooeyLeft"}>
              <Link href="/signup">Get Started Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              effect={"gooeyLeft"}
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
