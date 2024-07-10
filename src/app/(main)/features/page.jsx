const Features = () => {
    return (
        <div className="container md:py-12 py-8">
            <p>Hey there, thanks for checking this out. I&apos;m Fazly a front-end focused MERN developer. I love to learn and create new things.
                <br />
                Easy tutorials is a course selling website where instructor can upload their course and student can buy it using stripe payment method. Core technologies I&apos;ve used are...</p>

            <ul className="ms-10 mt-2">
                <li className="list-disc">React</li>
                <li className="list-disc">Next.js</li>
                <li className="list-disc">Tailwind</li>
                <li className="list-disc">Shadcn</li>
                <li className="list-disc">Resend email</li>
                <li className="list-disc">MongoDB</li>
            </ul>


            <p className="mt-4">Now, let me mention the core features:</p>
            <ul className="ms-10 mt-2">
                <li className="list-disc">Different profile for student and instructor</li>
                <li className="list-disc">Stripe payment method</li>
                <li className="list-disc">Email confirmation using Resend</li>
                <li className="list-disc">Bufferless video stream</li>
                <li className="list-disc">Strong database management using mongodb</li>
                <li className="list-disc">Secure registration and login system</li>
            </ul>
            <p className="mt-4">If you don&apos;t want to create account, you can login by using one of these two...</p>
            <ul className="ms-10 mt-2">
                <li className="list-disc">email: student@gmail.com pass: 1234</li>
                <li className="list-disc">email: instructor@gmail.com pass: 1234</li>           
            </ul>


        </div>
    );
}
export default Features