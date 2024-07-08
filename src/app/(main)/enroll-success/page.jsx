import { Button } from "@/components/ui/button";
import { sendEmails } from "@/lib/resendEmail";
import { stripe } from "@/lib/stripe";
import { getCourseById } from "@/queries/course-queries";
import { upsertNewEnrollment } from "@/queries/enrollment-queries";
import { getUserByEmail } from "@/queries/user-queries";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import React from "react";

const Success = async ({ searchParams: { session_id, courseId, email } }) => {

  if (!session_id) {
    throw new Error("Please provide a valide session_id starts with cs_")
  }

  const loggedInUser = await getUserByEmail(email);
  const course = await getCourseById(courseId);
  if (!loggedInUser) {
    throw new Error("Please login first");
  }

  const checkoutSession = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"]
  });


  const status = checkoutSession?.payment_intent?.status;

  // Cutomer info
  const customerName = `${loggedInUser?.firstName} ${loggedInUser?.lastName}`;
  const customerEmail = loggedInUser?.email;
  const productName = course?.title;

  console.log(customerEmail)

  if (status === "succeeded") {
    // db insert
    const enrolled = await upsertNewEnrollment(
      course?.id,
      loggedInUser?.id,
      "stripe"
    );

    // send email
    const instructorName = `${course?.instructor?.firstName} ${course?.instructor?.lastName}`;
    const instructorEmail = course?.instructor?.email;

    const emailsToSend = [
      {
        to: instructorEmail,
        subject: `New Enrollment for ${productName}.`,
        message: `Congratulations, ${instructorName}. A new student, ${customerName} has enrolled to your course ${productName} just now. Please check the instructor dashboard and give a high-five to your new student.`,
      },
      {
        to: customerEmail,
        subject: `Enrollment Success for ${productName}`,
        message: `Hey ${customerName} You have successfully enrolled for the course ${productName}`,
      }
    ];

    const emailSentResponse = await sendEmails(emailsToSend);
  }

  return (
    <div className="h-full w-full flex-1 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center gap-6 max-w-[600px] text-center">
        <CircleCheck className="w-32 h-32 bg-success rounded-full p-0 text-green-600" />
        <h1 className="text-xl md:text-2xl lg:text-3xl">
          Congratulations, <strong>{customerName}</strong>! You Enrollment was Successful for <strong>{course?.title}</strong>
        </h1>
        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/account/enrolled-courses">Browse Enrolled Courses</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="/courses">Check Out More Course</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Success;
