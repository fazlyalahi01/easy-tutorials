"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/login";
import { toast } from "sonner";

export function LoginForm() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);


    try {
      const user = await loginAction(formData);
      if (!user) {
        throw new Error("Invalid credentials");
      }

      if (user) {
        setAuth({
          user: {
            name: user.firstName + " " + user.lastName,
            email: user.email,
            role: user.role
          }
        });
        toast.success("Login successful");
        router.push("/");
      }
    } catch (error) {
      toast.error("Invalid credentials");
    }
  }
  return (
    <Card className="mx-auto max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                name="password"
                placeholder="••••••••"
                type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account? <br />{" "}
          <span>Register as </span>
          <Link href="/register/instructor" className="underline">
            instructor
          </Link>
          {" or "}
          <Link href="/register/student" className="underline">
            student
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
