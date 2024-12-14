import { Metadata } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  CalendarIcon,
  Users,
  MessageSquare,
  TrendingUp,
  Clock,
} from "lucide-react";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { DashboardHeader } from "./_components/DashboardHeader";

export const metadata: Metadata = {
  title: "Dashboard | Mentor-Match",
  description: "Manage your mentorship journey",
};

export default function DashboardPage() {
  return (
    <MaxWidthWrapper>
      <div className="space-y-6 py-6">
        <DashboardHeader
          heading="Welcome back, Mentor"
          text="Here's an overview of your mentorship activities."
        />
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Mentees
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Upcoming Sessions
              </CardTitle>
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                Next session in 1 day
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Unread Messages
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                3 new since yesterday
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Session Rating
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">Out of 5 stars</p>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Upcoming Sessions</CardTitle>
              <CardDescription>
                Your scheduled mentoring sessions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    name: "Alex Chen",
                    time: "Today, 2:00 PM",
                    topic: "React Hooks",
                  },
                  {
                    name: "Sarah Miller",
                    time: "Tomorrow, 10:00 AM",
                    topic: "Career Advice",
                  },
                  {
                    name: "Mike Johnson",
                    time: "Friday, 3:30 PM",
                    topic: "Code Review",
                  },
                ].map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-2">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-sm font-medium">{session.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {session.time}
                        </p>
                      </div>
                    </div>
                    <Badge variant="outline">{session.topic}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>
                Your latest mentorship activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    icon: MessageSquare,
                    text: "Replied to Sarah's message",
                    time: "2 hours ago",
                  },
                  {
                    icon: TrendingUp,
                    text: "Alex completed a milestone",
                    time: "Yesterday",
                  },
                  {
                    icon: Users,
                    text: "New mentee request from Emily",
                    time: "2 days ago",
                  },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <activity.icon className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{activity.text}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2 lg:col-span-4">
            <CardHeader>
              <CardTitle>Mentee Progress</CardTitle>
              <CardDescription>
                Recent achievements and milestones
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Alex Chen",
                    achievement: "Completed React course",
                    progress: 75,
                  },
                  {
                    name: "Sarah Miller",
                    achievement: "Finished portfolio website",
                    progress: 90,
                  },
                  {
                    name: "Mike Johnson",
                    achievement: "Solved 50 coding challenges",
                    progress: 60,
                  },
                ].map((mentee, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{mentee.name}</p>
                      <Badge variant="secondary">{mentee.progress}%</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {mentee.achievement}
                    </p>
                    <div className="w-full bg-secondary h-2 rounded-full">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${mentee.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks you can perform</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button className="w-full">Schedule New Session</Button>
              <Button className="w-full" variant="outline">
                View Connection Requests
              </Button>
              <Button className="w-full" variant="outline">
                Update Availability
              </Button>
            </CardContent>
          </Card>
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>
                Workshops and webinars you might be interested in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Effective Mentorship Techniques",
                    date: "June 15, 2023",
                    time: "2:00 PM - 3:30 PM",
                  },
                  {
                    title: "Building Your Personal Brand",
                    date: "June 22, 2023",
                    time: "1:00 PM - 2:00 PM",
                  },
                  {
                    title: "Navigating Career Transitions",
                    date: "July 5, 2023",
                    time: "11:00 AM - 12:30 PM",
                  },
                ].map((event, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">{event.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {event.date}, {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
