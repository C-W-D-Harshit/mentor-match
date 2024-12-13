import { CheckCircle, UserPlus, Calendar, MessageSquare } from "lucide-react";
import { MaxWidthWrapper } from "../../components/max-width-wrapper";

const steps = [
  {
    title: "Create Your Profile",
    description:
      "Sign up and tell us about your goals, interests, and what you're looking for in a mentor",
    icon: UserPlus,
  },
  {
    title: "Get Matched",
    description:
      "Our algorithm will suggest mentors based on your preferences and expertise requirements",
    icon: CheckCircle,
  },
  {
    title: "Schedule Sessions",
    description:
      "Book convenient time slots with your mentor using our integrated calendar",
    icon: Calendar,
  },
  {
    title: "Start Learning",
    description:
      "Connect with your mentor through video calls and messaging to accelerate your growth",
    icon: MessageSquare,
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50" id="how-it-works">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with MentorMatch in four simple steps
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
