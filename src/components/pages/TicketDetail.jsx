import React, {useState} from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "../ui/textarea";
import { X, MessageCircle} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/images/ticket-images/sample1.jpg",
  "/images/ticket-images/sample2.jpg",
  "/images/ticket-images/sample3.jpg",
];

export const TicketDetail = () => {
    // Carousel
    const [open, setOpen] = useState(false);
    return (
        <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl font-semibold text-foreground">Ticket Detail</h1>
                <div className="flex gap-2">
                {/* Add buttons if needed */}
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
                            <div className="text-left">
                                <h4 className="text-lg font-semibold text-left pb-2">Subject</h4>
                                <p className="text-sm text-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Proin volutpat sem sed ullamcorper pellentesque. Donec velit risus, blandit rutrum egestas sed, 
                                    finibus ac diam. Aliquam erat volutpat. Suspendisse ornare tempus tristique. Integer bibendum, 
                                    dui vel ornare imperdiet, ex velit tincidunt velit, et porttitor arcu est at magna. Quisque 
                                    fermentum urna eget justo laoreet, rutrum condimentum turpis tempor. Sed tincidunt libero nibh,
                                    id aliquam quam ullamcorper nec. Proin interdum sapien vel libero fermentum, quis consequat nunc luctus.
                                    Vestibulum gravida ultricies eros, et imperdiet ante hendrerit vel. Maecenas ligula risus,
                                    dignissim sit amet purus id, vestibulum dictum leo. Morbi vestibulum elit quis nunc congue,
                                    vel mattis purus aliquam.</p>
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
                {/* Modal Carousel */}
                {open && (
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
                        {/* Close Button */}
                        <Button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-6 text-white"
                            variant="ghost"
                            size="icon"
                        >
                        <X className="w-8 h-8" />
                        </Button>

                        <div className="relative w-full max-w-3xl">
                        <Carousel opts={{ loop: false }}>
                            <CarouselContent>
                            {images.map((src, index) => (
                                <CarouselItem key={index} className="flex justify-center items-center">
                                <img
                                    src={src}
                                    alt={`Slide ${index + 1}`}
                                    className="max-h-[80vh] object-contain rounded"
                                />
                                </CarouselItem>
                            ))}
                            </CarouselContent>

                            <CarouselPrevious className="left-4" />
                            <CarouselNext className="right-4" />
                        </Carousel>
                        </div>
                    </div>
                )}

                {/* Right Sidebar Card */}
                <Card className="shadow-md self-start">
                    <CardContent className="p-4 space-y-2">
                        <h4 className="text-lg font-semibold text-left">Ticket Chat</h4>
                        <Card className="col-span-1">
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
                                    Comments (2)
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
                                    <p className="text-sm text-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vestibulum enim vitae turpis fringilla maximus. Nulla egestas tempus mauris non rutrum.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="shadow-md self-start">
                            <CardContent className="space-y-2">
                                <Textarea rows={20} placeholder="Message" className="focus-visible:ring-1 h-30"/>
                                <div className="pt-2">
                                    <Button className="w-full">Send</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
