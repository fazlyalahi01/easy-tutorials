import Image from "next/image";
import { getAllCourse } from "../../queries/course-queries";

export default async function Home() {
  const allCourse = await getAllCourse();
  return (
    <p>{allCourse.length}</p>
  );
}
