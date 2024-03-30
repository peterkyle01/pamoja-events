import EventForm from "@/components/forms/event-form";
import Image from "next/image";

export default function ListYourEvents() {
  return (
    <>
      <h1 className="my-2 text-center text-4xl font-black text-pm_brown">
        List Your Events
      </h1>
      <section className="flex h-auto w-full flex-col md:flex-row">
        <div className="flex-1">
          <EventForm />
        </div>
        <div className="flex-1 bg-slate-300 relative">
          <Image src={"/logo.png"} fill alt="logo"/>
        </div>
      </section>
    </>
  );
}
