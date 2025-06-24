import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem
} from "@/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Archive, Hourglass, MoreVertical, Plus, ToyBrick } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalMember, setShowModalMember] = useState(false);
  const [roleErrors, setRoleErrors] = useState({});
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userRoles, setUserRoles] = useState({});
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [projectColor, setProjectColor] = useState("#7F00FF");
  const toggleUser = (user) => {
    setSelectedUsers((prev) =>
      prev.some((u) => u.id === user.id)
        ? prev.filter((u) => u.id !== user.id)
        : [...prev, user]
    );
    setUserRoles((prev) => {
      if (prev[user.id]) {
        const copy = { ...prev };
        delete copy[user.id];
        return copy;
      }
      return prev;
    });
  };

  const handleRoleChange = (userId, role) => {
    setUserRoles((prev) => ({ ...prev, [userId]: role }));
  };

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "Diana" },
    { id: 5, name: "Mark" },
    { id: 6, name: "Ace" },
  ];

  // projects & search
  const [searchTerm, setSearchTerm] = useState("");   
  const projects = [
    {
      id: 1,
      name: "Planora",
      members: 3,
      duration: "10 Months",
      image: "/images/ProjectImage.png",
    },
    {
      id: 2,
      name: "Ecommerce Revamp",
      members: 5,
      duration: "8 Months",
      image: "/images/ProjectImage.png",
    },
    {
      id: 3,
      name: "Project Phoenix",
      members: 2,
      duration: "6 Months",
      image: "/images/ProjectImage.png",
    },
    {
      id: 4,
      name: "Accenture",
      members: 4,
      duration: "12 Months",
      image: "/images/ProjectImage.png",
    },
  ];

  const filteredProjects = projects.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Projects</h1>
        <div className="flex gap-2">
          {/* <Button variant="outline">Import Data</Button> */}
          <Button className="flex items-center gap-2 cursor-pointer" variant="outline" onClick={() => setShowModal(true)} >
            <ToyBrick size={16} />
            Create Project
          </Button>
          <Button
              className="flex items-center gap-2 hover:bg-red-600 hover:text-white transition-colors duration-200 cursor-pointer"
            >
            <Archive size={16} />
              Archive
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-x-2">
        {/* Filter Dropdown */}
        {/* <Select defaultValue="all">
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select> */}

        {/* Search Input */}
        <Input
          type="text"
          placeholder="Search project name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-120 border border-border bg-background text-foreground px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProjects.map((project, index) => (
          <Card key={project.id} className="shadow-sm relative overflow-visible">
            {/* Top Right Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="absolute top-2 right-2 z-10 p-1 rounded hover:bg-muted transition">
                  <MoreVertical className="w-5 h-5 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-40" align="end">
                <DropdownMenuItem
                  onClick={() => {
                    setShowModalMember(true);
                  }}
                >
                  Add Member
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
                <DropdownMenuItem>Archive</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* Card Content */}
            <CardContent className="pt-2 space-y-3">
              <div className="flex justify-center">
                <div className="w-[150px] h-[150px] rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} Thumbnail`}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
              <div>
                <h5 className="text-lg font-medium text-foreground">{project.name}</h5>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center -space-x-2">
                  <img src="/images/Avatar.jpg" className="w-8 h-8 rounded-full border-2 border-background" />
                  <img src="/images/Avatar.jpg" className="w-8 h-8 rounded-full border-2 border-background" />
                  <span className="text-xs font-medium text-muted-foreground pl-2">
                    +{project.members} more
                  </span>
                </div>
                <span className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <Hourglass className="w-3 h-3" />
                  <span>{project.duration}</span>
                </span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[55%]"></div>
              </div>
            </CardContent>
          </Card>

        ))}
      </div>

      {/* Add Project Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="w-[600px] max-w-[95vw] max-h-[90vh] p-6">
          <DialogHeader className="pb-4">
            <DialogTitle>Create New Project</DialogTitle>
          </DialogHeader>

          <ScrollArea className="max-h-[calc(90vh-160px)] pr-4">
            <div className="space-y-4">
              {/* Project Name */}
              <div>
                <Label className="block text-sm font-medium text-muted-foreground mb-1">Project Name</Label>
                <Input
                  id="project-name"
                  placeholder="Enter project name"
                  className="focus-visible:ring-1"
                />
              </div>

              {/* Project Category & Color*/}
              <div className="flex flex-row gap-4">
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1">
                   Category
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="research">Research</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1">
                    Project Color
                  </Label>
                  <Input
                    type="color"
                    className="w-20 h-10 p-0 border border-gray-300 rounded cursor-pointer"
                    onChange={(e) => setProjectColor(e.target.value)}
                    value={projectColor}
                  />
                </div>
              </div>
              
              {/* Image + Priority */}
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1">Project Image</Label>
                  <Input type="file" accept="image/*" />
                </div>
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1">Priority</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Dates + Notification */}
              <div className="flex flex-row flex-wrap gap-4">
                <div className="w-40">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1">Start Date</Label>
                  <Input type="date" className="focus-visible:ring-1"/>
                </div>
                <div className="w-40">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1">End Date</Label>
                  <Input type="date" className="focus-visible:ring-1"/>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <Label className="block text-sm font-medium text-muted-foreground mb-1">Notification Sent</Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select notification" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All</SelectItem>
                      <SelectItem value="member">Member</SelectItem>
                      <SelectItem value="teamLeader">Team Leader</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label className="block text-sm font-medium text-muted-foreground mb-1">Description (Optional)</Label>
                <Textarea rows={3} placeholder="Add project description..." className="focus-visible:ring-1"/>
              </div>
            </div>
          </ScrollArea>

          {/* Footer Buttons */}
          <div className="flex justify-end space-x-2 pr-4">
            <Button variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowModal(false)}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Add Member Modal */}
      <Dialog open={showModalMember} onOpenChange={setShowModalMember}>
        <DialogContent className="w-[600px] max-h-[600px] p-6">
          <DialogHeader>
            <DialogTitle>Add Member</DialogTitle>
          </DialogHeader>

          <ScrollArea className="max-h-[350px] pr-4 space-y-4">
            <div className="border border-muted rounded-md p-2">
              <Command>
                <CommandInput placeholder="Search users..." />
                <ScrollArea className="max-h-[130px] overflow-y-auto">
                  <CommandList>
                    <CommandEmpty>No users found.</CommandEmpty>
                    <CommandGroup>
                      {users.map((user) => (
                        <CommandItem
                          key={user.id}
                          onSelect={() => toggleUser(user)}
                          className={`flex justify-between items-center ${
                            selectedUsers.some((u) => u.id === user.id)
                              ? "bg-muted"
                              : ""
                          }`}
                        >
                          <span>{user.name}</span>
                          {selectedUsers.some((u) => u.id === user.id) && (
                            <span className="text-green-600 font-semibold">✓</span>
                          )}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </ScrollArea>
              </Command>
            </div>

            {selectedUsers.length > 0 && (
              <div className="space-y-2 pt-4">
                <h5 className="text-sm font-semibold">Assign Roles</h5>
                {selectedUsers.map((user) => (
                  <div key={user.id} className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="w-24">{user.name}</span>
                      <Select
                        value={userRoles[user.id] || ""}
                        onValueChange={(value) => {
                          handleRoleChange(user.id, value);
                          setRoleErrors((prev) => {
                            const copy = { ...prev };
                            delete copy[user.id];
                            return copy;
                          });
                        }}
                      >
                        <SelectTrigger className="w-[200px]">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="developer">Developer</SelectItem>
                          <SelectItem value="designer">Designer</SelectItem>
                          <SelectItem value="manager">Manager</SelectItem>
                          <SelectItem value="tester">Tester</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {roleErrors[user.id] && (
                      <p className="text-xs text-red-600 ml-28">
                        Please select a role for {user.name}.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </ScrollArea>

          <div className="flex justify-end space-x-2 pt-4">
            <Button variant="outline" onClick={() => setShowModalMember(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                let errors = {};
                selectedUsers.forEach((user) => {
                  if (!userRoles[user.id]) {
                    errors[user.id] = true;
                  }
                });

                if (Object.keys(errors).length > 0) {
                  setRoleErrors(errors);
                  return;
                }

                console.log("Selected Users:", selectedUsers);
                console.log("User Roles:", userRoles);

                setShowModalMember(false);
                setSelectedUsers([]);
                setUserRoles({});
                setRoleErrors({});
              }}
            >
              Add Members
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
