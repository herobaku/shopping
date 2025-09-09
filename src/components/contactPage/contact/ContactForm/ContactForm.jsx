// import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  return (
    <>
      <h1 className="text-3xl font-bold capitalize mb-5">Get in Touch</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          address: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
          address: Yup.string(),
          phone: Yup.string(),
          subject: Yup.string(),
          message: Yup.string().required("Message is required"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await fetch(
              "https://server-shopping-0czk.onrender.com/contact",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              }
            );

            if (response.ok) {
              toast.success("Message sent successfully");
              resetForm();
            } else {
              console.error("Failed to send message");
              toast.error("Failed to send message");
            }
          } catch (error) {
            console.error("Error sending message:", error);
            toast.error("Error sending message: " + error.message);
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Form className="flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="sm:w-1/2 w-full">
              <div className="input-field">
                <label htmlFor="name">
                  Name<span className="text-redLight">*</span>
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full px-[15px] py-[8px] border border-text-[#ced4da] outline-[#80bdff]"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>
            <div className="sm:w-1/2 w-full">
              <div className="input-field">
                <label htmlFor="email">
                  Email<span className="text-redLight">*</span>
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-[15px] py-[8px] border border-text-[#ced4da] outline-[#80bdff]"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-7">
            <div className="sm:w-1/2 w-full">
              <div className="input-field">
                <label htmlFor="address">Address</label>
                <Field
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  className="w-full px-[15px] py-[8px] border border-text-[#ced4da] outline-[#80bdff]"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="w-full"
                />
              </div>
            </div>
            <div className="sm:w-1/2 w-full">
              <div className="input-field">
                <label htmlFor="phone">Phone</label>
                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  className="w-full px-[15px] py-[8px] border border-text-[#ced4da] outline-[#80bdff]"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="input-field">
                <label htmlFor="subject">Subject</label>
                <Field
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="w-full px-[15px] py-[8px] border border-text-[#ced4da] outline-[#80bdff]"
                />
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="input-field">
                <label htmlFor="message">
                  Message<span className="text-redLight">*</span>
                </label>
                <Field
                  as="textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                  className="w-full px-[15px] py-[8px] h-40 border border-text-[#ced4da] outline-[#80bdff] resize-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-600 text-sm mt-1"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="bg-redLight text-white font-bold py-4 px-4 rounded"
            >
              Send Message
            </button>
          </div>
        </Form>
      </Formik>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
