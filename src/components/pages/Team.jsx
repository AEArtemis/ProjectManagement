import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Team = () => {
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
          <Button>Add Employee</Button>
        </div>
      </div>


      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {members.map((member) => (
          <div key={member.id} className="md:col-span-3 space-y-4">
            <Card className="shadow-sm">
              <CardContent className="p-6">
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
    </div>
  );
}
