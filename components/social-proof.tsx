'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { MaxWidthWrapper } from "./max-width-wrapper"

const logos = [
  { name: 'Company 1', src: '/placeholder.svg' },
  { name: 'Company 2', src: '/placeholder.svg' },
  { name: 'Company 3', src: '/placeholder.svg' },
  { name: 'Company 4', src: '/placeholder.svg' },
  { name: 'Company 5', src: '/placeholder.svg' },
  { name: 'Company 6', src: '/placeholder.svg' },
]

export function SocialProof() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth

    let scrollPos = 0
    const scroll = () => {
      scrollPos += 1
      if (scrollPos >= scrollWidth / 2) {
        scrollPos = 0
      }
      scrollContainer.scrollLeft = scrollPos
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-12 bg-gray-50">
      <MaxWidthWrapper>
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">
          Trusted by Industry Leaders
        </h2>
      </MaxWidthWrapper>
      <div className="w-full overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex gap-8 py-4 overflow-hidden whitespace-nowrap"
        >
          {/* First set of logos */}
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 h-16 w-32 bg-white rounded-lg flex items-center justify-center p-4"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, i) => (
            <div
              key={`duplicate-${i}`}
              className="flex-shrink-0 h-16 w-32 bg-white rounded-lg flex items-center justify-center p-4"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
      <MaxWidthWrapper>
        <p className="text-sm text-muted-foreground text-center mt-8">
          Join thousands of professionals already growing with MentorMatch
        </p>
      </MaxWidthWrapper>
    </section>
  )
}

