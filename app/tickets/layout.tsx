import { useAuth } from "@/lib/actions/auth-action";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

export default async function TicketLayout({ children }: PropsWithChildren) {
  const {
    data: { session },
  } = await useAuth();
  if (!session) redirect("/auth/login");
  return <div className="mt-20">{children}</div>;
}
