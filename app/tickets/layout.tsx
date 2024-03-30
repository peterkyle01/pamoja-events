import type { PropsWithChildren } from "react";

export default function TicketLayout({ children }: PropsWithChildren) {
  return <div className="mt-20">{children}</div>;
}
