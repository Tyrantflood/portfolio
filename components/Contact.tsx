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
  const [isSubmitted, setIsSubmitted] = useState(false); // State variable to track form submission

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

  // Define the submit function
  const handleSubmit = async (values: FormValues) => {
    // Perform your form submission logic here
    console.log(values);
    // Set the form submission status to true
    setIsSubmitted(true);

    try {
      const response = await fetch("https://formspree.io/f/xaygjqvq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Form submission successful
        console.log("Message sent successfully!");
      } else {
        // Form submission failed
        console.log("Error submitting the form.");
      }
    } catch (error) {
      console.log("An error occurred while submitting the form.", error);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-24 mdl:py-28 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <Reveal2>
        <span className="text-textGreen mdl:text-4xl text-3xl font-bold font-titleFont">
          {'<wrapper id="contact">'}
        </span>
      </Reveal2>

      <div className="py-12 flex w-full flex-col md:flex-row gap-6">
        <div className="tracking-wide xl:w-1/2">
          <Reveal2>
            <h1 className="xl:text-4xl font-bold text-textlight font-titleFont text-2xl">
              Get in touch
            </h1>
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
              <div className="text-center text-textGreen font-bold">
                Message successfully sent!
              </div>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
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
                      className="mdl:mt-0 px-12 mt-4 rounded-md border w-full border-textGreen h-[50px] bg-[#112240] text-textGreen font-bold hover:bg-textGreen active:opacity-30 active:duration-200 hover:text-textDark"
                      data-scroll-id="contact"
                      type="submit"
                    >
                      Send
                    </button>
                  </div>
                </Form>
              </Formik>
            )}
          </div>
        </div>
      </div>

      <Reveal2>
        <span className="text-textGreen mdl:text-4xl text-3xl font-bold font-titleFont">
          {"</wrapper>"}
        </span>
      </Reveal2>
    </section>
  );
};

export default Contact;
