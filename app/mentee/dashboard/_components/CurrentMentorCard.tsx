"use client";

import { useState } from "react";
import {
  Calendar,
  MessageSquare,
  Clock,
  Award,
  Star,
  ArrowRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Session {
  date: string;
  topic: string;
  duration: string;
}

const recentSessions: Session[] = [
  { date: "2024-01-10", topic: "React Performance", duration: "45 mins" },
  { date: "2024-01-03", topic: "AWS Deployment", duration: "60 mins" },
];

export default function CurrentMentorCard() {
  const [isMessageHovered, setIsMessageHovered] = useState(false);

  return (
    <Card className="w-full max-w-md mx-auto transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Your Current Mentor</span>
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost" size="sm">
                View History <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold">Recent Sessions</h4>
                {recentSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm"
                  >
                    <div>
                      <p className="font-medium">{session.topic}</p>
                      <p className="text-muted-foreground">
                        {new Date(session.date).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant="secondary">{session.duration}</Badge>
                  </div>
                ))}
              </div>
            </HoverCardContent>
          </HoverCard>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="/placeholder.svg?height=64&width=64"
              alt="John Doe"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">
              Senior Software Engineer
            </p>
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.9</span>
              <span className="text-xs text-muted-foreground">
                (120+ sessions)
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge
            variant="secondary"
            className="bg-[#61dafb] text-black hover:bg-[#61dafb]/80"
          >
            React
          </Badge>
          <Badge
            variant="secondary"
            className="bg-[#68a063] text-white hover:bg-[#68a063]/80"
          >
            Node.js
          </Badge>
          <Badge
            variant="secondary"
            className="bg-[#ff9900] text-black hover:bg-[#ff9900]/80"
          >
            AWS
          </Badge>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-primary" />
            <span>10+ years experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>Available 20hrs/week</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            className="flex-1"
            onMouseEnter={() => setIsMessageHovered(true)}
            onMouseLeave={() => setIsMessageHovered(false)}
          >
            <MessageSquare
              className={`mr-2 h-4 w-4 ${
                isMessageHovered ? "animate-bounce" : ""
              }`}
            />
            Message
          </Button>
          <Button className="flex-1" variant="default">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Session
          </Button>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <div className="space-y-2">
            <h4 className="text-sm font-semibold">Next Session</h4>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">System Design Discussion</p>
                <p className="text-xs text-muted-foreground">
                  Tomorrow, 2:00 PM
                </p>
              </div>
              <Button variant="outline" size="sm">
                Join
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
