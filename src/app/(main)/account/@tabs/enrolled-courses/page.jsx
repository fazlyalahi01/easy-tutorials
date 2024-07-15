"use client";
import { useUser } from "@/hooks/useUser";
import EnrolledCourseCard from "./_components/enrolled-course-card";

function EnrolledCourses() {	

	const { user, loading } = useUser()
	console.log(user)
	return (
		<div className="grid sm:grid-cols-2 gap-6">
			<EnrolledCourseCard />
		</div>
	);
}

export default EnrolledCourses;
