"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
import { eventFormSchema } from "@/lib/utils";
import { toast } from "sonner";

export default function EventForm() {
  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: {
      name: "",
      image: "",
      description: "",
      location: "",
      date: new Date(),
      time: "",
      regular_tickets: 1,
      vip_tickets: 1,
      vvip_tickets: 1,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof eventFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    if (form.formState.isSubmitSuccessful) {
      //   redirect("/tickets");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto w-3/4 grow space-y-8 text-pm_blue"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Music Festival"
                  {...field}
                  className="font-bold text-pm_brown"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="file"
                  className="font-bold text-pm_brown"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="description"
                  className="font-bold text-pm_brown"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Nairobi"
                  className="font-bold text-pm_brown"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          control={form.control}
          name="date"
          render={({ field: { onChange, onBlur, value } }) => (
            <div className="flex flex-col gap-2">
              <FormLabel>Date</FormLabel>
              <ReactDatePicker
                onChange={onChange}
                onBlur={onBlur}
                selected={value}
                className="w-full rounded-sm border p-1 text-sm font-bold text-pm_brown "
                dateFormat="MMMM d, yyyy h:mm aa"
                showTimeSelect
              />
            </div>
          )}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="regular_tickets"
            render={({ field }) => (
              <FormItem>
                <FormLabel>REGULAR</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    className="font-bold text-pm_brown"
                    min={0}
                    max={1000}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vip_tickets"
            render={({ field }) => (
              <FormItem>
                <FormLabel>VIP</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    className="font-bold text-pm_brown"
                    min={0}
                    max={1000}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="vvip_tickets"
            render={({ field }) => (
              <FormItem>
                <FormLabel>VVIP</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="number"
                    className="font-bold text-pm_brown"
                    min={0}
                    max={1000}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit">
          {form.formState.isSubmitting ? "Listing ..." : "List Event"}
        </Button>
      </form>
    </Form>
  );
}
