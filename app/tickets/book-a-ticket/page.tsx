import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ticketsData } from "@/lib/data";
import Link from "next/link";
import { Suspense } from "react";
import { unstable_noStore as noStore } from "next/cache";
import { Skeleton } from "@/components/ui/skeleton";
import { Tticket } from "@/lib/types";
import Image from "next/image";
import { FaTicketAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";

function TicketSkeleton() {
  return <Skeleton className="h-full w-full" />;
}

function Ticket({ ticket }: { ticket: Tticket }) {
  return (
    <Link href={`/tickets/book-a-ticket/${ticket.id}`} key={ticket.id}>
      <div className="group h-60 w-full rounded-md border shadow-md duration-500 hover:scale-105">
        <div className="relative h-3/4 w-full overflow-hidden ">
          <Image
            src={ticket.image}
            fill
            alt={ticket.image}
            className="duration-500 group-hover:scale-110"
          />
        </div>
        <div className="grid h-1/4 w-full p-2">
          <p className="flex items-center gap-2 font-bold tracking-wider text-pm_blue">
            <FaTicketAlt />
            {ticket.name}
          </p>
          <p className="flex items-center gap-2 text-sm tracking-tighter text-pm_brown">
            <MdDateRange size={18} /> {ticket.date.toDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function BookATicket() {
  noStore();
  return (
    <>
      <h1 className="my-2 text-center text-4xl font-black text-pm_brown">
        Book A Ticket
      </h1>
      <section className="flex h-auto w-full flex-col md:h-[40rem] ">
        <div className="my-2 flex h-auto w-full justify-center gap-2">
          <Input
            type="search"
            placeholder="Search for an event"
            className="w-3/4"
          />
          <Button>Search</Button>
        </div>
        <div className="my-2 grid grow grid-cols-2 gap-2 overflow-hidden overflow-y-scroll px-2 md:grid-cols-6">
          {ticketsData.map((ticketData) => (
            <Suspense fallback={<TicketSkeleton />} key={ticketData.id}>
              <Ticket ticket={ticketData} />
            </Suspense>
          ))}
        </div>
      </section>
    </>
  );
}
