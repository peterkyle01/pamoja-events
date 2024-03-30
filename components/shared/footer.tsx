import { Separator } from "../ui/separator";
import Image from "next/image";
import { CiLocationOn, CiFacebook, CiInstagram } from "react-icons/ci";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex h-72 w-full flex-col border-t border-pm_blue bg-pm_blue px-2 text-white">
      <div className="my-2 grid grow grid-cols-3">
        <div className="flex h-full w-full items-center justify-center ">
          <Image src={"/logo.png"} width={100} height={100} alt="logo" />
        </div>
        <div className="grid h-full w-full place-items-center">
          <p className="text-lg font-black tracking-wider text-pm_brown md:text-2xl">
            Pamoja Events
          </p>
          <p className="my-2 tracking-wider text-white md:text-2xl">
            is the home <br /> of magical <br />
            entertainment
            <br /> experiences.
          </p>
        </div>
        <div className="grid h-full w-full  place-items-center" id="contact_us">
          <p className="text-lg font-black text-pm_brown md:text-2xl">
            Contact Us
          </p>
          <span className="flex items-center gap-1">
            <CiFacebook size={26} color="#825C17" />
            <p className="text-sm md:text-lg">pamoja_events</p>
          </span>
          <span className="flex items-center gap-1">
            <CiInstagram size={26} color="#825C17" />
            <p className="text-sm md:text-lg">pamoja_events</p>
          </span>
          <span className="flex items-center gap-1">
            <HiOutlineMailOpen size={25} color="#825C17" />
            <p className="text-sm md:text-lg">pamoja_events</p>
          </span>
        </div>
      </div>
      <div className="grid h-16 w-full ">
        <Separator className="w-1/2 place-self-center" />
        <div className="flex items-center justify-around">
          <p className="flex items-center gap-1 text-center text-white">
            <CiLocationOn color="#825C17" /> 123,Nairobi,Kenya
          </p>
          <p className="flex items-center gap-1 text-center text-white">
            <FiPhone color="#825C17" /> 0700000000
          </p>
        </div>
      </div>
    </footer>
  );
}
