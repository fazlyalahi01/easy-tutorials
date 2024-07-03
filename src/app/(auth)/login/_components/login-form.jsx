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
import jwt from "jsonwebtoken";
import { useRouter } from "next/navigation";
import cookie from "js-cookie"; 

export function LoginForm() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      const { token } = await response.json();
      cookie.set('authToken', token, { expires: 7 });
      const decodeVAlue = jwt.decode(token);
      if (decodeVAlue) {
        setAuth({
          user: {
            first_name: decodeVAlue.first_name,
            last_name: decodeVAlue.last_name,
            email: decodeVAlue.email,
            role: decodeVAlue.role
          },
          token
        })

        router.push("/")
      }
      console.log(data)
    } catch (error) {
      console.log(error);
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
