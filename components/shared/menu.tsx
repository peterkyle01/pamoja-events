"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { CiFacebook, CiInstagram, CiLocationOn } from "react-icons/ci";
import { CgMenuRightAlt } from "react-icons/cg";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { HiOutlineMailOpen } from "react-icons/hi";
import { Separator } from "../ui/separator";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tuser } from "@/lib/types";
import { Session } from "@supabase/supabase-js";
import NavbarButtons from "../others/navbar-buttons";

export default function Menu({
  user,
  session,
}: {
  user: Tuser;
  session: Session | null;
}) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger>
        <CgMenuRightAlt size={30} color="#130C4D" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="my-10 flex items-center justify-between">
            <NavbarButtons session={session} />
          </SheetTitle>
          <SheetDescription>
            <ul className="flex flex-1 flex-col items-start justify-evenly gap-6 text-lg">
              <SheetClose asChild>
                <Link href={"/about"}>
                  <li className="text-md font-bold hover:text-pm_blue">
                    About
                  </li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={`${pathname}/#contact_us`}>
                  <li className="text-md font-bold hover:text-pm_blue">
                    Contact Us
                  </li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/tickets"}>
                  <li className="text-md font-bold hover:text-pm_blue">Home</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                {user && user.is_admin && (
                  <Link href={"/admin"}>
                    <li className="text-md font-bold hover:text-pm_blue">
                      Admin
                    </li>
                  </Link>
                )}
              </SheetClose>
            </ul>
            <div className="absolute bottom-0 flex h-auto w-full flex-col">
              <div className="grid grow">
                <div className="grid h-full w-full">
                  <p className="text-lg font-black tracking-wider text-pm_brown">
                    Pamoja Events
                  </p>
                  <p className="text-md my-2 tracking-wider text-primary">
                    is the home of magical <br />
                    entertainment experiences.
                  </p>
                </div>
                <div className="grid h-full w-full gap-3" id="contact_us">
                  <p className="text-start text-lg font-black text-pm_brown">
                    Contact Us
                  </p>
                  <p className="flex items-center gap-1">
                    <CiFacebook size={26} color="#130C4D" />
                    <p className="text-sm md:text-lg">pamoja_events</p>
                  </p>
                  <p className="flex items-center gap-1">
                    <CiInstagram size={26} color="#130C4D" />
                    <p className="text-sm md:text-lg">pamoja_events</p>
                  </p>
                  <p className="flex items-center gap-1">
                    <HiOutlineMailOpen size={25} color="#130C4D" />
                    <p className="text-sm md:text-lg">pamoja_events</p>
                  </p>
                </div>
              </div>
              <div className="grid h-16 w-full ">
                <Separator className="w-1/2 place-self-center" />
                <div className="flex items-center gap-4">
                  <p className="flex items-center gap-1 text-center text-primary">
                    <CiLocationOn color="#825C17" /> 123,Nairobi,Kenya
                  </p>
                  <p className="flex items-center gap-1 text-center text-primary">
                    <FiPhone color="#825C17" /> 0700000000
                  </p>
                </div>
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
