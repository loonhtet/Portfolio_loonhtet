"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";

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
            className="block md:inline w-full px-4 py-2 font-conden rounded-md bg-gray-200 dark:bg-slate-950/[.30] outline-none border-2 dark:border-blue-500/[.30]"
            placeholder="Name"
          ></input>

          <input
            type="email"
            name="user_email"
            value={formData.email}
            onChange={handleChange}
            className="block md:inline w-full px-4 py-2 font-conden rounded-md bg-gray-200 dark:bg-slate-950/[.30] outline-none border-2 dark:border-blue-500/[.30]"
            placeholder="Email"
          ></input>
        </div>

        <div>
          <textarea
            rows={5}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full block bg-gray-200 dark:bg-slate-950/[.30] p-4 font-conden rounded-md outline-none border-2 dark:border-blue-500/[.30]"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button class="relative inline-flex items-center justify-center p-0.5 mt-5 overflow-hidden text-sm font-medium text-slate-950 rounded-md group bg-gradient-to-br from-blue-500 to-blue-800 dark:from-blue-400 dark:to-blue-900 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <input
              type="submit"
              className="relative cursor-pointer px-5 py-2.5 transition-all ease-in duration-100 bg-white dark:bg-slate-950 rounded-md group-hover:bg-opacity-0"
              disabled={isSending} // Disable the button while sending
              value={isSending ? "Sending..." : "Send Message"}
            />
          </button>
        </div>
      </form>

      <div
        class={`${
          isSuccess ? "noti-ani-sm noti-ani-md" : "opacity-0"
        } opacity-0 absolute md:left-1/2 md:-translate-x-1/2 p-2 bg-green-300/50 dark:bg-slate-950/50 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex`}
      >
        <span class="flex rounded-full text-green-200 dark:text-green-300 bg-green-700 dark:bg-green-950 uppercase px-2 py-1 text-xs font-bold mr-3">
          Sent
        </span>
        <span class="font-semibold mr-2 text-left flex-auto text-green-900 dark:text-green-300">
          Thank you for reaching out! I&apos;ll respond as soon as I can.
        </span>
      </div>

      <div
        class={`${
          isSuccess ? "noti-ani-sm noti-ani-md" : "opacity-0"
        } opacity-0 absolute md:left-1/2 md:-translate-x-1/2 p-2 bg-red-300/50 dark:bg-slate-950/50 items-center text-indigo-100 leading-none rounded-full flex lg:inline-flex`}
      >
        <span class="flex rounded-full text-red-200 dark:text-red-300 bg-red-700 dark:bg-red-950 uppercase px-2 py-1 text-xs font-bold mr-3">
          Error
        </span>
        <span class="font-semibold mr-2 text-left flex-auto text-red-900 dark:text-red-300">
          Failed to reach me here! Please connect with me on another social
          platform.
        </span>
      </div>
    </div>
  );
}

export default ContactForm;
