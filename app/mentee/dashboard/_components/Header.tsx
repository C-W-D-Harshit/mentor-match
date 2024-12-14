import Link from "next/link";
import { Home, Search, Users, User } from "lucide-react";
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
import Logo from "./Logo";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { NotificationDropdown } from "./NotificationDropdown";

export default function Header() {
  return (
    <>
      <header className="border-b bg-white sticky top-0 z-10">
        <MaxWidthWrapper>
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-8">
                <Logo />
                <nav className="hidden md:flex space-x-6">
                  <Link
                    href="/mentee/dashboard"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/mentee/dashboard/discover"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Discover
                  </Link>
                  <Link
                    href="/mentee/dashboard/matchmaking"
                    className="text-sm font-medium hover:text-primary"
                  >
                    Matchmaking
                  </Link>
                  <Link
                    href="/mentee/dashboard/my-mentors"
                    className="text-sm font-medium hover:text-primary"
                  >
                    My Mentors
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
                          alt="Harshit"
                        />
                        <AvatarFallback>H</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Harshit
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                          harshit@example.com
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
          </div>
        </MaxWidthWrapper>
      </header>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 rounded-t-xl">
        <nav className="flex justify-around py-2">
          <Link
            href="/mentee/dashboard"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <Home className="h-6 w-6 text-gray-600" />
            <span className="text-xs font-medium text-gray-600">Home</span>
          </Link>
          <Link
            href="/mentee/dashboard/discover"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <Search className="h-6 w-6 text-gray-600" />
            <span className="text-xs font-medium text-gray-600">Discover</span>
          </Link>
          <Link
            href="/mentee/dashboard/matchmaking"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <Users className="h-6 w-6 text-gray-600" />
            <span className="text-xs font-medium text-gray-600">Matches</span>
          </Link>
          <Link
            href="/mentee/dashboard/my-mentors"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <User className="h-6 w-6 text-gray-600" />
            <span className="text-xs font-medium text-gray-600">Mentors</span>
          </Link>
          <Link
            href="/mentee/dashboard/profile"
            className="flex flex-col items-center space-y-1 p-2 rounded-md transition-colors duration-200 hover:bg-gray-100"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="/placeholder.svg?height=24&width=24"
                alt="Harshit"
              />
              <AvatarFallback>H</AvatarFallback>
            </Avatar>
            <span className="text-xs font-medium text-gray-600">Profile</span>
          </Link>
        </nav>
      </div>
    </>
  );
}
