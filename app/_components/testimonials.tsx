import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MaxWidthWrapper } from "../../components/max-width-wrapper";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Software Engineer",
    company: "Tech Corp",
    image: "/placeholder.svg",
    text: "Mentor-Match connected me with an amazing senior developer who helped me level up my coding skills. The structured approach and regular feedback made a huge difference in my career.",
    expertise: ["React", "Node.js"],
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    image: "/placeholder.svg",
    text: "Finding a product management mentor was crucial for my transition into PM. The platform made it easy to connect with experienced professionals who provided invaluable guidance.",
    expertise: ["Product Strategy", "Agile"],
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <MaxWidthWrapper>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from professionals who found their perfect mentor match
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="bg-gray-50">
              <CardHeader className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="flex flex-wrap gap-2">
                  {testimonial.expertise.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
