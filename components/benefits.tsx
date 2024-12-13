import { Lightbulb, Users, Target, Trophy } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MaxWidthWrapper } from "./max-width-wrapper"

const benefits = [
  {
    title: "Expert Guidance",
    description: "Learn from experienced professionals who have walked the path before you",
    icon: Lightbulb,
  },
  {
    title: "Personalized Matching",
    description: "Our algorithm ensures you connect with mentors who align with your goals",
    icon: Users,
  },
  {
    title: "Goal-Oriented",
    description: "Set clear objectives and track your progress with structured mentorship",
    icon: Target,
  },
  {
    title: "Career Growth",
    description: "Accelerate your professional development with targeted advice and feedback",
    icon: Trophy,
  },
]

export function Benefits() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose MentorMatch?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the advantages of our mentorship platform and how it can transform your career journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, i) => (
            <Card key={i} className="bg-gray-50">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  )
}

