"use client";

import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { Send, CheckCircle, XCircle } from "lucide-react";

import { sendEmail, FormState } from "../actions/sendEmail";

// ✅ initial state (client side allowed)
const initialState: FormState = {
  message: "Fill out the form to get in touch.",
};

// -------------------- SUBMIT BUTTON --------------------
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ scale: pending ? 1 : 1.01 }}
      whileTap={{ scale: pending ? 1 : 0.99 }}
      className={`w-full py-4 bg-linear-to-r from-primary to-primary/80 text-white rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all ${
        pending ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {pending ? (
        "Sending..."
      ) : (
        <>
          Send Message
          <Send className="w-5 h-5" />
        </>
      )}
    </motion.button>
  );
}

// -------------------- TOAST --------------------
interface ToastProps {
  state: FormState;
  onClose: () => void;
}

const SubmissionToast: React.FC<ToastProps> = ({ state, onClose }) => {
  const isSuccess = state.success === true;
  const isError = state.success === false;

  if (!isSuccess && !isError) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-5 right-5 pt-4 px-4 rounded-xl shadow-2xl z-50 max-w-sm w-full border-l-4 ${
        isSuccess
          ? "bg-green-50 border-green-500 text-green-800"
          : "bg-red-50 border-red-500 text-red-800"
      }`}
    >
      <div className="flex items-start gap-4">
        {isSuccess ? (
          <CheckCircle className="w-6 h-6 text-green-600" />
        ) : (
          <XCircle className="w-6 h-6 text-red-600" />
        )}
        <div className="flex-grow">
          <p className="font-bold">{isSuccess ? "Success!" : "Error!"}</p>
          <p className="text-sm">{state.message}</p>
        </div>
        <button
          onClick={onClose}
          className="p-1 -mr-1 rounded-full text-secondary/50 hover:text-secondary"
        >
          &times;
        </button>
      </div>
      {/* Progress bar that shrinks over 5s to indicate toast timeout */}
      <div className="obsolute bottom-0 right-0 mt-4 h-1 w-full bg-black/5 rounded-full overflow-hidden">
        <ProgressBar isSuccess={isSuccess} onClose={onClose} />
      </div>
    </motion.div>
  );
};

// Separate progress bar component that animates width from 100% to 0% over 5s
const ProgressBar: React.FC<{ isSuccess: boolean; onClose: () => void }> = ({
  isSuccess,
  onClose,
}) => {
  const [width, setWidth] = React.useState<number>(100);

  React.useEffect(() => {
    // start transition in next tick so CSS transition applies
    const id = setTimeout(() => setWidth(0), 50);
    const timer = setTimeout(() => onClose(), 5000);
    return () => {
      clearTimeout(id);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      aria-hidden
      style={{
        width: `${width}%`,
        transition: "width 5s linear",
        height: "100%",
        backgroundColor: isSuccess ? "#16a34a" : "#dc2626",
      }}
    />
  );
};

// -------------------- CONTACT FORM MAIN --------------------
export default function Contact() {
  const [state, formAction] = useActionState<FormState, FormData>(
    sendEmail,
    initialState
  );

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state.success !== undefined) {
      setShowToast(true);

      if (state.success) {
        const form = document.getElementById("contact-form") as HTMLFormElement;
        if (form) form.reset();

        const timer = setTimeout(() => setShowToast(false), 5000);
        return () => clearTimeout(timer);
      }
    }
  }, [state]);

  const getFieldError = (field: keyof FormState["fieldErrors"]) =>
    state.fieldErrors?.[field];

  return (
    <>
      <section id="contact" className="py-20 px-6 bg-background">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-secondary/60 text-lg">
              Have a project in mind? Let&apos;s create something amazing
              together.
            </p>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-secondary/5"
          >
            <form action={formAction} id="contact-form" className="space-y-6">
              {/* --------- NAME + EMAIL --------- */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary/70 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`w-full px-5 py-3 bg-secondary/5 rounded-xl border outline-none ${
                      getFieldError("name")
                        ? "border-red-500 focus:border-red-700 focus:ring-4 focus:ring-red-100"
                        : "border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10"
                    }`}
                    placeholder="John Doe"
                  />
                  {getFieldError("name") && (
                    <p className="text-red-500 text-xs ml-1">
                      {getFieldError("name")}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-secondary/70 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`w-full px-5 py-3 bg-secondary/5 rounded-xl border outline-none ${
                      getFieldError("email")
                        ? "border-red-500 focus:border-red-700 focus:ring-4 focus:ring-red-100"
                        : "border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10"
                    }`}
                    placeholder="john@example.com"
                  />
                  {getFieldError("email") && (
                    <p className="text-red-500 text-xs ml-1">
                      {getFieldError("email")}
                    </p>
                  )}
                </div>
              </div>

              {/* --------- SUBJECT --------- */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary/70 ml-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  className={`w-full px-5 py-3 bg-secondary/5 rounded-xl border outline-none ${
                    getFieldError("subject")
                      ? "border-red-500 focus:border-red-700 focus:ring-4 focus:ring-red-100"
                      : "border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10"
                  }`}
                  placeholder="Project Discussion"
                />
                {getFieldError("subject") && (
                  <p className="text-red-500 text-xs ml-1">
                    {getFieldError("subject")}
                  </p>
                )}
              </div>

              {/* --------- MESSAGE --------- */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary/70 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className={`w-full px-5 py-3 bg-secondary/5 rounded-xl border outline-none resize-none ${
                    getFieldError("message")
                      ? "border-red-500 focus:border-red-700 focus:ring-4 focus:ring-red-100"
                      : "border-transparent focus:bg-white focus:border-primary/20 focus:ring-4 focus:ring-primary/10"
                  }`}
                  placeholder="Tell me about your project..."
                />
                {getFieldError("message") && (
                  <p className="text-red-500 text-xs ml-1">
                    {getFieldError("message")}
                  </p>
                )}
              </div>

              {/* --------- SUBMIT BUTTON --------- */}
              <SubmitButton />
            </form>
          </motion.div>
        </div>
      </section>

      {showToast && (
        <SubmissionToast state={state} onClose={() => setShowToast(false)} />
      )}
    </>
  );
}
