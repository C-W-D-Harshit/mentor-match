"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useMediaQuery } from "@/hooks/use-media-query";

// Mock data for users
const users = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Mentor",
    skills: ["React", "Node.js", "Python"],
    interests: ["Web Development", "Machine Learning"],
    imageUrl: "/placeholder.svg?height=100&width=100",
    experience: "5-10 years",
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Mentee",
    skills: ["JavaScript", "HTML", "CSS"],
    interests: ["Frontend Development", "UX Design"],
    imageUrl: "/placeholder.svg?height=100&width=100",
    experience: "1-3 years",
  },
  {
    id: 3,
    name: "Carol Williams",
    role: "Mentor",
    skills: ["Java", "Spring Boot", "MySQL"],
    interests: ["Backend Development", "Database Design"],
    imageUrl: "/placeholder.svg?height=100&width=100",
    experience: "10+ years",
  },
  {
    id: 4,
    name: "David Brown",
    role: "Mentee",
    skills: ["Python", "Data Analysis"],
    interests: ["Data Science", "Machine Learning"],
    imageUrl: "/placeholder.svg?height=100&width=100",
    experience: "3-5 years",
  },
];

const allSkills = Array.from(
  new Set(users.flatMap((user) => user.skills))
).sort();
const allInterests = Array.from(
  new Set(users.flatMap((user) => user.interests))
).sort();
const experienceLevels = [
  "0-1 years",
  "1-3 years",
  "3-5 years",
  "5-10 years",
  "10+ years",
];

export default function UserDiscovery() {
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [skillFilters, setSkillFilters] = useState<string[]>([]);
  const [interestFilters, setInterestFilters] = useState<string[]>([]);
  const [experienceFilter, setExperienceFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 768px)");

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        user.interests.some((interest) =>
          interest.toLowerCase().includes(searchTerm.toLowerCase())
        )) &&
      (roleFilter === "all" || user.role === roleFilter) &&
      (skillFilters.length === 0 ||
        user.skills.some((skill) => skillFilters.includes(skill))) &&
      (interestFilters.length === 0 ||
        user.interests.some((interest) =>
          interestFilters.includes(interest)
        )) &&
      (experienceFilter === "all" || user.experience === experienceFilter)
  );

  const FilterContent = () => (
    <ScrollArea className="h-[calc(100vh-200px)] md:h-[500px] px-4">
      <div className="space-y-6 pr-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Role</h3>
          <Select value={roleFilter} onValueChange={setRoleFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Filter by role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Roles</SelectItem>
              <SelectItem value="Mentor">Mentors</SelectItem>
              <SelectItem value="Mentee">Mentees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Experience Level</h3>
          <Select value={experienceFilter} onValueChange={setExperienceFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Select experience" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Experience Levels</SelectItem>
              {experienceLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Skills</h3>
          <div className="grid grid-cols-1 gap-3">
            {allSkills.map((skill) => (
              <div key={skill} className="flex items-center space-x-3">
                <Checkbox
                  id={`skill-${skill}`}
                  checked={skillFilters.includes(skill)}
                  onCheckedChange={(checked) => {
                    setSkillFilters(
                      checked
                        ? [...skillFilters, skill]
                        : skillFilters.filter((s) => s !== skill)
                    );
                  }}
                />
                <Label
                  htmlFor={`skill-${skill}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {skill}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="text-sm font-medium">Interests</h3>
          <div className="grid grid-cols-1 gap-3">
            {allInterests.map((interest) => (
              <div key={interest} className="flex items-center space-x-3">
                <Checkbox
                  id={`interest-${interest}`}
                  checked={interestFilters.includes(interest)}
                  onCheckedChange={(checked) => {
                    setInterestFilters(
                      checked
                        ? [...interestFilters, interest]
                        : interestFilters.filter((i) => i !== interest)
                    );
                  }}
                />
                <Label
                  htmlFor={`interest-${interest}`}
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {interest}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );

  const activeFiltersCount = [
    roleFilter !== "all" ? 1 : 0,
    skillFilters.length > 0 ? 1 : 0,
    interestFilters.length > 0 ? 1 : 0,
    experienceFilter !== "all" ? 1 : 0,
  ].reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name, skills, or interests"
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {isDesktop ? (
          <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="relative">
                <Filter className="mr-2 h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Filter Users</DialogTitle>
                <DialogDescription>
                  Set your preferences to find the perfect match.
                </DialogDescription>
              </DialogHeader>
              <FilterContent />
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DrawerTrigger asChild>
              <Button variant="outline" className="relative">
                <Filter className="mr-2 h-4 w-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="text-left">
                <DrawerTitle>Filter Users</DrawerTitle>
                <DrawerDescription>
                  Set your preferences to find the perfect match.
                </DrawerDescription>
              </DrawerHeader>
              <FilterContent />
              <DrawerFooter className="pt-2">
                <DrawerClose asChild>
                  <Button variant="outline">Close</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <Card
            key={user.id}
            className="group hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user.imageUrl} alt={user.name} />
                <AvatarFallback>
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                  {user.name}
                </CardTitle>
                <Badge
                  variant={user.role === "Mentor" ? "default" : "secondary"}
                >
                  {user.role}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {user.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="rounded-md"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {user.interests.map((interest) => (
                      <Badge
                        key={interest}
                        variant="outline"
                        className="rounded-md"
                      >
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Experience
                  </h3>
                  <p className="text-sm">{user.experience}</p>
                </div>
                <Button className="w-full mt-2 group-hover:bg-primary/90 transition-colors duration-200">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-lg font-semibold mb-2">No users found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search terms to find more users.
          </p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchTerm("");
              setRoleFilter("all");
              setSkillFilters([]);
              setInterestFilters([]);
              setExperienceFilter("all");
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
}
