import React, { useState } from "react";
import { Reveal2 } from "./Reveal2";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false); // true only once Formspree has accepted the message
  const [sendFailed, setSendFailed] = useState(false); // true when the last attempt did not go through

  // Define the initial form values
  const initialValues: FormValues = {
    name: "",
    email: "",
    message: "",
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  // Define the submit function. The success message is only shown once the server has accepted the message.
  const handleSubmit = async (values: FormValues) => {
    setSendFailed(false);

    try {
      const response = await fetch("https://formspree.io/f/xaygjqvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
        signal: AbortSignal.timeout(15000),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setSendFailed(true);
      }
    } catch {
      // network down, blocked, or timed out
      setSendFailed(true);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-24 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <Reveal2>
        <span aria-hidden="true" className="text-textGreen mdl:text-4xl text-3xl font-bold font-titleFont">
          {'<wrapper id="contact">'}
        </span>
      </Reveal2>

      <div className="py-12 flex w-full flex-col md:flex-row gap-6">
        <div className="tracking-wide xl:w-1/2">
          <Reveal2>
            <h2 className="xl:text-4xl font-bold text-textlight font-titleFont text-2xl">
              Get in touch
            </h2>
          </Reveal2>
          <Reveal2>
            <p className="font-titleFont font-[300] pt-8">
              Have any questions?
            </p>
          </Reveal2>
          <Reveal2>
            <p className="font-titleFont font-[300] ">
              Shoot me an email or find me around the web.
            </p>
          </Reveal2>
          <Reveal2>
            <p className="font-titleFont  text-textGreen font-semibold ">
              {"Can't wait to get in touch. "}
            </p>
          </Reveal2>
        </div>

        <div className="w-full xl:w-1/2 md:w-[34rem] mx-auto">
          <div className="p-6 border border-textGreen sm:rounded-md">
            {isSubmitted ? (
              <div role="status" className="text-center text-textGreen font-bold">
                Message successfully sent!
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                <Form action="https://formspree.io/f/xaygjqvq" method="POST">
                  <div>
                    <label htmlFor="name"></label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="focus:bg-bodyColor h-[50px] bg-[#112240]  block w-full mt-1 px-4 border border-textGreen rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-opacity-50 placeholder-font-bold"
                      placeholder="Name"
                    />
                    <ErrorMessage name="name" component="div" />
                  </div>

                  <div>
                    <label htmlFor="email"></label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="focus:bg-bodyColor block w-full mt-6 h-[50px] border-textGreen px-4 rounded-md border shadow-sm bg-[#112240] focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-opacity-50 placeholder-font-bold"
                      placeholder="Email"
                      required
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>

                  <div>
                    <label htmlFor="message"></label>
                    <Field
                      as="textarea"
                      id="message"
                      name="message"
                      className="h-[150px] block w-full mt-6 border pl-4 border-textGreen rounded-md shadow-sm bg-[#112240] focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 placeholder-opacity-50 placeholder-font-bold"
                      placeholder="Message Me"
                    />
                    <ErrorMessage name="message" component="div" />
                  </div>

                  <div className=" my-6">
                    <button
                      className="mdl:mt-0 px-12 mt-4 rounded-md border w-full border-textGreen h-[50px] bg-[#112240] text-textGreen font-bold hover:bg-textGreen active:opacity-30 active:duration-200 hover:text-textDark disabled:opacity-60 disabled:cursor-not-allowed"
                      data-scroll-id="contact"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send"}
                    </button>
                    {sendFailed && (
                      <p role="alert" className="mt-4 text-center text-sm text-red-300">
                        Sorry, your message was not sent. Please check your connection and try again.
                      </p>
                    )}
                  </div>
                </Form>
                )}
              </Formik>
            )}
          </div>
        </div>
      </div>

      <Reveal2>
        <span aria-hidden="true" className="text-textGreen mdl:text-4xl text-3xl font-bold font-titleFont">
          {"</wrapper>"}
        </span>
      </Reveal2>
    </section>
  );
};

export default Contact;
