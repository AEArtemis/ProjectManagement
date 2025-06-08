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
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Mail, Circle, Smartphone, Cake, Hourglass, Pencil, Building, MailIcon,UserPlus } from "lucide-react";
export const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const members = [
    { id: 1, name: "John Doe", role: "Software Developer", avatar: "/images/Avatar.jpg" },
    { id: 2, name: "Jane Smith", role: "Product Manager", avatar: "/images/Avatar.jpg" },
    { id: 3, name: "Alice Johnson", role: "UX Designer", avatar: "/images/Avatar.jpg" },
    { id: 4, name: "Bob Brown", role: "QA Engineer", avatar: "/images/Avatar.jpg" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Team</h1>
        <div className="flex gap-2">
          <Button className="flex items-center gap-2" onClick={() => setShowModal(true)}>
            <UserPlus size={16} />
            Add Member
          </Button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {members.map((member) => (
          <div key={member.id} className="space-y-4">
            <Card className="shadow-sm">
              <CardContent className="">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={member.avatar}
                    alt={`${member.name} Avatar`}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mb-4 shadow-md"
                  />
                  <h2 className="text-lg font-semibold text-foreground">{member.name}</h2>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <div className="pt-2">
                    <Button>Profile</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      {/* Modal Profile */}
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
              {/* <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="create-ticket" />
                  <Label htmlFor="create-ticket">Create Ticket</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="create-task" />
                  <Label htmlFor="create-task">Create Task</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="add-event" />
                  <Label htmlFor="add-event">Add Event</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="add-member" />
                  <Label htmlFor="add-member">Add Member</Label>
                </div>
              </div> */}
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
  );
}
