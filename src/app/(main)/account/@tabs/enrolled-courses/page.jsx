"use client";
import { useAuth } from "@/hooks/useAuth";
import { useUser } from "@/hooks/useUser";
import React from "react";
import { toast } from "sonner";

function EnrolledCourses() {
	const { auth } = useAuth();
	// const [user, setUser] = React.useState({});

	// React.useEffect(() => {
	// 	const fetchUser = async () => {
	// 		try {
	// 			const response = await fetch(`/api/get-user?email=${auth?.user?.email}`);
	// 			const data = await response.json();
	// 			if (response.status === 200) {
	// 				setUser(data);
	// 			} else {
	// 				toast.error("Something went wrong fetching user data")
	// 			}
	// 			console.log(data);
	// 		} catch (err) {
	// 			toast.error(err.message)
	// 		}
	// 	}

	// 	fetchUser()
	// }, [auth])

	const { user, loading } = useUser()
	console.log(user)
	return (
		<div className="grid sm:grid-cols-2 gap-6">
			{/* <CourseCard /> */}

		</div>
	);
}

export default EnrolledCourses;
