"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
	{
		title: "Account",
		href: "/account",
	},
	{
		title: "Enrolled Courses",
		href: "/account/enrolled-courses",
	},
]
function Menu() {
	const pathname = usePathname();
	return (
		<ul className="list-none sidebar-nav mb-0 mt-3" id="navmenu-nav">

			{
				items?.map((item, index) => (
					<li className="navbar-item account-menu" key={index}>
						<Link
							href={item.href}
							className={` flex items-center py-2 rounded ${pathname === item.href ? "text-primary" : "text-slate-400"
								}`}>
							<span className="mb-0 font-semibold">{item.title}</span>
						</Link>
					</li>
				))
			}
			<li className="navbar-item account-menu">
				<Link
					href="#"
					className="navbar-link text-slate-400 flex items-center py-2 rounded">
					<span className="mb-0 font-semibold">Sign Out</span>
				</Link>
			</li>
		</ul>
	);
}

export default Menu;
