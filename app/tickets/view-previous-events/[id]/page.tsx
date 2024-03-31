import TicketTable from "@/components/others/ticket-table";
import { readEventById } from "@/lib/actions/events-action";
import { readTicketsByEventId } from "@/lib/actions/tickets-action";
import { unstable_noStore as noStore } from "next/cache";

export default async function EventDetails({
  params,
}: {
  params: { id: string };
}) {
  noStore();
  const { id } = params;
  const event = await readEventById(Number(id));
  if (!event) return <p>No Event</p>;
  const tickets = await readTicketsByEventId(Number(event.id));
  return (
    <section className="mt-20 h-[35rem] w-full">
      <h1 className="m-2 text-2xl font-black text-pm_blue">
        Thank you for your order
      </h1>
      {tickets && <TicketTable tickets={tickets} />}
    </section>
  );
}
