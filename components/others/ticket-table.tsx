import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tticket } from "@/lib/types";
export default function TicketTable({ tickets }: { tickets: Tticket[] }) {
  return (
    <Table>
      <TableCaption>A list of all your tickets.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell className="font-medium">{ticket.name}</TableCell>
            <TableCell>{ticket.email} </TableCell>
            <TableCell>{ticket.phone_number}</TableCell>
            <TableCell>{ticket.type}</TableCell>
            <TableCell>
              {new Date(ticket.date_and_time).toDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
