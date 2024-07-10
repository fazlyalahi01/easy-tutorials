import { cn } from "@/lib/utils";
export const Logo = ({ className = "" }) => {
  return (
    // <Image className={cn("max-w-[100px]", className)} src={logo} alt="logo" />
    <div className={cn("max-w-[200px]", className)}>
      <p className="text-2xl font-bold text-black">Easy Tutorials</p>
      <p>Learn, that really works</p>
    </div>
  );
};
