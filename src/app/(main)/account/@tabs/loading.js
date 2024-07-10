import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    const array = new Array(5).fill(0);
    return (
        <div className="container">
            {array.map((_, i) => (
                <Skeleton key={i} className="h-4 w-full mt-2" />
            ))}            
        </div>
    );
}

export default loading; 