import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import Matchmaking from "./_components/Macthmaking";

export default function MatchmakingPage() {
  return (
    <MaxWidthWrapper>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-4">Your Mentorship Matches</h1>
        <p className="text-lg text-muted-foreground mb-8">
          These are your top matches based on your profile and preferences.
        </p>
        <Matchmaking />
      </div>
    </MaxWidthWrapper>
  );
}
