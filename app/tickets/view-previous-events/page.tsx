import { Skeleton } from "@/components/ui/skeleton";
import { Tevent } from "@/lib/types";
import Link from "next/link";
import { Suspense } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuTimer } from "react-icons/lu";
import { unstable_noStore as noStore } from "next/cache";
import { readEvents } from "@/lib/actions/events-action";

function EventSkeleton() {
  return <Skeleton className="h-40 w-full" />;
}

function Event({ event }: { event: Tevent }) {
  return (
    <div className="flex h-40 w-full border-2 border-pm_brown bg-pm_blue p-2 font-semibold text-pm_brown duration-500">
      <div className="grid h-full w-1/2">
        <p className="flex items-center gap-2 text-2xl">Event {event.id}</p>
        <Link href={`/tickets/view-previous-events/${event.id}`}>
          <p className="flex items-center gap-2 text-2xl underline">
            View event details
          </p>
        </Link>
      </div>
      <div className="grid h-full w-1/2">
        <p className="flex items-center gap-2 text-2xl">
          <LuTimer /> {new Date(event.date_and_time).toDateString()}
        </p>
        <p className="flex items-center gap-2 text-2xl">
          <IoLocationOutline /> {event.location}
        </p>
      </div>
    </div>
  );
}

export default async function ViewPreviousEvents() {
  noStore();
  const events = await readEvents();
  return (
    <>
      <h1 className="my-2 text-center text-4xl font-black text-pm_brown">
        View Previous Events
      </h1>
      <section className="grid h-[35rem] w-full grid-cols-1 gap-2 overflow-hidden overflow-y-scroll p-2">
        {events?.map((event) => (
          <Suspense fallback={<EventSkeleton />} key={event.id}>
            <Event event={event} />
          </Suspense>
        ))}
      </section>
    </>
  );
}
