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
import { logInFormSchema } from "@/lib/utils";
import { TlogIn } from "@/lib/types";
import { signInWithEmailAndPassword } from "@/lib/actions/auth-action";
import { toast } from "sonner";

export default function LoginForm() {
  const form = useForm<TlogIn>({
    resolver: zodResolver(logInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: TlogIn) {
    const result = await signInWithEmailAndPassword(values);
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
        <Button disabled={form.formState.isSubmitting} type="submit">
          {form.formState.isSubmitting ? "Loging..." : "Log In"}
        </Button>
      </form>
    </Form>
  );
}
