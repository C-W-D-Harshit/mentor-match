import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import UserDiscovery from "./_components/UserDiscovery";

export default function DiscoverPage() {
  return (
    <MaxWidthWrapper>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-4">Discover Users</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Find mentors and mentees that match your interests and goals. Use the
          filters to narrow down your search and discover your perfect match.
        </p>
        <UserDiscovery />
      </div>
    </MaxWidthWrapper>
  );
}
