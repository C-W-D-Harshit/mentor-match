import { Metadata } from "next";
import { DashboardHeader } from "../_components/DashboardHeader";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import UserDiscovery from "./_components/UserDiscovery";

export const metadata: Metadata = {
  title: "Discover | Mentor-Match",
  description: "Find mentors and mentees that match your interests and skills.",
};

export default function DiscoverPage() {
  return (
    <MaxWidthWrapper>
      <div className="space-y-6 py-6">
        <DashboardHeader
          heading="Discover"
          text="Find mentors and mentees that match your interests and skills."
        />
        <UserDiscovery />
      </div>
    </MaxWidthWrapper>
  );
}
