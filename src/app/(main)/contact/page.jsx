import Link from "next/link";

const Contact = () => {
    return (
        <div className="container md:py-12 py-8">
            <p>Please feel free to get in touch by any of the following...</p>

            <ul className="ms-10 mt-2 ">
                <li className="list-disc text-black underline"><Link href={"mailto:fazlyalahi.ru@gmail.com"} >fazlyalahi.ru@gmail.com</Link></li>
                <li className="list-disc text-black underline"><Link href={"tel:01303359120"} >01303359120</Link></li>
                <li className="list-disc text-black underline"><Link href={"https://facebook.com/fazlyalahiru"} >Facebook</Link></li>
                <li className="list-disc text-black underline"><Link href={"https://linkedin.com/in/fazlyalahiru"} >LinkedIn</Link></li>
                <li className="list-disc text-black underline"><Link href={"https://wa.me/01303359120"} >WhatsApp</Link></li>
            </ul>
        </div>
    );
}
export default Contact