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
import { Link } from "react-router-dom";
import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Archive, Plus, Trash2 } from "lucide-react";

export const Departments = () => {
  const [showModalDep, setShowModalDep] = useState(false);
  const [projectColor, setProjectColor] = useState("#7F00FF");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortKey, setSortKey] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [departments, setDepartments] = useState([
    {
      id: 1,
      head: "John Doe",
      name: "Marketing",
      underwork: 5,
    },
    {
      id: 2,
      head: "Jane Smith",
      name: "Engineering",
      underwork: 12,
    },
    {
      id: 3,
      head: "Mike Johnson",
      name: "HR",
      underwork: 3,
    },
  ]);

  const handleDelete = (id) => {
    setDepartments(departments.filter((dep) => dep.id !== id));
    const totalPages = Math.ceil((departments.length - 1) / itemsPerPage);
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

  const filteredDepartments = departments
    .filter((dep) =>
      Object.values(dep).some((val) =>
        val.toString().toLowerCase().includes(searchQuery.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortKey] > b[sortKey]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });

  const totalPages = Math.ceil(filteredDepartments.length / itemsPerPage);
  const paginatedDepartments = filteredDepartments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-background pt-20 px-4 sm:px-6 lg:px-8 pb-6 space-y-6">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h1 className="text-2xl font-semibold text-foreground">Departments</h1>
        <div className="flex gap-2">
            <Button
                onClick={() => setShowModalDep(true)}
                variant="outline"
                className="flex items-center gap-2 cursor-pointer"
            >
                <Plus size={16} />
                Add Department
            </Button>
          <Button
              className="flex items-center gap-2 hover:bg-red-600 hover:text-white transition-colors duration-200 cursor-pointer"
            >
            <Archive size={16} />
              Archive
          </Button>
        </div>
      </div>

      {/* Search */}
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

      <Card className="h-full flex flex-col overflow-hidden rounded-xl p-4 pt-0">
        {/* Department Table */}
        <div className="border-b overflow-auto">
          <Table className="table-auto min-w-full border-x-0">
            <TableHeader>
              <TableRow>
                <TableHead className="text-left w-12">#</TableHead>
                <TableHead
                  onClick={() => handleSort("head")}
                  className="cursor-pointer text-left"
                >
                  Department Head
                </TableHead>
                <TableHead
                  onClick={() => handleSort("name")}
                  className="cursor-pointer text-left"
                >
                  Department Name
                </TableHead>
                <TableHead
                  onClick={() => handleSort("underwork")}
                  className="cursor-pointer text-left"
                >
                  Employee UnderWork
                </TableHead>
                <TableHead className="text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedDepartments.map((dep, index) => (
                <TableRow key={dep.id}>
                  <TableCell className="text-left">{index + 1}</TableCell>
                  <TableCell className="text-left">{dep.head}</TableCell>
                  <TableCell className="text-left">{dep.name}</TableCell>
                  <TableCell className="text-left">{dep.underwork}</TableCell>
                  <TableCell className="text-left space-x-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleDelete(dep.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
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
      </Card>

        {/* Modal Add Department */}
        <Dialog open={showModalDep} onOpenChange={setShowModalDep}>
            <DialogContent
            className="w-full max-w-[95%] sm:max-w-[500px] md:max-w-[600px] max-h-[90vh] p-4 sm:p-6"
            onPointerDownOutside={(e) => e.preventDefault()} 
            >
            <DialogHeader className="pb-4">
                <DialogTitle>Add Department</DialogTitle>
            </DialogHeader>
            <ScrollArea className="max-h-[50vh] sm:max-h-[350px] pr-2 space-y-4 pr-4">
                <Label className="block text-sm font-medium text-muted-foreground pb-2">
                    Department
                </Label>
                <Input
                    type="text"
                    placeholder="Department Name"
                    className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
                />

                <div className="flex gap-4 pt-4 pb-4">
                    <div className="flex-1">
                    <Label className="block text-sm font-medium text-muted-foreground mb-1 pb-2">
                        Department Head
                    </Label>
                    <Select>
                        <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Department Head" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="New">Mark</SelectItem>
                            <SelectItem value="Existing">John Doe</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <Label className="block text-sm font-medium text-muted-foreground pb-2">
                            Department Abbrevation
                        </Label>
                        <Input
                        type="text"
                        placeholder="Abbrevation"
                        className="w-full p-2 border border-muted rounded-md focus-visible:ring-1"
                        />
                    </div>
                        <div className="flex-1">
                        <Label className="block text-sm font-medium text-muted-foreground mb-1 pb-2">
                            Department Color
                        </Label>
                        <Input
                            type="color"
                            className="w-20 h-10 p-0 border border-gray-300 rounded cursor-pointer"
                            onChange={(e) => setProjectColor(e.target.value)}
                            value={projectColor}
                        />
                    </div>
                </div>
            </ScrollArea>

            <div className="flex justify-end space-x-2 pt-4">
                <Button variant="outline" onClick={() => setShowModalDep(false)}>
                Cancel
                </Button>
                <Button type="submit">Submit</Button>
            </div>
            </DialogContent>
        </Dialog>
    </div>
  );
};
