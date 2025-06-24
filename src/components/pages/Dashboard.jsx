import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Clock, Pencil } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const Dashboard = () => {
  const [progress, setProgress] = useState(41);

  // One time Role
  const [role, setRole] = useState("employee"); 
  const [confirmedRole, setConfirmedRole] = useState(null);
  const [confirmText, setConfirmText] = useState("");
  const instructions = {
    employee: "You’ll be able to manage tasks, track time, and collaborate with your team.",
    company: "You’ll manage employees, assign projects, and oversee progress across the board.",
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: "Planora",
      avatar: "/images/Avatar.jpg",
      assignedTo: "Mark",
      dateStart: "2025-06-01",
      dateEnd: "2025-06-01",
      progress: 80,
    },
    {
      id: 2,
      projectName: "Ecommerce Revamp",
      avatar: "/images/Avatar.jpg",
      assignedTo: "Ace",      
      dateStart: "2025-06-01",
      dateEnd: "2025-06-01",
      progress: 45,
    },
    {
      id: 3,
      projectName: "Project Phoenix",
      avatar: "/images/Avatar.jpg",
      assignedTo: "Candy",
      dateStart: "2025-06-01",
      dateEnd: "2025-06-01",
      progress: 30,
    },
    {
      id: 4,
      projectName: "Accenture",
      avatar: "/images/Avatar.jpg",
      assignedTo: "Candy",
      dateStart: "2025-06-01",
      dateEnd: "2025-06-01",
      progress: 100,
    },
    {
      id: 5,
      projectName: "Sample1",
      avatar: "/images/Avatar.jpg",
      assignedTo: "Ace",
      dateStart: "2025-06-01",
      dateEnd: "2025-06-01",
      progress: 50,
    },
    {
      id: 6,
      projectName: "Sample2",
      avatar: "/images/Avatar.jpg",
      assignedTo: "Mark",
      dateStart: "2025-06-01",
      dateEnd: "2025-06-01",
      progress: 60,
    },        
  ]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // Filter & sort tickets
  const filteredTickets = projects
    .filter((project) =>
      Object.values(project).some((val) =>
        val.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  // Pagination calculations
  const totalPages = Math.ceil(filteredTickets.length / itemsPerPage);
  const paginatedTickets = filteredTickets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Masking while type is null or empty */}
        {/* {!confirmedRole && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-zinc-800 rounded-xl p-8 shadow-lg text-center space-y-6 w-[90%] max-w-md">
            <h2 className="text-2xl font-semibold text-foreground">Continue as</h2>

            <div className="flex justify-center items-center gap-4">
              <Button
                onClick={() => setRole("employee")}
                className={`w-40 ${role === "employee" ? "ring-2 ring-primary" : ""}`}
              >
                Employee
              </Button>
              <Button
                onClick={() => setRole("company")}
                variant={role === "company" ? "default" : "outline"}
                className={`w-40 ${role === "company" ? "ring-2 ring-primary" : ""}`}
              >
                Company
              </Button>
            </div>

            <div className="text-sm text-muted-foreground mt-4">
              <p>{instructions[role]}</p>
              
              <div className="mt-4 space-y-4">
                <Input
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder='Type "Confirm" to continue'
                  className="w-full"
                />
                <Button
                  onClick={() => setConfirmedRole(role)}
                  disabled={confirmText !== "Confirm"} 
                  className="w-full"
                >
                  Save and Continue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>

      </div>
      {/* Company Image */}
      <Card className="md:col-span-6 col-span-1 h-100 overflow-hidden rounded-xl p-2">
        <img
          src="/images/company-images/CompanyImageSample.jpg"
          alt="Dashboard Banner"
          className="w-full h-full object-fill rounded-md"
        />
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-4">
        <Card className="col-span-1 lg:col-span-3">
          <CardContent className="p-2 flex items-center justify-center gap-4">
              <div className="flex items-center justify-center">
              <img
                  src="/images/icons/IconProjects.png"
                  alt="Card 1"
                  className="w-15 h-15 object-contain rounded-sm"
              />
              </div>
              <div className="flex flex-col items-center justify-center text-left">
                  <p className="text-md font-bold text-foreground">Projects</p>
                  <div className="flex justify-center items-center h-full">
                      <span className="bg-orange-100 text-orange-800 py-0.5 rounded text-xs font-medium p-2">
                          04
                      </span>
                  </div>
              </div>
          </CardContent>
      </Card>
        <Card className="col-span-1 lg:col-span-3">
          <CardContent className="p-2 flex items-center justify-center gap-4">
              <div className="flex items-center justify-center">
              <img
                  src="/images/icons/IconTasks.png"
                  alt="Card 1"
                  className="w-15 h-15 object-contain rounded-sm"
              />
              </div>
              <div className="flex flex-col items-center justify-center text-left">
                  <p className="text-md font-bold text-foreground">Tasks</p>
                  <div className="flex justify-center items-center h-full">
                      <span className="bg-orange-100 text-orange-800 py-0.5 rounded text-xs font-medium p-2">
                          03
                      </span>
                  </div>
              </div>
          </CardContent>
      </Card>
      <Card className="col-span-1 lg:col-span-3">
          <CardContent className="p-2 flex items-center justify-center gap-4">
              <div className="flex items-center justify-center">
              <img
                  src="/images/icons/IconDepartments.png"
                  alt="Card 1"
                  className="w-15 h-15 object-contain rounded-sm"
              />
              </div>
              <div className="flex flex-col items-center justify-center text-left">
                  <p className="text-md font-bold text-foreground">Departments</p>
                  <div className="flex justify-center items-center h-full">
                      <span className="bg-orange-100 text-orange-800 py-0.5 rounded text-xs font-medium p-2">
                          01
                      </span>
                  </div>
              </div>
          </CardContent>
      </Card>
      
      <Card className="col-span-1 lg:col-span-3">
          <CardContent className="p-2 flex items-center justify-center gap-4">
              <div className="flex items-center justify-center">
              <img
                  src="/images/icons/IconUsers.png"
                  alt="Card 1"
                  className="w-15 h-15 object-contain rounded-sm"
              />
              </div>
              <div className="flex flex-col items-center justify-center text-left">
                  <p className="text-md font-bold text-foreground">Members</p>
                  <div className="flex justify-center items-center h-full">
                      <span className="bg-orange-100 text-orange-800 py-0.5 rounded text-xs font-medium p-2">
                          04
                      </span>
                  </div>
              </div>
          </CardContent>
      </Card>
      </div>

      {/* Middle Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Analytics */}
        <Card className="md:col-span-6 col-span-1 p-4">
          <CardContent>
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
          <CardContent className="">
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
              </div>
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

      </div>
      <Card className="md:col-span-6 col-span-1 h-full flex flex-col overflow-hidden rounded-xl p-4 pt-0">
        <CardContent className="p-4">
          <h2 className="font-semibold text-lg mb-2 text-foreground text-left">
            Project Information
          </h2>
          <div className='pt-2 pb-2'>
            <Input
              type="text"
              placeholder="Search..."
              className="w-120 border border-border bg-background text-foreground px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
          {/* Ticket Table */}
          <div className="border-b overflow-auto">
            <Table className="table-auto min-w-full border-x-0">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-left whitespace-nowrap w-70" style={{ minWidth: "70px" }}>
                    Title
                  </TableHead>
                  <TableHead onClick={() => handleSort("subject")} className="cursor-pointer text-left w-20" style={{ minWidth: "40px" }}>
                    Date Start
                  </TableHead>
                  <TableHead onClick={() => handleSort("assignedTo")} className="cursor-pointer text-left whitespace-nowrap w-30" style={{ minWidth: "30px" }}>
                    Date End
                  </TableHead>
                  <TableHead onClick={() => handleSort("status")} className="cursor-pointer text-left whitespace-nowrap w-30" style={{ minWidth: "30px" }}>
                    Leader
                  </TableHead>
                  <TableHead onClick={() => handleSort("date")} className="cursor-pointer text-left whitespace-nowrap w-30" style={{ minWidth: "30px" }}>
                    Completion
                  </TableHead>
                  {/* <TableHead className="text-left whitespace-nowrap w-40" style={{ minWidth: "160px" }}>
                    Action
                  </TableHead> */}
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedTickets.map((ticket) => (
                  <TableRow key={ticket.id}>
                    <TableCell className="text-left whitespace-nowrap">{ticket.projectName}</TableCell>
                    <TableCell className="text-left">{ticket.dateStart}</TableCell>
                    <TableCell className="text-left whitespace-nowrap">
                      {ticket.dateEnd}
                    </TableCell>
                    <TableCell className="text-left whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <img
                          src={ticket.avatar}
                          alt={ticket.assignedTo}
                          className="w-6 h-6 rounded-full object-cover"
                        />
                        <span>{ticket.assignedTo}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-left whitespace-nowrap">
                      <div className="flex items-center gap-2 w-full">
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-primary h-full"
                            style={{ width: `${ticket.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground min-w-[30px] text-right">
                          {ticket.progress}%
                        </span>
                      </div>
                    </TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center space-x-4 mt-4">
            <Button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            >
              Previous
            </Button>
            <span>
              Page {currentPage} of {totalPages || 1}
            </span>
            <Button
              disabled={currentPage === totalPages || totalPages === 0}
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            >
              Next
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
