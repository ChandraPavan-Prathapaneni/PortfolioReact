import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-800 py-16">
      <h2 className="text-4xl font-semibold text-white mb-8">Contact Me</h2>

      <form
        action="https://script.google.com/macros/s/AKfycbznMjG8kda-6vCtNd7WYuLFRWc4baB7bLwL6KITF25bpB8bPylRDD1y8LxkkjJ2Z1AF/exec"
        method="POST"
        className="w-full max-w-lg bg-gray-900 p-8 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full p-4 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full p-4 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="6"
            className="w-full p-4 bg-transparent border-2 border-cyan-500 rounded-md text-white focus:outline-none"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-b from-cyan-500 to-blue-500 text-white rounded-md hover:scale-110 duration-300"
        >
          Let's talk
        </button>
      </form>
    </section>
  );
};

export default Contact;
