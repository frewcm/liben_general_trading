import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { redirect } from "react-router-dom";
import { ImSpinner11 } from "react-icons/im";

export default function ContactOne() {
  const [state, handleSubmit] = useForm("xovavnep");
  if (state.succeeded) {
    redirect("/");
  }
  return (
    <section className="mt-96 w-full h-[900px] md:h-[800px]  bg-white">
      <p className=" pt-10 py-2 text-center text-4xl font-kanit">
        Reach out to us...
      </p>
      <p className="w-11/12 md:w-8/12 mx-auto text-center text-lg font-kanit">
        Contact us today and experience our commitment to exceptional service.
        Whether you have questions about our products, need assistance, or want
        to place an order, we're here to help. Simply reach out via phone,
        email, or our website, and we’ll get back to you very soon. Your
        satisfaction is our priority!
      </p>
      <div className="w-8/12 h-full mx-auto ">
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xovavnep"
          method="POST"
          className="py-6 w-full h-full mx-auto flex flex-col items-center gap-6 "
        >
          <input
            className="w-96 md:w-full h-12 rounded bg-tertiary pl-2 placeholder:text-gray-500 focus:outline-none"
            placeholder="Name"
            type="text"
            id="name"
            name="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
          <input
            className="w-96 md:w-full h-12 rounded bg-tertiary pl-2 placeholder:text-gray-500 focus:outline-none"
            placeholder="Email Name"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            className=" w-96 md:w-full h-12 rounded bg-tertiary pl-2 placeholder:text-gray-500 focus:outline-none"
            placeholder="Phone Number"
            id="phone"
            type="number"
            name="phone"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
          <textarea
            className="w-96 md:w-full h-[153px] rounded bg-tertiary pl-2 placeholder:text-gray-500 focus:outline-none"
            placeholder="Message"
            id="message"
            type="text"
            name="message"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className={`w-96 flex justify-center items-center md:w-full h-12 rounded bg-tertiary text-center transition ease-in-out duration-200`}
          >
            {state.submitting ? <ImSpinner11 size={20} /> : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
