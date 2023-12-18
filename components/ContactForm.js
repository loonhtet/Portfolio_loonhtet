"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiErrorCircle } from "react-icons/bi";

function ContactForm() {
  emailjs.init("zCC6qrGnAMBqNy0Ee");

  const [formData, setFormData] = useState({
    name: null,
    email: null,
    message: null,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true); // Set sending state to true

    emailjs
      .send("service_z4mq959", "template_1eibb85", formData)
      .then((response) => {
        console.log("Email sent successfully:", response);
        setIsSuccess(true);
        setIsError(false);
        setIsSending(false); // Set sending state back to false
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
        setIsSuccess(false);
        setIsError(true);
        setIsSending(false); // Set sending state back to false
      });
  };

  return (
    <div className="mt-6">
      <h3 className="text-3xl mb-5 font-cabin text-bold">Let&apos;s talk...</h3>

      <form onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row justify-between gap-1 mb-2">
          <input
            type="text"
            name="user_name"
            value={formData.name}
            onChange={handleChange}
            className="block md:inline w-full px-4 py-2 font-conden rounded-md bg-gray-200 dark:bg-gray-900 outline-none border-b-2 border-transparent focus:border-blue-500"
            placeholder="Name"
          ></input>

          <input
            type="email"
            name="user_email"
            value={formData.email}
            onChange={handleChange}
            className="block md:inline w-full px-4 py-2 font-conden rounded-md bg-gray-200 dark:bg-gray-900 outline-none border-b-2 border-transparent focus:border-blue-500"
            placeholder="Email"
          ></input>
        </div>

        <div>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full block bg-gray-200 dark:bg-gray-900 p-4 font-conden rounded-md outline-none border-b-2 border-transparent focus:border-blue-500"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 font-ptsan font-semibold text-white px-4 py-2 mt-4 rounded-md duration-100"
            disabled={isSending} // Disable the button while sending
            value={isSending ? "Sending..." : "Send Message"}
          />
        </div>
      </form>

      <div
        className={`${
          isSuccess ? "noti-ani" : "opacity-0"
        } absolute flex justify-center items-center gap-1 w-max px-4 py-1 shadow-2xl shadow-green-100 bg-green-100 border-green-300 text-xl font-cabin font-semibold text-green-900  border-2 dark:border-green-800 dark:bg-green-950 dark:text-green-100 rounded-md`}
      >
        <IoMdCheckmarkCircleOutline />
        Sent!
      </div>

      <div
        className={`${
          isError ? "noti-ani" : "opacity-0"
        } absolute flex justify-center items-center gap-1 w-max px-4 py-1 shadow-2xl shadow-green-100 bg-green-100 border-green-300 text-xl font-cabin font-semibold text-green-900 dark:bg-green-950 border-2 dark:border-green-800 dark:text-green-100 rounded-md`}
      >
        <IoMdCheckmarkCircleOutline />
        Error!
      </div>
    </div>
  );
}

export default ContactForm;
