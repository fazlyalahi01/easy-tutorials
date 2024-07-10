"use client";
import { updateProfileAction } from "@/actions/update-profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { toast } from "sonner";

const PersonalInfo = ({ userInfo, email }) => {
    const [infoState, setInfoState] = React.useState({
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        email: userInfo.email,
        bio: userInfo.bio,
        designation: userInfo.designation,
    });

    React.useEffect(() => {
        setInfoState(userInfo)
    }, [userInfo])

    const handleChange = async (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInfoState({ ...infoState, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateProfileAction(email, infoState);
            toast.success("Profile updated successfully");
            // window.location.reload();
        } catch (error) {
            toast.error(`Error: ${error.message}`)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                <div>
                    <Label className="mb-2 block">
                        First Name : <span className="text-red-600">*</span>
                    </Label>
                    <Input
                        type="text"
                        placeholder="First Name:"
                        id="firstName"
                        name="firstName"
                        value={infoState.firstName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <Label className="mb-2 block">
                        Last Name : <span className="text-red-600">*</span>
                    </Label>
                    <Input type="text" placeholder="Last Name:" name="lastName" value={infoState?.lastName} onChange={handleChange} required />
                </div>
                <div>
                    <Label className="mb-2 block">
                        Your Email : <span className="text-red-600">*</span>
                    </Label>
                    <Input type="email" placeholder="Email" name="email" value={infoState?.email} disabled />
                </div>
                <div>
                    <Label className="mb-2 block">Designation :</Label>
                    <Input
                        name="designation"
                        id="designation"
                        value={infoState?.designation}
                        type="text"
                        onChange={handleChange}
                        placeholder="Designation :"
                    />
                </div>
            </div>
            {/*end grid*/}
            <div className="grid grid-cols-1">
                <div className="mt-5">
                    <Label className="mb-2 block">Bio :</Label>
                    <Textarea id="bui" name="bio" value={infoState?.bio} placeholder="Enter your Bio" onChange={handleChange} />
                </div>
            </div>
            {/*end row*/}
            <Button className="mt-5 cursor-pointer" asChild>
                <input type="submit" name="send" value="Save Changes" />
            </Button>
        </form>
    );
}
export default PersonalInfo;