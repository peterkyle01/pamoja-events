import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tticket } from "@/lib/types";
import QRCode from "react-qr-code";
export default function TicketTable({ tickets }: { tickets: Tticket[] }) {
  return (
    <Table className="overflow-x-scroll">
      <TableCaption>A list of all your tickets.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone Number</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>QR Code</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tickets.map((ticket) => (
          <TableRow key={ticket.id}>
            <TableCell>{ticket.name}</TableCell>
            <TableCell>{ticket.email} </TableCell>
            <TableCell>{ticket.phone_number}</TableCell>
            <TableCell>{ticket.type}</TableCell>
            <TableCell>
              <QRCode
                size={50}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={`Ticket No:${ticket.id}
Email:${ticket.email}
Type:${ticket.type}
Event ID:${ticket.event_id}`}
              />
            </TableCell>
            <TableCell>
              {new Date(ticket.date_and_time).toDateString()}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
