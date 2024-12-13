'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { MaxWidthWrapper } from "./max-width-wrapper"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MentorMatch</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
              How it Works
            </Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary">
              Success Stories
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:text-primary">
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-4">
                <Link href="#how-it-works" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  How it Works
                </Link>
                <Link href="#benefits" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  Benefits
                </Link>
                <Link href="#testimonials" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  Success Stories
                </Link>
                <Link href="#faq" className="text-sm font-medium hover:text-primary" onClick={toggleMenu}>
                  FAQ
                </Link>
                <Button variant="ghost" asChild className="justify-start">
                  <Link href="/login" onClick={toggleMenu}>Login</Link>
                </Button>
                <Button asChild className="justify-start">
                  <Link href="/signup" onClick={toggleMenu}>Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}

