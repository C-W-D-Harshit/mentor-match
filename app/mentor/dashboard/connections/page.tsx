import { DashboardHeader } from "../_components/DashboardHeader";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ConnectionsPage() {
  return (
    <MaxWidthWrapper>
      <div className="space-y-6 py-6">
        <DashboardHeader
          heading="Connections"
          text="Manage your mentorship requests and connections."
        />
        <Tabs defaultValue="received" className="w-full">
          <TabsList>
            <TabsTrigger value="received">Received Requests</TabsTrigger>
            <TabsTrigger value="sent">Sent Requests</TabsTrigger>
            <TabsTrigger value="active">Active Connections</TabsTrigger>
          </TabsList>
          <TabsContent value="received">
            <div className="grid gap-4">
              {receivedRequests.map((request) => (
                <RequestCard
                  key={request.id}
                  request={request}
                  type="received"
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sent">
            <div className="grid gap-4">
              {sentRequests.map((request) => (
                <RequestCard key={request.id} request={request} type="sent" />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="active">
            <div className="grid gap-4">
              {activeConnections.map((connection) => (
                <ConnectionCard key={connection.id} connection={connection} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
}

interface RequestCardProps {
  request: {
    id: number;
    name: string;
    avatar: string;
    title: string;
    message: string;
  };
  type: "received" | "sent";
}

function RequestCard({ request, type }: RequestCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={request.avatar} alt={request.name} />
          <AvatarFallback>
            {request.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{request.name}</CardTitle>
          <CardDescription>{request.title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{request.message}</p>
        {type === "received" ? (
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Decline</Button>
            <Button>Accept</Button>
          </div>
        ) : (
          <div className="flex justify-end">
            <Button variant="outline">Cancel Request</Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

interface ConnectionCardProps {
  connection: {
    id: number;
    name: string;
    avatar: string;
    title: string;
    duration: string;
  };
}

function ConnectionCard({ connection }: ConnectionCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar>
          <AvatarImage src={connection.avatar} alt={connection.name} />
          <AvatarFallback>
            {connection.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{connection.name}</CardTitle>
          <CardDescription>{connection.title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <Badge variant="secondary">Connected for {connection.duration}</Badge>
          <Button variant="outline">Manage Connection</Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Sample data (in a real app, this would come from an API or database)
const receivedRequests = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "/avatars/alice-johnson.jpg",
    title: "Frontend Developer",
    message:
      "I'd love to learn more about React and modern frontend development practices. Would you be willing to mentor me?",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "/avatars/bob-smith.jpg",
    title: "UX Designer",
    message:
      "I'm looking to improve my UX design skills and would appreciate your guidance. Can we connect?",
  },
];

const sentRequests = [
  {
    id: 3,
    name: "Carol Williams",
    avatar: "/avatars/carol-williams.jpg",
    title: "Data Scientist",
    message:
      "I'm impressed by your work in machine learning. I'd be grateful for the opportunity to learn from you.",
  },
];

const activeConnections = [
  {
    id: 4,
    name: "David Brown",
    avatar: "/avatars/david-brown.jpg",
    title: "Full Stack Developer",
    duration: "3 months",
  },
  {
    id: 5,
    name: "Eva Martinez",
    avatar: "/avatars/eva-martinez.jpg",
    title: "Product Manager",
    duration: "1 month",
  },
];
