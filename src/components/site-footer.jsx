import { cn } from "@/lib/utils";
import { Logo } from "./logo";

export function SiteFooter({ className }) {
  return (
    <footer className={cn(className, "bg-gray-50")}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 ">
          <Logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built with
            <span> &hearts;</span> using{" "}
            Next.js and Shadcn.{" "}
            <span >Test Student account: &quot;student@gmail.com&quot; Password: &quot;1234&quot;</span>            
          </p>
        
      </div>
    </footer>
  );
}
