import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <MaxWidthWrapper className="relative w-full h-full flex flex-col justify-center items-center">
        {children}
        <Link href={"/"} className="absolute top-4 left-4">
          <Button
            effect={"expandIcon"}
            icon={ArrowLeftIcon}
            iconPlacement="left"
          >
            Go back
          </Button>
        </Link>
      </MaxWidthWrapper>
    </div>
  );
}
