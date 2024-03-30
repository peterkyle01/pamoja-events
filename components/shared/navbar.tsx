import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { useAuth, useCurrentUser } from "@/lib/actions/auth";
import ContactUs from "../others/contact-us";
import NavbarButtons from "../others/navbar-buttons";
import { unstable_noStore as noStore } from "next/cache";

export default async function Navbar() {
  noStore();
  const {
    data: { session },
  } = await useAuth();
  const user = await useCurrentUser();
  return (
    <header className="fixed top-0 z-50 flex h-16 w-full border-b border-pm_blue bg-pm_brown px-2 text-white md:px-10">
      <div className="flex flex-1 items-center">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src={"/logo.png"} width={50} height={50} alt="logo" />
          <p className="text-3xl font-black tracking-wider text-pm_blue">
            Pamoja Events
          </p>
        </Link>
      </div>
      <ul className="hidden flex-1 items-center justify-evenly text-lg md:flex">
        <Link href={"/about"}>
          <li className="text-md font-bold hover:text-pm_blue">About</li>
        </Link>
        <ContactUs />
        <Link href={"/tickets"}>
          <li className="text-md font-bold hover:text-pm_blue">Home</li>
        </Link>
        {user && user.is_admin && (
          <Link href={"/admin"}>
            <li className="text-md font-bold hover:text-pm_blue">Admin</li>
          </Link>
        )}
      </ul>
      <div className="hidden flex-1 items-center justify-end gap-2 md:flex">
        <NavbarButtons session={session} />
      </div>

      <i className="flex h-full items-center md:hidden">
        <Menu user={user} session={session} />
      </i>
    </header>
  );
}
