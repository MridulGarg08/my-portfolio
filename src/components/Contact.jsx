import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Try Again!!!");
        }
      );
  };

  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to bg-gray-800 w-full p-4 text-white md:h-screen md:pt-64"
    >
      <div className="max-w-screen-lg flex flex-col p-4 justify-center h-full mx-auto pb-64">
        <div className="md:mx-32">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </h1>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="pb-8 flex flex-col justify-center md:mx-32">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">
            <input
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              type="text"
              name="from_name"
              required
              placeholder="Enter Your Name"
            ></input>
            <input
              className="p-2 my-4 bg-transparent border-2 rounded-md focus:outline-none"
              type="email"
              name="from_email"
              placeholder="Enter Your E-mail"
              required
            ></input>
            <textarea
              name="message"
              rows="5"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
              placeholder="Enter Your Message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send"
              className="bg-gradient-to-b from bg-cyan-500 to to-blue-500 mx-auto py-3 px-6 my-8 rounded-md hover:scale-105 duration-300"
            >
              Lets's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
