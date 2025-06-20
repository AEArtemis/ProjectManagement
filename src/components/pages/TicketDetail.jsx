import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Image, Paperclip, TicketPlus, Pencil} from "lucide-react";
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

const images = [
  "/images/ticket-images/sample1.jpg",
  "/images/ticket-images/sample2.jpg",
  "/images/ticket-images/sample3.jpg",
];

export const TicketDetail = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl font-semibold text-foreground">Ticket Detail</h1>
                <div className="flex gap-2">
                    <Button
                        onClick={() => setShowModal(true)}
                        className="flex items-center gap-2 cursor-pointer"
                    >
                        <Pencil size={16} />
                        Edit Ticket
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
                {/* Left: Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-max">
                    {/* Card 1 */}
                    <Card className="col-span-1">
                        <CardContent className="p-2 flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center">
                            <img
                                src="/images/icons/IconStatus.png"
                                alt="Card 1"
                                className="w-15 h-15 object-contain rounded-sm"
                            />
                            </div>
                            <div className="flex flex-col items-center justify-center text-left">
                                <p className="text-md font-bold text-foreground">Status</p>
                                <div className="flex justify-center items-center h-full">
                                    <span className="bg-orange-100 text-orange-800 py-0.5 rounded text-xs font-medium p-2">
                                        In Progress
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Card 2 */}
                    <Card className="col-span-1">
                        <CardContent className="p-2 flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center">
                            <img
                                src="/images/Avatar.jpg"
                                alt="Card 1"
                                className="w-15 h-15 object-contain rounded-sm"
                            />
                            </div>
                            <div className="flex flex-col items-center justify-center text-center">
                                <p className="text-md font-bold text-foreground">Created By</p>
                                <span className="text-sm font-medium bg-blue-100 text-blue-800 py-0.5 rounded p-2 w-30">
                                    John Doe 
                                </span>
                            </div> 
                        </CardContent>
                    </Card>

                    {/* Card 3 */}
                    <Card className="col-span-1">
                        <CardContent className="p-2 flex items-center justify-center gap-4">
                            <div className="flex items-center justify-center">
                            <img
                                src="/images/icons/IconPriority.png"
                                alt="Card 1"
                                className="w-15 h-15 object-contain rounded-sm"
                            />
                            </div>
                            <div className="flex flex-col justify-center text-left">
                                <p className="text-md font-bold text-foreground">Priority</p>
                                <div className="flex justify-center items-center h-full">
                                    <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs font-medium">
                                        High
                                    </span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    
                    {/* Ticket Details */}
                    <Card className="col-span-1 sm:col-span-2 lg:col-span-3">
                        <CardContent className="h-full">
                            <div className="relative">
                                <div className="flex justify-between items-start pb-4">
                                    <span className="text-md font-bold bg-blue-100 px-2 py-1 rounded text-muted-foreground inline-block max-w-[220px] truncate overflow-hidden whitespace-nowrap">
                                      #PLN12045214
                                    </span>
                                    <span className="text-md font-bold bg-violet-100 text-violet-800 px-2 py-1 rounded">
                                        Planora
                                    </span>
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold pb-2">Subject</h4>
                                    <p className="text-sm text-justify text-foreground">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        Proin volutpat sem sed ullamcorper pellentesque. Donec velit risus, blandit rutrum egestas sed, 
                                        finibus ac diam. Aliquam erat volutpat. Suspendisse ornare tempus tristique. Integer bibendum, 
                                        dui vel ornare imperdiet, ex velit tincidunt velit, et porttitor arcu est at magna. Quisque 
                                        fermentum urna eget justo laoreet, rutrum condimentum turpis tempor. Sed tincidunt libero nibh,
                                        id aliquam quam ullamcorper nec. Proin interdum sapien vel libero fermentum, quis consequat nunc luctus.
                                        Vestibulum gravida ultricies eros, et imperdiet ante hendrerit vel. Maecenas ligula risus,
                                        dignissim sit amet purus id, vestibulum dictum leo. Morbi vestibulum elit quis nunc congue,
                                        vel mattis purus aliquam.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="col-span-1 sm:col-span-2 lg:col-span-3">
                        <CardContent className="h-full">
                            <h4 className="text-lg font-semibold text-left mb-4">Image Attached</h4>

                            {/* Use flex-wrap and gap, with responsive widths */}
                            <div className="flex flex-wrap gap-4 justify-center">
                            {images.map((src, index) => (
                                <img
                                key={index}
                                src={src}
                                alt={`Attachment ${index + 1}`}
                                className="w-auto h-auto rounded-md cursor-pointer object-cover"
                                onClick={() => setOpen(true)}
                                />
                            ))}
                            </div>
                        </CardContent>
                    </Card>
                    {/* <div className="col-span-1 sm:col-span-2 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card>
                            <CardContent className="h-full p-4">
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="h-full p-4">
                            </CardContent>
                        </Card>
                    </div> */}
                </div>

                {/* Right Sidebar Card */}
                <Card className="shadow-md self-start">
                    <CardContent className="p-4 space-y-2">
                        <h4 className="text-lg font-semibold text-left">Ticket Chat</h4>
                        <Card className="col-span-1 rounded-none shadow-none">
                            <CardContent className="flex flex-col gap-2 h-full">
                                <div className="flex items-center gap-4">
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

                                {/* Divider */}
                                <div className="h-[1px] bg-muted w-full" />

                                <div className="text-left">
                                    <p className="text-sm text-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum enim vitae turpis fringilla maximus. Nulla egestas tempus mauris non rutrum.</p>
                                </div>

                                <p className="flex items-center text-sm font-bold text-foreground pt-4 text-left gap-2">
                                    <MessageCircle className="w-5 h-5" />
                                    Comments (1)
                                </p>

                                {/* Divider */}
                                <div className="h-[1px] bg-muted w-full" />
                                {/* Replies */}
                                <div className="flex items-center gap-4">
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

                                    <div className="text-left">
                                    {/* Small images section */}
                                        <div className="flex gap-2 mb-2">
                                        {["/images/Avatar.jpg", "/images/favicon.png", "/images/ProjectImage.png"].map((src, index) => (
                                            <img
                                            key={index}
                                            src={src}
                                            alt={`Comment Image ${index + 1}`}
                                            className="w-16 h-16 object-cover rounded cursor-pointer border"
                                            onClick={() => {
                                                setCommentImages([
                                                "/images/Avatar.jpg",
                                                "/images/favicon.png",
                                                "/images/ProjectImage.png",
                                                ]);
                                                setCommentImageModalOpen(true);
                                            }}
                                            />
                                        ))}
                                        </div>

                                        {/* Paragraph text */}
                                        <p className="text-sm text-foreground">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum enim vitae turpis fringilla maximus. Nulla egestas tempus mauris non rutrum.
                                        </p>
                                    </div>

                            </CardContent>
                        </Card>
                        <Card className="shadow-md self-start rounded-none shadow-none">
                        <CardContent className="space-y-2">
                            <Textarea
                            rows={20}
                            placeholder="Message"
                            className="focus-visible:ring-1 h-30
                            bg-background text-foreground rounded-none"
                            />

                            {/* Icons + Send */}
                            <div className="flex items-center justify-between pt-2">
                            <div className="flex gap-4">
                                <button
                                type="button"
                                className="text-gray-500 hover:text-black transition-colors"
                                >
                                <Image className="w-4 h-4" />
                                </button>

                                <button
                                type="button"
                                className="text-gray-500 hover:text-black transition-colors"
                                >
                                <Paperclip className="w-4 h-4" />
                                </button>
                            </div>

                            <Button className="px-6">Send</Button>
                            </div>
                        </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </div>
            {/* Dialog Modal */}
            <Dialog open={showModal} onOpenChange={setShowModal}>
                <DialogContent
                className="w-[600px] max-h-[600px] p-6"
                onInteractOutside={(event) => event.preventDefault()}
                >
                <DialogHeader className="pb-4">
                    <DialogTitle>Edit Ticket</DialogTitle>
                </DialogHeader>
                <ScrollArea className="max-h-[350px] pr-2 space-y-4 pr-5">
                    <div className="pb-4">
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
                        <Input id="assign-date" type="date" className="w-40" />
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
    );
};
