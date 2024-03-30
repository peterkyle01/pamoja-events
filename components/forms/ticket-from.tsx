"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { ticketFormSchema } from "@/lib/utils";

export default function TicketForm() {
  const form = useForm<z.infer<typeof ticketFormSchema>>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: 0,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof ticketFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (form.formState.isSubmitSuccessful) {
      redirect("/tickets");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-72 grow space-y-8"
      >
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
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="super_secret" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
          Log In
        </Button>
      </form>
    </Form>
  );
}
