import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import MyMentors from "./_components/MyMentors";

export default function MyMentorsPage() {
  return (
    <MaxWidthWrapper>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-4">My Mentors</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Here are your current mentors and past mentorship connections.
        </p>
        <MyMentors />
      </div>
    </MaxWidthWrapper>
  );
}
