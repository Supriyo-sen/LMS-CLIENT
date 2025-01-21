"use client";

import React, { useState } from "react";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Search } from "lucide-react";

const CoursesList = ({ courses, onViewStudents }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Courses</h2>
      <div className="flex space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <div className="border rounded-lg shadow-sm">
        <ScrollArea>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60%]">Course Name</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course) => (
                <TableRow key={course.id}>
                  <TableCell className="font-medium">{course.name}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Add
                      </Button>
                      <Button
                        onClick={() => onViewStudents(course.id)}
                        size="sm"
                      >
                        View
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CoursesList;
