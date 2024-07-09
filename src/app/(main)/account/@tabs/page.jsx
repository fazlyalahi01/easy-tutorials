"use client";
import { useAuth } from "@/hooks/useAuth";
import React, { Suspense } from "react";
import ContactInfo from "./_components/ContactInfo";
import PasswordInfo from "./_components/PasswordInfo";
import PersonalInfo from "./_components/PersonalInfo";
import { useRouter } from "next/navigation";


function Profile() {
	const { auth } = useAuth();
	const router = useRouter();
	
	const email = auth?.user?.email;
	const [user, setUser] = React.useState({
		firstName: "",
		lastName: "",
		email: "",
		bio: "",
		designation: "",
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
						bio: data?.bio,
						designation: data?.designation,
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
		<>
			<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
				<h5 className="text-lg font-semibold mb-4">Personal Detail :</h5>
				<PersonalInfo userInfo={user} email={email} />
				{/*end form*/}
			</div>
			<div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
				<div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
					<div>
						<h5 className="text-lg font-semibold mb-4">Contact Info :</h5>
						<ContactInfo />
					</div>
					{/*end col*/}
					<div>
						<h5 className="text-lg font-semibold mb-4">
							Change password :
						</h5>
						<PasswordInfo email={email}/>
					</div>
					{/*end col*/}
				</div>
				{/*end row*/}
			</div>
		</>
	);
}

export default Profile;
