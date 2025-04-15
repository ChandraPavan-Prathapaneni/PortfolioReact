import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#FFDAB9] via-peach-200 to-peach-300 pt-20"
    >
      <h2 className="text-4xl font-semibold text-black mb-8">Contact Me</h2>

      <form
        action="https://script.google.com/macros/s/AKfycbznMjG8kda-6vCtNd7WYuLFRWc4baB7bLwL6KITF25bpB8bPylRDD1y8LxkkjJ2Z1AF/exec"
        method="POST"
        className="w-full max-w-lg bg-gradient-to-b from-[#FFDAB9] via-peach-200 to-peach-300 p-8 rounded-lg shadow-lg border-2 border-rose-500"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-4 bg-transparent border-2 border-rose-400 rounded-md text-black focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-4 bg-transparent border-2 border-rose-400 rounded-md text-black focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            className="w-full p-4 bg-transparent border-2 border-rose-400 rounded-md text-black focus:outline-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3  text-black rounded-md hover:scale-110 bg-gradient-to-r from-rose-400 to-orange-300 shadow-md hover:shadow-lg transition duration-300"
        >
          Let's talk
        </button>
      </form>
    </section>
  );
};

export default Contact;
