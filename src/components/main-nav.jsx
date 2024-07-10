"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

import { MobileNav } from "@/components/mobile-nav";
import { useAuth } from "@/hooks/useAuth";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button, buttonVariants } from "./ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";
export function MainNav({ items, children }) {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const { auth, setAuth, SignOut } = useAuth();

	const handleSignOut = () => {
		setAuth(null);
		localStorage.removeItem("auth");
	}

	return (
		<>
			<div className="flex gap-6 lg:gap-10">
				<Link href="/">
					<Logo />
				</Link>
				{items?.length ? (
					<nav className="hidden gap-6 lg:flex text-center ">
						{items?.map((item, index) => (
							<Link
								key={index}
								href={item.disabled ? "#" : item.href}
								className={cn(
									"flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm"
								)}>
								{item.title}
							</Link>
						))}
					</nav>
				) : null}

				{showMobileMenu && items && (
					<MobileNav items={items}>{children}</MobileNav>
				)}
			</div>
			<nav className="flex items-center gap-3">

				{
					auth?.user ? (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<div className="cursor-pointer">
									<Avatar>
										<AvatarImage
											src="https://github.com/shadcn.png"
											alt="@shadcn"
										/>
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
								</div>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56 mt-4">
								<p className="text-sm p-2 ">
									<span >Hello, {auth?.user?.first_name}</span>
									<span> {auth?.user?.email}</span>
								</p>
								<hr />

								<DropdownMenuItem className="cursor-pointer" asChild>
									<Link href="account">Profile</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer" asChild>
									<Link href="account/enrolled-courses">My Courses</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer" asChild>
									<Link href="">Testimonials & Certificates</Link>
								</DropdownMenuItem>
								<DropdownMenuItem className="cursor-pointer" asChild onClick={handleSignOut}>
									<Link href="" >Logout</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					) : (
						<div className="items-center gap-3 hidden lg:flex">
							<Link
								href="/login"
								className={cn(buttonVariants({ size: "sm" }), "px-4")}>
								Login
							</Link>
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button variant="outline" size="sm">
										Register
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent align="end" className="w-56 mt-4">
									<DropdownMenuItem className="cursor-pointer">
										<Link href="/register/student">Student</Link>
									</DropdownMenuItem>
									<DropdownMenuItem className="cursor-pointer">
										<Link href="/register/instructor">Instructor</Link>
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
						</div>
					)
				}
				<button
					className="flex items-center space-x-2 lg:hidden"
					onClick={() => setShowMobileMenu(!showMobileMenu)}>
					{showMobileMenu ? <X /> : <Menu />}
				</button>
			</nav>
		</>
	);
}
