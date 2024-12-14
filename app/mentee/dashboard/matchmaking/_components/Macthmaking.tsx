"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Star, Clock, Bookmark } from "lucide-react";

// Expanded mock data for matched users
const matchedUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Mentor",
    skills: ["React", "Node.js", "Python"],
    interests: ["Web Development", "Machine Learning"],
    imageUrl: "/placeholder.svg?height=100&width=100",
    matchPercentage: 95,
    experience: "10+ years",
    rating: 4.9,
    availability: "10 hrs/week",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Mentor",
    skills: ["JavaScript", "HTML", "CSS"],
    interests: ["Frontend Development", "UX Design"],
    imageUrl: "/placeholder.svg?height=100&width=100",
    matchPercentage: 88,
    experience: "7 years",
    rating: 4.7,
    availability: "5 hrs/week",
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "Mentee",
    skills: ["Java", "Spring Boot", "MySQL"],
    interests: ["Backend Development", "Database Design"],
    imageUrl: "/placeholder.svg?height=100&width=100",
    matchPercentage: 82,
    experience: "3 years",
    rating: 4.5,
    availability: "8 hrs/week",
  },
  {
    id: 4,
    name: "David Brown",
    role: "Mentee",
    skills: ["Python", "Data Analysis"],
    interests: ["Data Science", "Machine Learning"],
    imageUrl: "/placeholder.svg?height=100&width=100",
    matchPercentage: 79,
    experience: "2 years",
    rating: 4.2,
    availability: "15 hrs/week",
  },
];

export default function Matchmaking() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {matchedUsers.map((user) => (
          <Card key={user.id} className="flex flex-col">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.imageUrl} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{user.name}</CardTitle>
                <Badge
                  variant={user.role === "Mentor" ? "default" : "secondary"}
                >
                  {user.role}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">
                      Match Percentage
                    </span>
                    <span className="text-sm font-medium">
                      {user.matchPercentage}%
                    </span>
                  </div>
                  <Progress value={user.matchPercentage} className="h-2" />
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-yellow-400" />
                    <span>{user.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-blue-400" />
                    <span>{user.availability}</span>
                  </div>
                  <div className="flex items-center">
                    <Bookmark className="h-4 w-4 mr-1 text-green-400" />
                    <span>{user.experience}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-1">
                    {user.skills.map((skill) => (
                      <Badge key={skill} variant="outline">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Interests</h3>
                  <div className="flex flex-wrap gap-1">
                    {user.interests.map((interest) => (
                      <Badge key={interest} variant="outline">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Connect</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
