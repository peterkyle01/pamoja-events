"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { signUpFormSchema } from "@/lib/utils";
import { TsignUp } from "@/lib/types";
import { signUpWithEmailAndPassword } from "@/lib/actions/auth";
import { toast } from "sonner";

export default function SignupForm() {
  const form = useForm<TsignUp>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: TsignUp) {
    const result = await signUpWithEmailAndPassword(values);
    const { error } = JSON.parse(result);
    if (error) toast.error("Sign Up Failed!Please try again.");
    else toast.success("Sign Up Successful!");
  }

  if (form.formState.isSubmitSuccessful) {
    location.reload();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-72 grow space-y-8"
      >
        <FormField
          control={form.control}
          name="username"
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
          name="password"
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
        <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Verify Password</FormLabel>
              <FormControl>
                <Input placeholder="super_secret" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Signing..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  );
}
