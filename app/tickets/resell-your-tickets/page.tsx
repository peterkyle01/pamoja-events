import { unstable_noStore as noStore } from "next/cache";
import { Skeleton } from "@/components/ui/skeleton";
import { Tticket } from "@/lib/types";
import { readTickets } from "@/lib/actions/tickets-action";
import { Suspense } from "react";
import TicketResellDialog from "@/components/others/ticket-resell-dialog";

function Ticketkeleton() {
  return <Skeleton className="h-20 w-full" />;
}

function Ticket({ ticket }: { ticket: Tticket }) {
  return (
    <div className="flex h-20 w-full justify-between border-2 border-pm_brown bg-pm_blue p-2 text-lg font-semibold text-pm_brown md:text-2xl">
      <p className="flex items-center gap-2 ">Order {ticket.id}</p>
      <TicketResellDialog ticket={ticket}/>
    </div>
  );
}

export default async function ResellYourTickets() {
  noStore();
  const tickets = await readTickets();
  return (
    <>
      <h1 className="my-2 text-center text-4xl font-black text-pm_brown">
        Resell Your Tickets
      </h1>
      <section className="grid h-[30rem] w-full place-items-start gap-2 p-2">
        {tickets?.map((ticket) => (
          <Suspense fallback={<Ticketkeleton />} key={ticket.id}>
            <Ticket ticket={ticket} />
          </Suspense>
        ))}
      </section>
    </>
  );
}
