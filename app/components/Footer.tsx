"use client";

import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { sendEmail, FormState } from "../actions/sendEmail";

// ✅ initial state
const initialState: FormState = {
  message: "Fill out the form to get in touch.",
  fieldErrors: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
};

const socialLinks = [
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/ali-haider-frontend-dev/" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/ali-haider-dev" },
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "Instagram", icon: FaInstagram, href: "#" },
];

// -------------------- SUBMIT BUTTON --------------------
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <motion.button
      type="submit"
      disabled={pending}
      whileHover={{ scale: pending ? 1 : 1.02 }}
      whileTap={{ scale: pending ? 1 : 0.98 }}
      className={`w-full md:w-auto px-8 py-3 bg-primary text-white rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-primary/25 transition-all ${
        pending ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Sending..." : <>Send</>}
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
          <FaCheckCircle className="w-6 h-6 text-green-600" />
        ) : (
          <FaTimesCircle className="w-6 h-6 text-red-600" />
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

      {/* Progress bar at the bottom inside container */}
      <div className="mt-4 h-1 w-full bg-black/5 rounded-full overflow-hidden">
        <ProgressBar isSuccess={isSuccess} onClose={onClose} />
      </div>
    </motion.div>
  );
};

// -------------------- PROGRESS BAR --------------------
const ProgressBar: React.FC<{ isSuccess: boolean; onClose: () => void }> = ({
  isSuccess,
  onClose,
}) => {
  const [width, setWidth] = React.useState<number>(100);

  React.useEffect(() => {
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

export default function Footer() {
  const [state, formAction] = useActionState<FormState, FormData>(
    sendEmail,
    initialState
  );

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (state.success !== undefined) {
      const id = setTimeout(() => setShowToast(true), 0);

      if (state.success) {
        const formResetTimer = setTimeout(() => {
          const form = document.getElementById(
            "footer-contact-form"
          ) as HTMLFormElement;
          if (form) form.reset();
        }, 0);

        const hideTimer = setTimeout(() => setShowToast(false), 5000);

        return () => {
          clearTimeout(id);
          clearTimeout(formResetTimer);
          clearTimeout(hideTimer);
        };
      }

      const hideTimer = setTimeout(() => setShowToast(false), 5000);

      return () => {
        clearTimeout(id);
        clearTimeout(hideTimer);
      };
    }
  }, [state]);

  const getFieldError = (field: keyof FormState["fieldErrors"]) =>
    state.fieldErrors[field];

  return (
    <footer id="contact"  className="bg-secondary text-white py-12 px-18 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                LET&apos;S CONNECT
              </h2>
              <p className="text-white/70 text-base">
                Say hello at{" "}
                <a
                  href="mailto:Alihaider061297@gmail.com"
                  className="text-white underline decoration-1 underline-offset-4 hover:text-[#00E5FF] transition-colors"
                >
                  Alihaider061297@gmail.com
                </a>
              </p>
              <p className="text-white/70 text-base mt-1">
                For More info, here&apos;s my{" "}
                <Link
                  href="#resume"
                  className="text-white underline decoration-1 underline-offset-4 hover:text-[#00E5FF] transition-colors"
                >
                  resume
                </Link>
              </p>
            </div>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-primary hover:text-white transition-colors"
                    title={social.name}
                  >
                    <IconComponent className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              action={formAction}
              id="footer-contact-form"
              className="space-y-4"

            >
              <div className="space-y-1.5">
                <label className="text-xs text-white/80 uppercase tracking-wider font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={`w-full px-4 py-2.5 bg-[#1a1a1a] rounded-lg border border-transparent focus:border-[#00E5FF]/50 focus:bg-[#222] outline-none transition-all text-white placeholder:text-white/30 text-sm ${
                    getFieldError("name") ? "border-red-500" : ""
                  }`}
                />
                {getFieldError("name") && (
                  <p className="text-red-500 text-xs">
                    {getFieldError("name")}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/80 uppercase tracking-wider font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className={`w-full px-4 py-2.5 bg-[#1a1a1a] rounded-lg border border-transparent focus:border-[#00E5FF]/50 focus:bg-[#222] outline-none transition-all text-white placeholder:text-white/30 text-sm ${
                    getFieldError("email") ? "border-red-500" : ""
                  }`}
                />
                {getFieldError("email") && (
                  <p className="text-red-500 text-xs">
                    {getFieldError("email")}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/80 uppercase tracking-wider font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Web Development Request"
                  className={`w-full px-4 py-2.5 bg-[#1a1a1a] rounded-lg border border-transparent focus:border-[#00E5FF]/50 focus:bg-[#222] outline-none transition-all text-white placeholder:text-white/30 text-sm ${
                    getFieldError("subject") ? "border-red-500" : ""
                  }`}
                />
                {getFieldError("subject") && (
                  <p className="text-red-500 text-xs">
                    {getFieldError("subject")}
                  </p>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/80 uppercase tracking-wider font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your Message here"
                  className={`w-full px-4 py-2.5 bg-[#1a1a1a] rounded-lg border border-transparent focus:border-[#00E5FF]/50 focus:bg-[#222] outline-none transition-all text-white placeholder:text-white/30 resize-none text-sm ${
                    getFieldError("message") ? "border-red-500" : ""
                  }`}
                />
                {getFieldError("message") && (
                  <p className="text-red-500 text-xs">
                    {getFieldError("message")}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <SubmitButton />
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {showToast && (
        <SubmissionToast state={state} onClose={() => setShowToast(false)} />
      )}
    </footer>
  );
}
