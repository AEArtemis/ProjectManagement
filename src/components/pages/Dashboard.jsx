import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock } from "lucide-react";

export const Dashboard = () => {
  const [progress, setProgress] = useState(41);

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
        <div className="flex gap-2">
          <Button variant="outline">Import Data</Button>
          <Button>Add Project</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        {[
          { label: "Total Projects", value: 24 },
          { label: "Ended Projects", value: 10 },
          { label: "Running Projects", value: 12 },
          { label: "Pending Projects", value: 2, sub: "On Discuss" },
        ].map((item, i) => (
          <Card key={i} className="lg:col-span-3 sm:col-span-1 col-span-1">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-2xl font-bold text-foreground">{item.value}</p>
              <p className="text-sm text-muted-foreground">
                {item.sub ?? "Increased from last month"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Analytics */}
        <Card className="md:col-span-6 col-span-1">
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg mb-2 text-foreground">
              Project Analytics
            </h2>
            <div className="flex items-end justify-between h-32">
              {[75, 50, 90, 80, 60, 40, 20].map((height, i) => (
                <div
                  key={i}
                  className="w-6 bg-primary rounded"
                  style={{ height: `${height}%` }}
                ></div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progress */}
        <Card className="md:col-span-3 col-span-1">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-foreground">
              Project Progress
            </h2>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative w-24 h-24">
                <svg
                  className="absolute top-0 left-0 w-full h-full"
                  viewBox="0 0 36 36"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-muted"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-primary"
                    strokeDasharray="100, 100"
                    strokeDashoffset={`${100 - progress}`}
                    strokeLinecap="round"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-foreground">
                  {progress}%
                </span>
              </div>
              <div className="flex gap-2 text-sm">
                <Badge>Completed</Badge>
                <Badge variant="outline">In Progress</Badge>
                <Badge variant="secondary">Pending</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Time Tracker */}
        <Card className="md:col-span-3 col-span-1">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4 text-foreground">
              Time Tracker
            </h2>
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-primary" />
              <p className="text-2xl font-bold text-foreground">01:24:08</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Button size="sm">⏸</Button>
              <Button size="sm" variant="destructive">
                ⏹
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reminders */}
        <Card className="md:col-span-3 col-span-1">
          <CardContent className="p-4">
            <h2 className="font-semibold text-lg mb-2 text-foreground">
              Reminders
            </h2>
            <p className="text-sm text-muted-foreground">
              Meeting with Aro Company
            </p>
            <p className="font-bold text-foreground">02:00pm - 04:00pm</p>
            <Button className="mt-2 w-full">Start Meeting</Button>
          </CardContent>
        </Card>

        {/* Team Members */}
        <Card className="md:col-span-6 col-span-1">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg text-foreground">Team Members</h2>
              <Button size="sm">+ Add Member</Button>
            </div>
            <ul className="space-y-4">
              {[
                {
                  name: "Alexandra Deff",
                  task: "GitHub Project Repository",
                  status: "Completed",
                },
                {
                  name: "Edwin Adenike",
                  task: "Integrate Auth System",
                  status: "In Progress",
                },
                {
                  name: "Isaac Oluwatemiloriun",
                  task: "Search and Filter",
                  status: "In Progress",
                },
                {
                  name: "David Oshodi",
                  task: "Responsive Layout",
                  status: "Pending",
                },
              ].map((user, i) => (
                <li key={i} className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 min-w-0">
                    <Avatar className="h-9 w-9 shrink-0">
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col min-w-0">
                      <p className="text-sm font-medium text-foreground truncate text-left">
                        {user.name}
                      </p>
                      <p className="text-xs text-muted-foreground truncate text-left">
                        {user.task}
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      user.status === "Completed"
                        ? "default"
                        : user.status === "In Progress"
                        ? "outline"
                        : "secondary"
                    }
                    className="whitespace-nowrap"
                  >
                    {user.status}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
