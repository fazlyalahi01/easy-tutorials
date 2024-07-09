import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ContactInfo = async () => {        
    return (
        <form>
            <div className="grid grid-cols-1 gap-5">
                <div>
                    <Label className="mb-2 block">Phone No. :</Label>
                    <Input
                        name="number"
                        id="number"
                        type="number"
                        placeholder="Phone :"
                    />
                </div>
                <div>
                    <Label className="mb-2 block">Website :</Label>
                    <Input
                        name="url"
                        id="url"
                        type="url"
                        placeholder="Url :"
                    />
                </div>
            </div>
            {/*end grid*/}
            <Button className="mt-5" type="submit">
                Add
            </Button>
        </form>
    );
}
export default ContactInfo;