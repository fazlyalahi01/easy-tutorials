"use client";
import { updateSocialMediaAction } from "@/actions/update-social-links";
import SocialLink from "@/components/input/social-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { produce } from "immer";
import React from "react";
import { toast } from "sonner";

const ContactInfo = ({ user }) => {
    console.log(user)

   
    const [socialLinks, setSocialLinks] = React.useState(user?.socialMedia || [""]);
    console.log(socialLinks)
    const [phone, setPhone] = React.useState(user?.phone || "");

    const handleAddNewRow = () => {
        setSocialLinks([...socialLinks, ""]);
    };

    const handleDeleteRow = (index) => {
        const newSocialLinks = [...socialLinks];
        newSocialLinks.splice(index, 1);
        setSocialLinks(newSocialLinks);
    };

    const handleSocialLinkChange = (index, value) => {
        console.log(index, value)
        const newValue = produce(socialLinks, (draft) => {
            draft[index] = value;
        })

        setSocialLinks(newValue)
    };

    const handleSubmit = async (event) => {
        console.log(socialLinks, phone)
        event.preventDefault();
        try {
            await updateSocialMediaAction(user?.email, phone, socialLinks);
            toast.success("Profile updated successfullyy");
            // window.location.reload();
        } catch (error) {
            toast.error(`Error: ${error.message}`);
        }
    };

    React.useEffect(() => {
        setSocialLinks(user?.socialMedia || [""]); 
        setPhone(user?.phone || "");
    }, [user])

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5">
                <div>
                    <Label className="mb-2 block">Phone No. :</Label>
                    <Input
                        name="phone"
                        id="phone"
                        type="number"
                        placeholder="Phone :"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="mb-2 block">Social Links :</Label>
                    {socialLinks.map((link, index) => (
                        <SocialLink
                            key={index}
                            index={index}
                            value={link}
                            onChange={handleSocialLinkChange}
                            handleAddNewRow={handleAddNewRow}
                            handleDeleteRow={handleDeleteRow}
                        />
                    ))}
                </div>
            </div>
            {/*end grid*/}
            <Button className="mt-5" type="submit">
                Add
            </Button>
        </form>
    );
};
export default ContactInfo;
