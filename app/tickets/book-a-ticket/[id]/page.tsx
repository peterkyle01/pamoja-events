import Image from "next/image";
import { readEventById, readStorage } from "@/lib/actions/events-action";
import TicketForm from "@/components/forms/ticket-form";
import { unstable_noStore as noStore } from "next/cache";

export default async function TicketDetails({
  params,
}: {
  params: { id: string };
}) {
  noStore();
  const { id } = params;
  const event = await readEventById(Number(id));
  if (typeof id === undefined || !event) {
    return (
      <section className="flex h-[30rem] w-full items-center justify-center">
        <p className="text-2xl text-pm_blue">Event Not Found</p>
      </section>
    );
  }
  const image = await readStorage(event.image);
  if (!image) return "";
  return (
    <section className="h-[30rem] w-full lg:grid lg:grid-cols-2">
      <div className="flex items-center justify-center">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">{event.name}</h1>
            <p className="text-balance text-xs text-muted-foreground">
              {event.description}
            </p>
          </div>
          <TicketForm event={event} />
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src={image}
          alt={image}
          fill
          className="object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </section>
  );
}
