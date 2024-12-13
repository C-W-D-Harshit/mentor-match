import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import Link from "next/link";
import { MaxWidthWrapper } from "./max-width-wrapper";

export function Hero() {
  return (
    <section className="relative py-12 md:py-14 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"></div>

      {/* SVG Grid Background with fade effect */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,0,0,0.05)"
                strokeWidth="1"
              />
            </pattern>
            <mask id="fade-mask" x="0" y="0" width="100%" height="100%">
              <rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                fill="url(#fade-gradient)"
              />
            </mask>
            <linearGradient id="fade-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="25%" stopColor="white" stopOpacity="0.7" />
              <stop offset="50%" stopColor="white" stopOpacity="0.4" />
              <stop offset="75%" stopColor="white" stopOpacity="0.1" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#grid)"
            mask="url(#fade-mask)"
          />
        </svg>
      </div>

      <MaxWidthWrapper className="relative z-10">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
            Find Your Perfect Mentor Match
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl mx-auto">
            Accelerate Your Growth with Expert Mentorship
          </h1>
          <p className="max-w-[700px] text-gray-600 md:text-xl dark:text-gray-400">
            Connect with experienced mentors in your field, build meaningful
            relationships, and take your career to the next level.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Button size="lg" asChild effect="shine">
              <Link href="/signup">Find a Mentor</Link>
            </Button>
            <Button size="lg" variant="outline" asChild effect="ringHover">
              <Link href="/signup?type=mentor">Become a Mentor</Link>
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <div className="relative w-full max-w-[90%] mx-auto mt-12">
        <div className="relative aspect-[16/9] rounded-xl border bg-muted overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircle className="h-16 w-16 md:h-20 md:w-20 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
