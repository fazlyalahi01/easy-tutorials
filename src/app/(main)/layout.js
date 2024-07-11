"use client";
import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
import "../globals.css";
import dbConnect from "@/services/dbConnect";
import { UserProvider } from "@/providers/userProvider";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Toaster } from "@/components/ui/sonner";
import React, { useEffect, useState } from "react";
import { AuthProvider } from "@/providers/authProvider";
import { useAuth } from "@/hooks/useAuth";

const navLinks = [
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Browse Courses",
    href: "/courses",
  },
  {
    title: "Contact",
    href: "/contact",
  }
];

const MainLayout = ({ children }) => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const connectdb = async () => {
      await dbConnect();
    };
    connectdb();
  }, []);

  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <AuthConsumer>
            {(auth) => {
              if (auth?.user?.email && auth.user.email !== email) {
                setEmail(auth.user.email);
              }
              return (
                <UserProvider email={email}>
                  <div className="flex min-h-screen flex-col">
                    <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
                      <div className="container flex h-20 items-center justify-between py-6 ">
                        <MainNav items={navLinks} />
                      </div>
                    </header>
                    <main className="flex-1 pt-20 flex flex-col">
                      <ErrorBoundary fallback={<Error />}>
                        {children}
                      </ErrorBoundary>
                    </main>
                    <SiteFooter />
                  </div>
                  <Toaster richColors position="top-center" />
                </UserProvider>
              );
            }}
          </AuthConsumer>
        </AuthProvider>
      </body>
    </html>
  );
};

const AuthConsumer = ({ children }) => {
  const { auth } = useAuth();
  return children(auth);
};

export default MainLayout;
