import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import MenteeDashboard from "./_components/MenteeDashboard";

export default function Home() {
  return (
    <div className="py-8">
      <MaxWidthWrapper>
        <h1 className="text-3xl font-bold mb-8">Welcome, Harshit</h1>
        <MenteeDashboard />
      </MaxWidthWrapper>
    </div>
  );
}
