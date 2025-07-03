import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Calendar, Paperclip, ClipboardPlus, Archive } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";

export const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState("New");
  const [statusFilter, setStatusFilter] = useState("all");
  // search
  const [searchTerm, setSearchTerm] = useState("");

  const allTasks = [
    {
      id: "#PLN12045214",
      user: "John Doe",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "06/06/2025",
      comments: 5,
      attachments: 5,
      color: "bg-green-500",
      status: "Completed"
    },
    {
      id: "#PLN12039984",
      user: "Jane Doe",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "06/06/2025",
      comments: 5,
      attachments: 5,
      color: "bg-red-500",
      status: "In Progress"
    },
    {
      id: "#PLN12043924",
      user: "Mike Doe",
      title: "Lorem ipsum dolor sit amet",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.",
      date: "06/06/2025",
      comments: 5,
      attachments: 5,
      color: "bg-orange-500",
      status: "Completed"
    }
  ];

  const filteredTasks = allTasks.filter((task) => {
    const matchesSearch =
      task.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "completed" && task.status.toLowerCase() === "completed") ||
      (statusFilter === "in-progress" && task.status.toLowerCase() === "in progress");

    return matchesSearch && matchesStatus;
  });

  
  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
        {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Tasks</h1>
       <div className="flex gap-2">
          <Button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 cursor-pointer"
            variant="outline"
          >
            <ClipboardPlus size={16} />
            Create Task
          </Button>
          <Button
              className="flex items-center gap-2 hover:bg-red-600 hover:text-white transition-colors duration-200 cursor-pointer"
            >
            <Archive size={16} />
              Archive
          </Button>
        </div>

      </div>
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left: Profile Info */}
          <div className="md:col-span-8 space-y-4">
            {/* top content if needed */}
            {/* <Card className="shadow-sm">
              <CardContent className="p-6">
                
              </CardContent>
            </Card> */}
            <div className="flex items-center gap-x-2 pb-2">
              {/* Filter Dropdown */}
              <Select value={statusFilter} onValueChange={(val) => setStatusFilter(val)}>
                <SelectTrigger className="w-[130px]">
                  <SelectValue placeholder="Filter" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>

              {/* Search Input */}
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-border bg-background text-foreground px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1 */}
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task, i) => (
                  <Link to="/tickets/ticket-detail">
                    <Card key={i} className="flex flex-col h-full overflow-hidden p-0">
                      <div className="justify-between p-4 pb-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="text-md font-bold bg-blue-100 px-2 py-1 rounded text-muted-foreground inline-block max-w-[220px] truncate overflow-hidden whitespace-nowrap">
                              {task.id} 
                            </span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="relative w-11 h-11 mb-1 group">
                              <div className="absolute inset-0 rounded-full border-2 border-violet-500 border-b-transparent border-l-transparent animate-[spin_4s_linear_infinite]" />
                              <img
                                src="/images/Avatar.jpg"
                                alt="Profile"
                                className="w-9 h-9 rounded-full absolute top-1 left-1 z-10"
                              />
                              <span className="absolute top-1/2 right-full mr-2 transform -translate-y-1/2 rounded text-xs px-2 py-1 opacity-0 pointer-events-none transition-opacity group-hover:opacity-100 whitespace-nowrap z-20">
                                {task.user}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-left py-2">
                          <p className="text-sm font-bold text-foreground line-clamp-4">
                            {task.title}
                          </p>
                          <p className="text-sm text-foreground line-clamp-4">
                            {task.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center space-x-2">
                            <span className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              <span>{task.date}</span>
                            </span>
                            <span className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <MessageCircle className="w-3 h-3" />
                              <span>{task.comments}</span>
                            </span>
                            <span className="flex items-center space-x-1 text-xs text-muted-foreground">
                              <Paperclip className="w-3 h-3" />
                              <span>{task.attachments}</span>
                            </span>
                          </div>
                          <span className="text-xs font-bold bg-violet-100 text-violet-800 px-2 py-1 rounded text-foreground">
                            Planora
                          </span>
                        </div>
                      </div>
                      <div className={`h-1 ${task.color} w-full`} />
                    </Card>
                  </Link>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">No tasks found.</p>
              )}
            </div>
          </div>

          {/* Right: Recent Activities pt-11 */}
          <div className="lg:col-span-4 md:col-span-8">
            <Card className="w-full shadow-sm">
              <CardContent className="p-6 pt-0 flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
                  <Card className="col-span-1 rounded-none">
                    <ScrollArea className="h-[400px]">
                      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
                          <div>
                            <div className="flex items-center gap-4 pb-2">
                                <div className="flex items-center justify-center">
                                    <img
                                    src="/images/Avatar.jpg"
                                    alt="Card 1"
                                    className="w-12 h-12 object-contain rounded-sm"
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-left">
                                    <p className="text-md font-bold text-foreground">John Doe</p>
                                    <p className="text-sm text-muted-foreground">3 hours ago</p>
                                </div>
                            </div>
                            <div className="text-left pb-2 flex items-center gap-2">
                              <span>✅</span>
                              <p className="text-sm font-bold text-foreground">Completed a Task</p>
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] bg-muted w-full" />
                          </div>
                          <div>
                            <div className="flex items-center gap-4  pb-2">
                                <div className="flex items-center justify-center">
                                    <img
                                    src="/images/Avatar.jpg"
                                    alt="Card 1"
                                    className="w-12 h-12 object-contain rounded-sm"
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-left">
                                    <p className="text-md font-bold text-foreground">Ace</p>
                                    <p className="text-sm text-muted-foreground">4 hours ago</p>
                                </div>
                            </div>
                            <div className="text-left pb-2 flex items-center gap-2">
                              <span>🎫</span>
                              <p className="text-sm font-bold text-foreground">Added a Ticket</p>
                            </div>

                            {/* Divider */}
                            <div className="h-[1px] bg-muted w-full" />
                          </div>

                          <div>
                            <div className="flex items-center gap-4 pb-2">
                                <div className="flex items-center justify-center">
                                    <img
                                    src="/images/Avatar.jpg"
                                    alt="Card 1"
                                    className="w-12 h-12 object-contain rounded-sm"
                                    />
                                </div>
                                <div className="flex flex-col justify-center text-left">
                                    <p className="text-md font-bold text-foreground">Mark</p>
                                    <p className="text-sm text-muted-foreground">5 hours ago</p>
                                </div>
                            </div>
                            <div className="text-left pb-2 flex items-center gap-2">
                              <span>📝</span>
                              <p className="text-sm font-bold text-foreground">Added a Task</p>
                            </div>
                            {/* Divider */}
                            <div className="h-[1px] bg-muted w-full" />
                          </div>
                      </CardContent>
                    </ScrollArea>
                  </Card>
              </CardContent>
            </Card>
          </div>
        </div>
        {/* Modal Tasks*/}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent
            className="w-[600px] max-h-[600px] p-6"
            onInteractOutside={(event) => event.preventDefault()}
          >
            <DialogHeader className="">
              <DialogTitle>Add New Task</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[350px] pr-2 space-y-4 pr-5">
              <div className="">
                <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                  Project
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Project" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mark">Project BLUE</SelectItem>
                    <SelectItem value="candy">Ecommerce Revamp</SelectItem>
                    <SelectItem value="ace">Project Phoenix</SelectItem>
                    <SelectItem value="mark">Accenture</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                    Type
                  </Label>
                  <Select defaultValue="New" onValueChange={(value) => setType(value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="New">New</SelectItem>
                      <SelectItem value="From Ticket">From Ticket</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                    Ticket
                  </Label>
                  <Select disabled={type === "New"}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Ticket" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PLN12039123">PLN12039123</SelectItem>
                      <SelectItem value="PLN12036723">PLN12036723</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
              />
              <Label className="block text-sm font-medium text-muted-foreground pt-4">
                Description
              </Label>
              <Textarea
                className="w-full p-2 border border-muted rounded-md min-h-[60px] focus-visible:ring-1"
                rows={2}
              />
  
              <div className="flex gap-4 pt-2">
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                    Attachment
                  </Label>
                  <Input type="file" accept="*" />
                </div>
                <div className="flex-1 space-y-1">
                  <label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                    Assign Date
                  </label>
                  <Input id="assign-date" type="date" className="w-36" />
                </div>
              </div>
  
              <div className="flex gap-4 pt-2">
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                    Priority
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mark">High</SelectItem>
                      <SelectItem value="candy">Medium</SelectItem>
                      <SelectItem value="ace">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                    Status
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="inProgress">In Progress</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div >
                <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                  Assign to
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mark">Mark</SelectItem>
                    <SelectItem value="candy">Candy</SelectItem>
                    <SelectItem value="ace">Ace</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </ScrollArea>
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button type="submit">Submit</Button>
            </div>
          </DialogContent>
        </Dialog>
    </div>
  )
}
