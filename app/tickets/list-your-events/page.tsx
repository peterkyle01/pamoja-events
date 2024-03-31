import EventForm from "@/components/forms/event-form";
import { useAuth } from "@/lib/actions/auth-action";
import { unstable_noStore as noStore } from "next/cache";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function ListYourEvents() {
  noStore();

  const {
    data: { session },
  } = await useAuth();
  if (!session) {
    redirect("/");
  }
  return (
    <>
      <h1 className="my-2 text-center text-4xl font-black text-pm_brown">
        List Your Events
      </h1>
      <section className="flex h-auto w-full flex-col md:flex-row">
        <div className="flex-1">
          <EventForm userId={session.user.id} />
        </div>
        <div className="relative flex-1 bg-slate-300">
          <Image src={"/logo.png"} fill alt="logo" />
        </div>
      </section>
    </>
  );
}
