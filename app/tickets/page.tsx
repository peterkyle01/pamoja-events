"use client"

import Link from "next/link";

export default function Tickets() {
  return (
    <>
      <h1 className="text-center text-4xl font-black text-pm_brown">Home</h1>
      <section className="h-[30rem] w-full p-2">
        <div className="grid h-1/4 w-full">
          <p className="text-2xl font-black text-pm_blue">Hello there?</p>
          <p className="text-2xl font-black text-pm_blue">
            What do you want to do today?
          </p>
        </div>
        <div className="grid h-3/4 w-full grid-cols-2 gap-2 md:gap-6">
          <Link href={"/tickets/book-a-ticket"}>
            <div className="flex h-full w-full items-center justify-center border-2 border-pm_blue duration-500 hover:scale-95">
              <p className="text-lg md:text-2xl">Book a ticket</p>
            </div>
          </Link>
          <Link href={"/tickets/list-your-events"}>
            <div className="flex h-full w-full items-center justify-center border-2 border-pm_blue duration-500 hover:scale-95">
              <p className="text-lg md:text-2xl">List your events</p>
            </div>
          </Link>
          <Link href={"/tickets/view-previous-events"}>
            <div className="flex h-full w-full items-center justify-center border-2 border-pm_blue duration-500 hover:scale-95">
              <p className="text-lg md:text-2xl">View previous events</p>
            </div>
          </Link>
          <Link href={"/tickets/resell-your-tickets"}>
            <div className="flex h-full w-full items-center justify-center border-2 border-pm_blue duration-500 hover:scale-95">
              <p className="text-lg md:text-2xl">Resell your tickets</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
