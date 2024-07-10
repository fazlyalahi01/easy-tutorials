"use client"
import { changePasswordAction } from "@/actions/change-password";
import CustomPasswordField from "@/components/input/password-field";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const PasswordInfo = ({email}) => {

	const handleChangePassword = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		try {
			await changePasswordAction(formData, email);
			toast.success("Password changed successfully");
		} catch (error) {
			toast.error(error.message);
		}
	};
	
	return (
		<form onSubmit={handleChangePassword}>
			<div className="grid grid-cols-1 gap-5">
				<CustomPasswordField
					name="oldPassword"
					placeholder="Old Password"
				/>
				<CustomPasswordField
					name="newPassword"
					placeholder="New Password"
				/>
				<CustomPasswordField
					name="retypePassword"
					placeholder="Retype New Password"
				/>
			</div>
			{/*end grid*/}
			<Button className="mt-5" type="submit">
				Save password
			</Button>
		</form>
	);
}
export default PasswordInfo;