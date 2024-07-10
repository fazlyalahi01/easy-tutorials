import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import React from "react";

const CustomPasswordField = ({ name, placeholder }) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <div className="grid gap-2 relative">
            <Label htmlFor={name}>Password</Label>
            <Input
                id={name}
                name={name}
                type={showPassword ? "text" : "password"}
                required
                placeholder={placeholder}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-8 text-gray-500 font-light"
            >
                {showPassword ? <EyeOff /> : <Eye />}
            </button>
        </div>
    );
};
export default CustomPasswordField;
