"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tticket } from "@/lib/types";
import { Button } from "../ui/button";
import { useTransition } from "react";
import { deleteTicketById } from "@/lib/actions/tickets-action";

export default function TicketResellDialog({ ticket }: { ticket: Tticket }) {
  const [isPending, startTransition] = useTransition();
  function resellTicket() {
    startTransition(async () => {
      try {
        await deleteTicketById(ticket.id!);
        
      } catch (e) {
        console.log(e);
      }
    });
  }
  return (
    <Dialog>
      <DialogTrigger>Put your ticket up for resell</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This order will be up for resell.
          </DialogDescription>
        </DialogHeader>
        <div className="h-20 w-full">
          <p>Ticket:{ticket.id}</p>
          <p>For:{ticket.name}</p>
          <p>Phone Number:{ticket.phone_number}</p>
        </div>
        <DialogFooter>
          <Button type="button" variant="default" onClick={resellTicket}>
            {isPending ? "Reselling..." : "Yes"}
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="destructive">
              No
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
