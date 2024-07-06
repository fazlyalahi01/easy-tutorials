"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Menu() {
	const pathname = usePathname();
	console.log("Current pathname:", pathname);
	return (
		<ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">

			<li className="navbar-item account-menu">
				{console.log(pathname === "/account")}
				<Link
					href="/account"
					className={` flex items-center py-2 rounded ${pathname === "/account" ? "text-primary" : "text-slate-400"
						}`}>
					<span className="mb-0 font-semibold">Accountt</span>
				</Link>
			</li>
			<li className="navbar-item account-menu">
				<Link
					href="/account/enrolled-courses"
					className={` flex items-center py-2 rounded ${pathname === "/account/enrolled-courses" ? "text-primary" : "text-slate-400"
						}`}>
					<span className="mb-0 font-semibold">Enrolled Courses</span>
				</Link>
			</li>

			<li className="navbar-item account-menu">
				<Link
					href="#"
					className="navbar-link text-red-500 flex items-center py-2 rounded">
					<span className="mb-0 font-semibold">Sign Out</span>
				</Link>
			</li>
		</ul>
	);
}

export default Menu;
