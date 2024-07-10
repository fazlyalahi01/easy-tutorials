"use client";
import { useAuth } from "@/hooks/useAuth";
import Image from "next/image";
import React from "react";

const ProfileInfo = () => {
    const { auth } = useAuth();
    const email = auth?.user?.email;

    const [user, setUser] = React.useState({
        firstName: auth?.user?.firstName,
        lastName: auth?.user?.lastName,
        email: auth?.user?.email,
        profilePicture: '',
    });

    React.useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/get-user?email=${email}`);
                const data = await response.json();
                if (response.ok) {
                    setUser({
                        firstName: data?.firstName,
                        lastName: data?.lastName,
                        email: data?.email,
                        profilePicture: data?.profilePicture,
                    });
                } else {
                    setError(data.error);
                }
            } catch (e) {
                console.error(e);
            }
        };
        if (email) {
            fetchUser();
        }
    }, [email]);


    return (
        <div className="profile-pic text-center mb-5">
            <input
                id="pro-img"
                name="profile-image"
                type="file"
                className="hidden"
                onchange="loadFile(event)"
            />
            <div>
                <div className="relative size-28 mx-auto">
                    <Image
                        src={user?.profilePicture}
                        className="rounded-full shadow dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800"
                        id="profile-banner"
                        alt="profile-image"
                        width={112}
                        height={112}
                    />
                    <label
                        className="absolute inset-0 cursor-pointer"
                        htmlFor="pro-img"
                    />
                </div>
                <div className="mt-4">
                    <h5 className="text-lg font-semibold">
                        {user?.firstName} {user?.lastName}
                    </h5>
                    <p className="text-slate-400">
                        {email}
                    </p>
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;