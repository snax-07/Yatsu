"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

interface User {
  _id: string;
  name: string;
  email: string;
  address: string;
  instaAccountLink: string;
  linkedinAccountLink: string;
  githubAccountLink: string;
  githubAccountUsername: string;
  collegeName: string;
  graduationYear: number;
  collegeYear: string;
  codingLanguage: string[];
  attendStatus: string;
  gender: string;
  laptopHave: string;
  phoneNumber: number;
  mainRefrence: string;
  freindRef: string;
  other: string;
  refrenceSocialMediaPlatform: string;
  referCount: number;
  leader: string;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex w-full h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r px-6 py-6 flex flex-col">
        <div className="text-2xl font-bold text-purple-600 mb-8">YATSU Community</div>
      </aside>

      {/* Main Area */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Users</h1>

          <Input
            placeholder="Search..."
            className="w-72 bg-white shadow-sm border-gray-200"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-6 mb-6 text-gray-600 font-medium">
          <button className="text-purple-600 border-b-2 border-purple-600 pb-2">
            All Users
          </button>
        </div>

        {/* Data Table */}
        <Card className="p-0 shadow-sm">
          <ScrollArea className="h-[75vh]">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr className="text-left text-gray-600">
                  <th className="p-4">
                    <Checkbox />
                  </th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">College</th>
                  <th className="p-4">Languages</th>
                  <th className="p-4">Gender</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Leader</th>
                  <th className="p-4">Ref Count</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {loading ? (
                  <tr>
                    <td
                      colSpan={10}
                      className="text-center py-10 text-gray-500 text-lg"
                    >
                      Loading...
                    </td>
                  </tr>
                ) : users.length === 0 ? (
                  <tr>
                    <td
                      colSpan={10}
                      className="text-center py-10 text-gray-500 text-lg"
                    >
                      No users found
                    </td>
                  </tr>
                ) : (
                  users.map((u) => (
                    <tr
                      key={u._id}
                      className="border-b hover:bg-gray-50 transition"
                    >
                      <td className="p-4">
                        <Checkbox />
                      </td>


                      <td className="p-4 flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`https://avatar.vercel.sh/${u.name}`} />
                          <AvatarFallback>{u.name[0]}</AvatarFallback>
                        </Avatar>
                        {u.name}
                      </td>

                      <td className="p-4">{u.email}</td>

                      <td className="p-4">{u.collegeName}</td>

                      <td className="p-4">
                        <Badge className="bg-purple-100 text-purple-700">
                          {u.codingLanguage.join(", ")}
                        </Badge>
                      </td>

                      <td className="p-4">{u.gender}</td>

                      <td className="p-4">{u.phoneNumber}</td>

                      <td className="p-4">{u.leader || "-"}</td>

                      <td className="p-4">{u.referCount}</td>

                      <td className="p-4">
                        <MoreHorizontal className="cursor-pointer text-gray-500" />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </ScrollArea>
        </Card>
      </main>
    </div>
  );
}
