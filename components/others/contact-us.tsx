"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ContactUs() {
  const pathname = usePathname();
  return (
    <Link href={`${pathname}/#contact_us`}>
      <li className="text-md font-bold hover:text-pm_blue">Contact Us</li>
    </Link>
  );
}
