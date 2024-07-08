import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PasswordInfo = () => {
    return (
        <form>
							<div className="grid grid-cols-1 gap-5">
								<div>
									<Label className="mb-2 block">Old password :</Label>
									<Input
										type="password"
										placeholder="Old password"
										required=""
									/>
								</div>
								<div>
									<Label className="mb-2 block">New password :</Label>
									<Input
										type="password"
										placeholder="New password"
										required=""
									/>
								</div>
								<div>
									<Label className="mb-2 block">
										Re-type New password :
									</Label>
									<Input
										type="password"
										placeholder="Re-type New password"
										required=""
									/>
								</div>
							</div>
							{/*end grid*/}
							<Button className="mt-5" type="submit">
								Save password
							</Button>
						</form>
    );
}
export default PasswordInfo;