"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ticketFormSchema } from "@/lib/utils";
import { Tevent, Tticket } from "@/lib/types";
import { useTransition } from "react";
import { createTickets } from "@/lib/actions/tickets-action";
import { toast } from "sonner";

export default function TicketForm({ event }: { event: Tevent }) {
  const [isPending, startTransition] = useTransition();
  const form = useForm<Tticket>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: 0,
      date_and_time: new Date(event.date_and_time),
      type: "REGULAR",
      event_id: event.id,
    },
  });

  function onSubmit(values: Tticket) {
    startTransition(async () => {
      try {
        const result = await createTickets(values);
        const { error } = JSON.parse(result);
        if (error) toast.error(`${error}`);
        else toast.success("Successful!");
      } catch (e) {
        console.log(e);
      }
    });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-72 grow space-y-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Wachu" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="type"
          render={({ field: { onChange, value, name } }) => (
            <Select onValueChange={onChange} value={value} name={name}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="REGULAR">REGULAR</SelectItem>
                <SelectItem value="VIP">VIP</SelectItem>
                <SelectItem value="VVIP">VVIP</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        <Button disabled={isPending} type="submit">
          {isPending ? "Booking..." : " Confirm Order"}
        </Button>
      </form>
    </Form>
  );
}
