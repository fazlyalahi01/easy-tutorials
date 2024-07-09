import { Input } from "@/components/ui/input";
import { CircleX, PlusCircle } from "lucide-react";

const SocialLink = ({ index, value, onChange, handleAddNewRow, handleDeleteRow }) => {
    return (
        <div className="flex justify-center items-center gap-2">
            <Input
                name={`url-${index}`}
                id={`url-${index}`}
                type="text"
                value={value}
                onChange={(e) => onChange(index, e.target.value)}
                placeholder="socialmedia.com/yourname"
            />
            <PlusCircle onClick={handleAddNewRow} className="cursor-pointer text-gray-600 hover:text-black" />
            <CircleX onClick={() => handleDeleteRow(index)} className="cursor-pointer text-red-500 hover:text-red-800" />
        </div>
    );
};
export default SocialLink;
