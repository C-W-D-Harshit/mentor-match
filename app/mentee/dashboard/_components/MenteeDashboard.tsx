"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calendar,
  MessageSquare,
  Book,
  User,
  Users,
  Search,
  ArrowRight,
} from "lucide-react";
import CurrentMentorCard from "./CurrentMentorCard";

export default function MenteeDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mentors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25</div>
            <p className="text-xs text-muted-foreground">+4 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Upcoming Sessions
            </CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Next session in 2 days
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
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">
              2 new since yesterday
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <CurrentMentorCard />

        <Card>
          <CardHeader>
            <CardTitle>Recommended Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Advanced React Patterns</p>
                  <p className="text-sm text-muted-foreground">
                    Article • 15 min read
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Node.js Best Practices</p>
                  <p className="text-sm text-muted-foreground">
                    Video • 45 min watch
                  </p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Book className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">Intro to AWS for Developers</p>
                  <p className="text-sm text-muted-foreground">
                    Course • 2 hours
                  </p>
                </div>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-4">
              View All Resources
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/discover" passHref>
              <Button className="w-full">
                <Search className="mr-2 h-4 w-4" /> Discover Mentors
              </Button>
            </Link>
            <Link href="/matchmaking" passHref>
              <Button className="w-full">
                <Users className="mr-2 h-4 w-4" /> View Matches
              </Button>
            </Link>
            <Button variant="outline" className="w-full">
              <User className="mr-2 h-4 w-4" /> Update Profile
            </Button>
            <Button variant="outline" className="w-full">
              <MessageSquare className="mr-2 h-4 w-4" /> Message Center
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Web Development Workshop</p>
                <p className="text-sm text-muted-foreground">
                  June 15, 2023 • 2:00 PM
                </p>
              </div>
              <Button variant="ghost" size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </li>
            <li className="flex items-center justify-between">
              <div>
                <p className="font-medium">Career Growth Seminar</p>
                <p className="text-sm text-muted-foreground">
                  June 20, 2023 • 3:30 PM
                </p>
              </div>
              <Button variant="ghost" size="sm">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </li>
          </ul>
          <Button variant="outline" className="w-full mt-4">
            View All Events
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
