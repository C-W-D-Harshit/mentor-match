'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MaxWidthWrapper } from "./max-width-wrapper"

const faqs = [
  {
    question: "How does the mentorship matching process work?",
    answer: "Our algorithm considers your goals, experience level, industry, and specific skills you want to develop. We then suggest mentors who best match these criteria, allowing you to choose the perfect mentor for your needs."
  },
  {
    question: "What is the time commitment for mentorship?",
    answer: "The time commitment is flexible and can be arranged between you and your mentor. Most mentorship relationships involve 1-2 hours of meeting time per month, plus additional communication through our platform."
  },
  {
    question: "Can I switch mentors if the match isn't right?",
    answer: "Yes, we understand that finding the right mentor is crucial. If you feel your current mentor isn't the best fit, you can request a new match at any time through our platform."
  },
  {
    question: "What kind of support can I expect from my mentor?",
    answer: "Mentors provide guidance, share their experience, offer career advice, help with skill development, and provide feedback on your progress. The specific focus areas can be agreed upon between you and your mentor."
  },
]

export function FAQ() {
  return (
    <section className="py-20 bg-gray-50" id="faq">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our mentorship platform
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

