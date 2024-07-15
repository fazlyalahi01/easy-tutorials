"use client"
import { useAuth } from "@/hooks/useAuth";
import { MainNav } from "../main-nav";
import { SiteFooter } from "../site-footer";
import { UserProvider } from "@/providers/userProvider";
import "../../styles/globals.css";

const MainLayoutView = ({ children }) => {
    const navLinks = [
        {
            title: "Features",
            href: "/#features",
        },
        {
            title: "Pricing",
            href: "/pricing",
        },
        {
            title: "Blog",
            href: "/blog",
        },
        {
            title: "Documentation",
            href: "/docs",
        },
    ];

    return (
        <UserProvider email={useAuth().auth?.user?.email}>
            <div className="flex min-h-screen flex-col">
                <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
                    <div className="container flex h-20 items-center justify-between py-6 ">
                        <MainNav items={navLinks} />
                    </div>
                </header>
                <main className="flex-1 pt-20 flex flex-col">
                    {children}
                </main>
                <SiteFooter />
            </div>

        </UserProvider>
    );
}
export default MainLayoutView;