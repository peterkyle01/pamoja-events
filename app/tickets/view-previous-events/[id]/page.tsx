"use client";
import { useParams } from "next/navigation";

export default function EventDetails() {
  const { id } = useParams();

  return <section className="h-[35rem] w-full bg-red-500">{id}</section>;
}
