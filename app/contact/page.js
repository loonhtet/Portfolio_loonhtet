import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Contact() {
  return (
    <section>
      <div className="md:w-4/5 lg:w-4/6 mx-auto min-h-screen px-5 md:px-0 py-10">
        <section className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 dark:from-blue-800 dark:via-blue-600 dark:to-blue-900 py-4 md:py-16 text-white shadow-blue-100 dark:shadow-blue-800 shadow-2xl rounded-md">
          <div className="container mx-auto text-center">
            <h1 className="text-2xl md:text-4xl font-cabin font-extrabold uppercase">
              Contact
            </h1>
          </div>
        </section>

        <ContactForm />
      </div>
    </section>
  );
}
