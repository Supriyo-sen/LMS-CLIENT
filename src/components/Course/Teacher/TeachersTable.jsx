import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ArrowLeft, Search, Trash2 } from "lucide-react";

const TeachersTable = ({ teachers, onDelete, onBack }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const teachersPerPage = 5;

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredTeachers.length / teachersPerPage);
  const displayedTeachers = filteredTeachers.slice(
    (currentPage - 1) * teachersPerPage,
    currentPage * teachersPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Teachers</h2>
        <Button
          variant="outline"
          onClick={onBack}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Courses
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Search teachers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <div className="border rounded-lg shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%]">Name</TableHead>
              <TableHead className="w-[40%]">Email</TableHead>
              <TableHead className="w-[20%]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedTeachers.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell className="font-medium">{teacher.name}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => onDelete(teacher.id)}
                    className="flex items-center gap-2"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Pagination className="flex justify-end">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                onClick={() => handlePageChange(index + 1)}
                isActive={currentPage === index + 1}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TeachersTable;
