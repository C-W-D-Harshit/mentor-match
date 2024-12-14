"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const mentors = [
  {
    id: 1,
    name: "Alice Johnson",
    expertise: "Web Development",
    imageUrl: "/placeholder.svg?height=100&width=100",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Smith",
    expertise: "Machine Learning",
    imageUrl: "/placeholder.svg?height=100&width=100",
    status: "active",
  },
  {
    id: 3,
    name: "Carol Williams",
    expertise: "UX Design",
    imageUrl: "/placeholder.svg?height=100&width=100",
    status: "past",
  },
];

export default function MyMentors() {
  const [activeTab, setActiveTab] = useState("active");

  const filteredMentors = mentors.filter(
    (mentor) => mentor.status === activeTab
  );

  return (
    <div>
      <Tabs defaultValue="active" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="active">Active Mentors</TabsTrigger>
          <TabsTrigger value="past">Past Mentors</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={mentor.imageUrl} alt={mentor.name} />
                    <AvatarFallback>
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{mentor.name}</CardTitle>
                    <Badge>{mentor.expertise}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You&apos;ve been working with {mentor.name} for 3 months.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Schedule Session</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="past">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={mentor.imageUrl} alt={mentor.name} />
                    <AvatarFallback>
                      {mentor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{mentor.name}</CardTitle>
                    <Badge>{mentor.expertise}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You worked with {mentor.name} for 6 months in 2022.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View History
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
