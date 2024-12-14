import Link from "next/link";
import { Home, Users, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { NotificationDropdown } from "./NotificationDropdown";

export function Header() {
  return (
    <>
      <header className="border-b bg-white sticky top-0 z-10">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <Link
                href="/mentor/dashboard"
                className="flex items-center space-x-2"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <rect width="32" height="32" rx="8" fill="black" />
                  <path
                    d="M8 8L16 16L24 8M8 16L12 20M20 20L24 16"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl font-bold">Mentor-Match</span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link
                  href="/mentor/dashboard"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Dashboard
                </Link>
                <Link
                  href="/mentor/discover"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Discover
                </Link>
                <Link
                  href="/mentor/my-mentees"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  My Mentees
                </Link>
                <Link
                  href="/mentor/connections"
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  Connections
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <NotificationDropdown />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full md:flex hidden"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/placeholder.svg?height=32&width=32"
                        alt="H"
                      />
                      <AvatarFallback>H</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        Mentor Name
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        mentor@example.com
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 rounded-t-xl">
        <nav className="flex justify-around py-2">
          <Link
            href="/mentor/dashboard"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <Home className="h-6 w-6 text-gray-600" />
            <span className="text-xs font-medium text-gray-600">Home</span>
          </Link>
          <Link
            href="/mentor/discover"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <Search className="h-6 w-6 text-gray-600" />
            <span className="text-xs font-medium text-gray-600">Discover</span>
          </Link>
          <Link
            href="/mentor/my-mentees"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <Users className="h-6 w-6 text-gray-600" />
            <span className="text-xs font-medium text-gray-600">Mentees</span>
          </Link>
          <Link
            href="/mentor/profile"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="H" />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium text-gray-600">Profile</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
