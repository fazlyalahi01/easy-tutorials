import { getUserByEmail } from "@/queries/user-queries";

const CourseContainer = async ({ auth }) => {
    console.log(auth)
    const user = await getUserByEmail(auth?.user?.email);
    console.log(user)
    return (
        <div className="grid sm:grid-cols-2 gap-6">

        </div>
    );
}
export default CourseContainer;