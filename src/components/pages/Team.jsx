import React, { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, University, Trash2, Archive } from "lucide-react";
import { Link } from "react-router-dom";
export const Team = () => {
  const [showModal, setShowModal] = useState(false);

  // team members
  const members = [
    { id: 1, name: "John Doe", role: "Software Developer", department: "Software Develpoment Department", avatar: "/images/Avatar.jpg" },
    { id: 2, name: "Jane Smith", role: "Product Manager", department: "Software Develpoment Department",avatar: "/images/Avatar.jpg" },
    { id: 3, name: "Alice Johnson", role: "UX Designer", department: "Software Develpoment Department",avatar: "/images/Avatar.jpg" },
    { id: 4, name: "Bob Brown", role: "QA Engineer", department: "Software Develpoment Department",avatar: "/images/Avatar.jpg" },
  ];

  // filtered list'
  const [searchTerm, setSearchTerm] = useState("");
  const filteredMembers = members.filter((member) => {
  const search = searchTerm.toLowerCase();
  return (
    member.name.toLowerCase().includes(search) ||
    member.role.toLowerCase().includes(search) ||
    member.department.toLowerCase().includes(search)
  );
});
  // for removing member
  const [confirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [memberToRemove, setMemberToRemove] = useState(null);
  const handleRemoveMember = (id) => {
    setMembers((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Team</h1>
        <div className="flex gap-2">
          <Button className="flex items-center gap-2 cursor-pointer" variant="outline" onClick={() => setShowModal(true)}>
            <UserPlus size={16} />
            Add Member
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
        <Select defaultValue="all">
          <SelectTrigger className="w-[130px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
          </SelectContent>
        </Select>

        {/* Search Input */}
        <Input
          type="text"
          placeholder="Search name, role, or department..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-120 border border-border bg-background text-foreground px-2 py-1 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMembers.map((member) => (
          <div key={member.id} className="space-y-4">
            <Card className="shadow-sm relative">
              <button
                onClick={() => {
                  setMemberToRemove(member.id);
                  setConfirmDialogOpen(true);
                }}
                className="absolute top-0 right-2 text-2xl text-muted-foreground hover:text-red-600 transition-colors"
              >
                &times;
              </button>

              <CardContent>
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.avatar}
                    alt={`${member.name} Avatar`}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4 shadow-md"
                  />
                  <h2 className="text-lg font-semibold text-foreground">{member.name}</h2>
                  <p className="text-sm font-bold text-foreground">{member.department}</p>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <div className="pt-2">
                    <Link to="/profile">
                      <Button>Profile</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Modal Add Member */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent
          className="w-full max-w-[95%] sm:max-w-[500px] md:max-w-[600px] max-h-[90vh] p-4 sm:p-6"
          onPointerDownOutside={(e) => e.preventDefault()} 
        >
          <DialogHeader className="pb-4">
            <DialogTitle>Add Member</DialogTitle>
          </DialogHeader>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label className="block text-sm font-medium text-muted-foreground mb-1">
                  User Type
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="New">New</SelectItem>
                    <SelectItem value="Existing">Existing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          <ScrollArea className="max-h-[50vh] sm:max-h-[350px] pr-2 space-y-4 pr-4">
            <Label className="block text-sm font-medium text-muted-foreground">
              Name
            </Label>
            <Input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
            />

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <div className="flex-1">
                <Label className="block text-sm font-medium text-muted-foreground">
                  Email
                </Label>
                <Input
                  type="text"
                  placeholder="Email Address"
                  className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
                />
              </div>
              <div className="flex-1">
                <Label className="block text-sm font-medium text-muted-foreground">
                  Phone
                </Label>
                <Input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
                />
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <div className="flex-1">
                <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                  Department
                </Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mark">Software Developer Department</SelectItem>
                    <SelectItem value="candy">System Support Department</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-1">
                <Label className="block text-sm font-medium text-muted-foreground mb-1 pt-2">
                  Position
                </Label>
                <Input
                  type="text"
                  placeholder="Position"
                  className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
                />
              </div>
            </div>
            {/* Permissions Checkboxes */}
            <div className="pt-4">
              <Label className="block text-sm font-medium text-muted-foreground mb-2">
                Permissions
              </Label>
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

      {/* Confirmation to remove member */}
      <Dialog open={confirmDialogOpen} onOpenChange={setConfirmDialogOpen}>
        <DialogContent className="max-w-[360px]">
          <DialogHeader>
            <DialogTitle>Confirm Removal</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground">
            Are you sure you want to remove this team member?
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={() => setConfirmDialogOpen(false)}>
              No
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                handleRemoveMember(memberToRemove);
                setConfirmDialogOpen(false);
              }}
            >
              Yes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
