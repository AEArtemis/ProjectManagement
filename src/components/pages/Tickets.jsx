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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, TicketPlus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Tickets = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [tickets, setTickets] = useState([
    {
      id: 1,
      ticketId: "PLNRT741362",
      subject: "Login issue",
      assignedTo: "Mark",
      status: "In Progress",
      date: "2025-06-01",
    },
    {
      id: 2,
      ticketId: "PLNRT126273",
      subject: "Dark mode bug",
      assignedTo: "Ace",
      status: "Completed",
      date: "2025-06-02",
    },
    {
      id: 3,
      ticketId: "PLNRT123123",
      subject: "UI Feedback",
      assignedTo: "Candy",
      status: "Priority",
      date: "2025-06-03",
    },
  ]);

  const handleDelete = (id) => {
    setTickets(tickets.filter((ticket) => ticket.id !== id));
    // Optional: reset to first page if deleting last item on page
    const totalPages = Math.ceil((tickets.length - 1) / itemsPerPage);
    if (currentPage > totalPages) setCurrentPage(totalPages);
  };

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  // Filter & sort tickets
  const filteredTickets = tickets
    .filter((ticket) =>
      Object.values(ticket).some((val) =>
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
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Tickets</h1>
       <div className="flex gap-2">
          <Button
            onClick={() => setShowModal(true)}
            variant="outline"
            className="flex items-center gap-2 cursor-pointer"
          >
            <TicketPlus size={16} />
            Create Ticket
          </Button>
          <Button
            className="flex items-center gap-2 hover:bg-red-600 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <Trash2 size={16} />
            Recycle
          </Button>
        </div>

      </div>


      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search tickets..."
        className="w-full max-w-md"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1); // reset page on search
        }}
      />

      {/* Ticket Table */}
      <div className="rounded-lg border overflow-auto">
        <Table className="table-auto min-w-full">
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer text-left whitespace-nowrap w-16"
                style={{ minWidth: "64px" }}
              >
                Ticket ID
              </TableHead>
              <TableHead
                onClick={() => handleSort("subject")}
                className="cursor-pointer text-left w-60"
                style={{ minWidth: "240px" }}
              >
                Subject
              </TableHead>
              <TableHead
                onClick={() => handleSort("assignedTo")}
                className="cursor-pointer text-left whitespace-nowrap w-40"
                style={{ minWidth: "160px" }}
              >
                Assigned To
              </TableHead>
              <TableHead
                onClick={() => handleSort("status")}
                className="cursor-pointer text-left whitespace-nowrap w-32"
                style={{ minWidth: "120px" }}
              >
                Status
              </TableHead>
              <TableHead
                onClick={() => handleSort("date")}
                className="cursor-pointer text-left whitespace-nowrap w-40"
                style={{ minWidth: "120px" }}
              >
                Date
              </TableHead>
              <TableHead
                className="text-left whitespace-nowrap w-40"
                style={{ minWidth: "160px" }}
              >
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedTickets.map((ticket) => (
              <TableRow key={ticket.id}>
                <TableCell className="text-left whitespace-nowrap">
                  {ticket.ticketId}
                </TableCell>
                <TableCell className="text-left">{ticket.subject}</TableCell>
                <TableCell className="text-left whitespace-nowrap">
                  {ticket.assignedTo}
                </TableCell>
                <TableCell className="text-left whitespace-nowrap">
                  {ticket.status}
                </TableCell>
                <TableCell className="text-left whitespace-nowrap">
                  {ticket.date}
                </TableCell>
                <TableCell className="space-x-2 text-left whitespace-nowrap">
                  <Link to="/tickets/ticket-detail">
                    <Button size="sm" variant="outline" className="cursor-pointer">
                      View
                    </Button>
                  </Link>
                  <Button
                    size="sm"
                    variant="destructive"
                    className="cursor-pointer"
                    onClick={() => handleDelete(ticket.id)}
                  >
                    Delete
                  </Button>
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

      {/* Dialog Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent
          className="w-[600px] max-h-[600px] p-6"
          onInteractOutside={(event) => event.preventDefault()}
        >
          <DialogHeader className="pb-4">
            <DialogTitle>Create Ticket</DialogTitle>
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
