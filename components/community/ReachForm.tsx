import React, { FormEvent, useState } from "react";

export default function ReachForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Funtion to handle form when it is submitted
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="bg-passengerCommunityBG lg:px-40 px-5 py-2 relative mt-10">
      <p className="font-mediumn text-[0.85rem]">
        Reach out to us if you are interested in supporting the P.I.T.C project
        by filling the form below
      </p>

      {/* Form */}
      <form className="mt-10" onSubmit={handleSubmit}>
        {/* NAME AND EMAIL */}
        <div className="w-full flex flex-col lg:flex-row lg:gap-10 gap-0">
          {/* Your Name */}
          <div className="mt-14 lg:w-1/2 w-full">
            <label
              className="font-semibold relative bottom-5 text-[0.85rem]"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              onChange={(event) => setName(event.target.value)}
              value={name}
              required
              className="w-full h-14 p-5 bg-passengerBoxGray border-none focus:ring-1 focus:ring-passengerDarkRed"
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name"
            />
          </div>

          {/* Your Email */}
          <div className="mt-14 lg:w-1/2 w-full">
            <label
              className="font-semibold relative bottom-5 text-[0.85rem]"
              htmlFor="email"
            >
              Your Email Address
            </label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
              className="w-full h-14 p-5 bg-passengerBoxGray border-none focus:ring-1 focus:ring-passengerDarkRed"
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email Address"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div className="mt-14">
          <label
            className="font-semibold relative bottom-5 text-[0.85rem]"
            htmlFor="message"
          >
            Leave A Message
          </label>
          <div>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              value={message}
              required
              rows={8}
              placeholder="Leave Your Message Here"
              className="w-full p-5 bg-passengerBoxGray border-none focus:ring-1 focus:ring-passengerDarkRed"
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="w-full font-semibold bg-passengerDarkRed text-white p-4 text-center mt-10 hover:bg-passengerRed hover:text-white"
        >
          Send
        </button>
      </form>
    </section>
  );
}
