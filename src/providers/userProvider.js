"use client"
import { UserContext } from "@/contexts";
import React from "react";
import { toast } from "sonner";

export const UserProvider = ({ children, email }) => {
    const [user, setUser] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchUser = async () => {
            setLoading(true);
            try {
                const response = await fetch(`/api/get-user?email=${email}`);
                const data = await response.json();
                if (response.status === 200) {
                    setUser(data?.data);
                } else {
                    toast.error("Error while fetching user");
                }
            } catch (e) {
                toast.error(e);
            } finally {
                setLoading(false);
            }
            setLoading(false);
        };

        if (email) {
            fetchUser();
        }
    }, [email]);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    );
}