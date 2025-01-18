"use client";

import { deleteMessage } from "@/actions/deleteMessage";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Eye, MoreVertical, Search, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface CustomerMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function CustomerMessages() {
  const [searchTerm, setSearchTerm] = useState("");
  const [messages, setMessages] = useState<CustomerMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<CustomerMessage[]>(
    []
  );
  const [selectedMessage, setSelectedMessage] =
    useState<CustomerMessage | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [viewDialogOpen, setViewDialogOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch messages on component mount
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch("/api/messages");
        if (!response.ok) throw new Error("Failed to fetch messages");
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Error fetching messages:", error);
        toast.error("Failed to fetch messages");
      }
    };

    fetchMessages();
  }, []);

  // Filter messages whenever `messages` or `searchTerm` changes
  useEffect(() => {
    if (messages.length > 0) {
      const cleanedMessages = messages.filter((message) =>
        Object.values(message).some((value) =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredMessages(cleanedMessages);
    }
  }, [messages, searchTerm]);

  const handleDelete = async (id: string) => {
    try {
      setIsDeleting(true);
      const result: any = await deleteMessage(id);

      if (result.success) {
        toast.success("Message deleted successfully");
        // Remove the deleted message from the state
        setMessages((prevMessages) =>
          prevMessages.filter((message) => message.id !== id)
        );
        setFilteredMessages((prevFilteredMessages) =>
          prevFilteredMessages.filter((message) => message.id !== id)
        );
      } else {
        toast.error(result.error || "Failed to delete message");
      }
    } catch (error) {
      toast.error("An error occurred while deleting the message");
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="text-3xl font-bold text-yellow-400">
            Customer Messages
          </h1>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 h-4 w-4" />
            <Input
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-zinc-900 border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:ring-yellow-400"
            />
          </div>
        </div>

        <ScrollArea className="h-[calc(100vh-12rem)] rounded-lg border border-zinc-800">
          <Table>
            <TableHeader className="bg-zinc-900">
              <TableRow>
                <TableHead className="text-yellow-400">Name</TableHead>
                <TableHead className="text-yellow-400">Email</TableHead>
                <TableHead className="text-yellow-400">Service</TableHead>
                <TableHead className="text-yellow-400">Phone</TableHead>
                <TableHead className="text-yellow-400 text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredMessages.map((message) => (
                <TableRow
                  key={message.id}
                  className="border-zinc-800 hover:bg-zinc-900/50"
                >
                  <TableCell className="font-medium">
                    {message.firstName} {message.lastName}
                  </TableCell>
                  <TableCell>{message.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="bg-zinc-800 text-yellow-400 border-yellow-400/20"
                    >
                      {message.service}
                    </Badge>
                  </TableCell>
                  <TableCell>{message.phone}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="h-8 w-8 p-0 text-zinc-400 hover:text-yellow-400"
                        >
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-zinc-900 border-zinc-800"
                      >
                        <DropdownMenuItem
                          className="text-zinc-100 focus:text-yellow-400 focus:bg-zinc-800"
                          onClick={() => {
                            setSelectedMessage(message);
                            setViewDialogOpen(true);
                          }}
                        >
                          <Eye className="mr-2 h-4 w-4" /> View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-red-400 focus:text-red-400 focus:bg-zinc-800"
                          onClick={() => {
                            setSelectedMessage(message);
                            setDeleteDialogOpen(true);
                          }}
                        >
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ScrollArea>

        {/* View Message Dialog */}
        <Dialog open={viewDialogOpen} onOpenChange={setViewDialogOpen}>
          <DialogContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
            <DialogHeader>
              <DialogTitle className="text-yellow-400">
                Message Details
              </DialogTitle>
            </DialogHeader>
            {selectedMessage && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-zinc-400">First Name</label>
                    <p className="text-zinc-100">{selectedMessage.firstName}</p>
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400">Last Name</label>
                    <p className="text-zinc-100">{selectedMessage.lastName}</p>
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400">Email</label>
                    <p className="text-zinc-100">{selectedMessage.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-zinc-400">Phone</label>
                    <p className="text-zinc-100">{selectedMessage.phone}</p>
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm text-zinc-400">Service</label>
                    <p className="text-zinc-100">{selectedMessage.service}</p>
                  </div>
                  <div className="col-span-2">
                    <label className="text-sm text-zinc-400">Message</label>
                    <p className="text-zinc-100 whitespace-pre-wrap">
                      {selectedMessage.message}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
          <DialogContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
            <DialogHeader>
              <DialogTitle className="text-red-400">
                Confirm Deletion
              </DialogTitle>
              <DialogDescription className="text-zinc-400">
                Are you sure you want to delete this message? This action cannot
                be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="ghost"
                onClick={() => setDeleteDialogOpen(false)}
                className="text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800"
                disabled={isDeleting}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                onClick={() =>
                  selectedMessage && handleDelete(selectedMessage.id)
                }
                className="bg-red-500 hover:bg-red-600 text-white"
                disabled={isDeleting}
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
