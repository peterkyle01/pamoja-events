import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useAuth, useCurrentUser } from "@/lib/actions/auth-action";

export default async function Home() {
  const user = await useCurrentUser()
  console.log({ hello: user });
  return (
    <>
      <section className="mt-20 flex h-[30rem] w-full flex-col md:flex-row">
        <div className="relative flex-1">
          <Image src={"/event.jpg"} fill alt="event" />
        </div>
        <div className="flex flex-1 flex-col items-center justify-around p-5">
          <p className="text-center text-4xl font-black text-pm_blue md:text-6xl">
            Welcome to the number one platform to get and sell tickets.
          </p>
          <div className="flex gap-10">
            <Link href={"/auth/login"}>
              <Button size={"lg"} className="bg-pm_brown">
                Log In
              </Button>
            </Link>
            <Link href={"/auth/signup"}>
              <Button size={"lg"} className="bg-pm_brown">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="my-6 flex h-60 w-full flex-col md:h-80">
        <h1 className="m-2 text-4xl font-black text-pm_brown">Why Us?</h1>
        <div className="flex grow gap-2 p-2">
          <div className="grid flex-1 place-content-center place-items-center gap-2 border-2 border-pm_brown bg-pm_blue p-1 md:p-6">
            <p className="text-center text-sm font-bold text-white md:text-2xl">
              Verifiability
            </p>
            <span className="text-4xl md:text-7xl">
              <FaCheck color="white" />
            </span>
            <p className="text-center text-xs font-bold text-white md:text-xl">
              Each ticket is assigned a unique QR code so you never have to
              worry about its validity.
            </p>
          </div>
          <div className="grid flex-1 place-content-center place-items-center gap-2 border-2 border-pm_brown bg-pm_blue p-1 md:p-6">
            <p className="text-center text-sm font-bold text-white md:text-2xl">
              Resell your tickets
            </p>
            <span className="text-4xl md:text-7xl">
              <FaCheck color="white" />
            </span>
            <p className="text-center text-xs font-bold text-white md:text-xl">
              You can easily put your ticket up for sale incase of an emergency.
            </p>
          </div>
          <div className="grid flex-1 place-content-center place-items-center gap-2 border-2 border-pm_brown bg-pm_blue p-1 md:p-6">
            <p className="text-center text-sm font-bold text-white md:text-2xl">
              Customer centered
            </p>
            <span className="text-4xl md:text-7xl">
              <FaCheck color="white" />
            </span>
            <p className="text-center text-xs font-bold text-white md:text-xl">
              We always think about you as we create our systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
