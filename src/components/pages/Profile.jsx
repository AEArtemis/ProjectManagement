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
import { MapPin, Mail, Circle, Smartphone, Cake, Hourglass, Pencil, Building, MailIcon } from "lucide-react";

export const Profile = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalCompany, setShowModalCompany] = useState(false);
  const [imagePreview, setImagePreview] = useState(null)

  const handleImageChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result)
      reader.readAsDataURL(file)
    }
  }
  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Profile</h1>
       <div className="flex gap-2">
          <Button
            onClick={() => setShowModal(true)}
            variant="outline"
            className="flex items-center gap-2 cursor-pointer"
          >
            <Pencil size={16} />
            Edit Profile
          </Button>
          <Button
            onClick={() => setShowModalCompany(true)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Building size={16} />
            Edit Company
          </Button>
        </div>

      </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Left: Profile Info */}
          <div className="md:col-span-8 space-y-4">
            <Card className="shadow-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src="/images/Avatar.jpg"
                      alt="Avatar"
                      className="w-32 h-32 rounded-full object-cover mb-4 shadow-md"
                    />
                    <h2 className="text-lg font-semibold text-foreground">John Doe</h2>
                    <p className="text-sm text-muted-foreground">Software Developer</p>
                  </div>

                  <div className="md:col-span-2 md:pl-6 md:border-l border-muted flex flex-col items-center text-center">
                    <h3 className="text-base font-medium mb-2 text-foreground">About</h3>
                    <p className="text-sm text-foreground leading-relaxed max-w-prose">
                      I’m a passionate software developer with over 8 years of experience in full-stack development.
                      I specialize in building scalable applications using modern frameworks. My interests include
                      open-source, design systems, and building developer tools.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 pt-4 text-sm text-muted-foreground text-left">
                      <p className="flex items-center gap-2">
                        <MailIcon className="w-4 h-4" />
                        john.doe@gmail.com
                      </p>
                      <p className="flex items-center gap-2">
                        <Cake className="w-4 h-4" />
                        06/03/2025
                      </p>
                      <p className="flex items-center gap-2">
                        <Smartphone className="w-4 h-4" />
                        +1 234 567 8901
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        San Francisco, CA
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <h4 className="text-lg font-semibold text-foreground text-left">Current Work Project</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Project Card 1 */}
              <Card className="shadow-sm">
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-center">
                    <img
                      src="/images/ProjectImage.png"
                      alt="Project Thumbnail"
                      className="rounded-lg object-contain w-[240px] h-[240px]"
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-foreground">E-Commerce Revamp</h5>
                    <p className="text-sm text-muted-foreground">Role: Full Stack Engineer</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">Team:</span>
                      <div className="flex -space-x-2">
                        <img
                          src="/images/Avatar.jpg"
                          className="w-8 h-8 rounded-full border-2 border-background"
                          alt="User A"
                        />
                        <img
                          src="/images/Avatar.jpg"
                          className="w-8 h-8 rounded-full border-2 border-background"
                          alt="User B"
                        />
                        <img
                          src="/images/Avatar.jpg"
                          className="w-8 h-8 rounded-full border-2 border-background"
                          alt="User C"
                        />
                        <span className="text-xs font-medium text-muted-foreground pl-2 pt-2">+2 more</span>
                      </div>
                    </div>
                    <span className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Hourglass className="w-3 h-3" />
                      <span>5 days</span>
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 w-[85%]"></div>
                  </div>
                </CardContent>
              </Card>

              {/* Project Card 2 */}
              <Card className="shadow-sm">
                <CardContent className="p-4 space-y-3">
                  <div className="flex justify-center">
                    <img
                      src="/images/ProjectImage.png"
                      alt="Project Thumbnail"
                      className="rounded-lg object-contain w-[240px] h-[240px]"
                    />
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-foreground">Accenture</h5>
                    <p className="text-sm text-muted-foreground">Role: Full Stack Engineer</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-muted-foreground">Team:</span>
                      <div className="flex -space-x-2">
                        <img
                          src="/images/Avatar.jpg"
                          className="w-8 h-8 rounded-full border-2 border-background"
                          alt="User A"
                        />
                        <img
                          src="/images/Avatar.jpg"
                          className="w-8 h-8 rounded-full border-2 border-background"
                          alt="User B"
                        />
                        <img
                          src="/images/Avatar.jpg"
                          className="w-8 h-8 rounded-full border-2 border-background"
                          alt="User C"
                        />
                        <span className="text-xs font-medium text-muted-foreground pl-2 pt-2">+2 more</span>
                      </div>
                    </div>
                    <span className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Hourglass className="w-3 h-3" />
                      <span>10 Months</span>
                    </span>
                  </div>
                  <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 w-[55%]"></div>
                  </div>
                </CardContent>
              </Card>

            </div>

          </div>

          {/* Right: Current Task */}
          <div className="md:col-span-4">
            <Card className="w-full shadow-sm">
              <CardContent className="p-6 pt-0 flex flex-col gap-4">
                <h2 className="text-lg font-semibold text-foreground">Current Task</h2>

                {/* Task Card 1 */}
                <Card className="rounded-none shadow">
                  <CardContent className="p-3">
                    <div className="space-y-2 text-sm text-muted-foreground text-left">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Circle className="w-4 h-4 text-cyan-500 fill-cyan-500" />
                          <span className="font-medium text-foreground">UI/UX</span>
                        </div>
                        <span className="bg-orange-100 text-orange-800 px-2 py-0.5 rounded text-xs font-medium">
                          In Progress
                        </span>
                      </div>
                      <p className='text-foreground'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Task Card 2 */}
                <Card className="rounded-none shadow">
                  <CardContent className="p-3">
                    <div className="space-y-2 text-sm text-muted-foreground text-left">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <Circle className="w-4 h-4 text-cyan-500 fill-cyan-500" />
                          <span className="font-medium text-foreground">Website Design</span>
                        </div>
                        <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">
                          Review
                        </span>
                      </div>
                      <p className='text-foreground'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id nec scelerisque massa.
                      </p>
                    </div>
                  </CardContent>
                </Card>

              </CardContent>
            </Card>
          </div>
        </div>
        {/* Modal Profile */}
        <Dialog open={showModal} onOpenChange={setShowModal}>
          <DialogContent
            className="w-full max-w-[95%] sm:max-w-[500px] md:max-w-[600px] max-h-[90vh] p-4 sm:p-6"
            onInteractOutside={(event) => event.preventDefault()}
          >
            <DialogHeader className="pb-4">
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>

            <ScrollArea className="max-h-[50vh] sm:max-h-[350px] pr-2 space-y-4">
              <Label className="block text-sm font-medium text-muted-foreground">
                Name
              </Label>
              <Input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
              />

              <Label className="block text-sm font-medium text-muted-foreground pt-4">
                About
              </Label>
              <Textarea
                className="w-full p-2 border border-muted rounded-md min-h-[60px] focus-visible:ring-1"
                rows={2}
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

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground">
                    Assign Date
                  </Label>
                  <Input id="assign-date" type="date" className="w-full sm:w-40" />
                </div>
                <div className="flex-1">
                  <Label className="block text-sm font-medium text-muted-foreground">
                    Address
                  </Label>
                  <Input
                    type="text"
                    placeholder="City, Province"
                    className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
                  />
                </div>
              </div>
            </ScrollArea>

            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Modal Company */}
        <Dialog open={showModalCompany} onOpenChange={setShowModalCompany}>
          <DialogContent
            className="w-full max-w-[95%] sm:max-w-[500px] md:max-w-[600px] max-h-[90vh] p-4 sm:p-6"
            onInteractOutside={(e) => e.preventDefault()}
          >
            <DialogHeader className="pb-4">
              <DialogTitle>Edit Company</DialogTitle>
            </DialogHeader>

            <ScrollArea className="max-h-[50vh] sm:max-h-[350px] pr-4 space-y-4">
              {/* Image uploader */}
              <div className="flex flex-col items-center space-y-2">
                <label htmlFor="company-image" className="cursor-pointer">
                  <div className="w-full h-40 rounded-sm overflow-hidden border border-muted">
                    <img
                      src={imagePreview || "/images/PlanoraLogo.png"}
                      alt="Company Logo"
                      className="w-full h-full object-fill"
                    />
                  </div>
                  <Input
                    id="company-image"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
                <span className="text-sm text-muted-foreground">Click image to upload</span>
              </div>

              {/* Company Name input */}
              <div>
                <Label className="block text-sm font-medium text-muted-foreground">
                  Company Name
                </Label>
                <Input
                  type="text"
                  placeholder="Company Name"
                  className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
                />
              </div>
              {/* Company Abbreviation */}
              <div className="pt-4">
                <Label className="block text-sm font-medium text-muted-foreground">
                  Abbreviation
                </Label>
                <Input
                  type="text"
                  placeholder="Abbreviation"
                  className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
                />
              </div>

              {/* About input */}
              <div>
                <Label className="block text-sm font-medium text-muted-foreground pt-4">
                  About (Optional)
                </Label>
                <Textarea
                  className="w-full p-2 border border-muted rounded-md min-h-[60px] focus-visible:ring-1"
                  rows={2}
                />
              </div>
            </ScrollArea>

            {/* Footer buttons */}
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setShowModalCompany(false)}>
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </DialogContent>
        </Dialog>

    </div>
  );
};
