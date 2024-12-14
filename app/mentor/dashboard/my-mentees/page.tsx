import { DashboardHeader } from "../_components/DashboardHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, MessageCircle } from "lucide-react";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";

export default function MyMenteesPage() {
  const mentees = [
    {
      id: 1,
      name: "Alex Chen",
      avatar: "/avatars/alex-chen.jpg",
      title: "Junior Developer",
      skills: ["React", "TypeScript"],
      nextSession: "Tomorrow, 3:00 PM",
      progress: "Working on advanced React patterns",
    },
    {
      id: 2,
      name: "Sarah Miller",
      avatar: "/avatars/sarah-miller.jpg",
      title: "Product Designer",
      skills: ["UI/UX", "Figma"],
      nextSession: "Thursday, 2:00 PM",
      progress: "Preparing for a design challenge",
    },
    {
      id: 3,
      name: "Michael Johnson",
      avatar: "/avatars/michael-johnson.jpg",
      title: "Data Analyst",
      skills: ["Python", "SQL"],
      nextSession: "Next week, Monday 11:00 AM",
      progress: "Learning advanced data visualization techniques",
    },
  ];

  return (
    <MaxWidthWrapper>
      <div className="space-y-6 py-6">
        <DashboardHeader
          heading="My Mentees"
          text="Manage your current mentorship relationships."
        />
        <div className="grid gap-4">
          {mentees.map((mentee) => (
            <Card key={mentee.id}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={mentee.avatar} alt={mentee.name} />
                    <AvatarFallback>
                      {mentee.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{mentee.name}</CardTitle>
                    <CardDescription>{mentee.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div>
                    <h4 className="text-sm font-medium mb-1">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentee.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Next Session</h4>
                    <p className="text-sm text-muted-foreground">
                      {mentee.nextSession}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">
                      Current Progress
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {mentee.progress}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Message
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center"
                    >
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Schedule Session
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
