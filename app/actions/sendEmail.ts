"use server";
export const sendEmail = async (prevState: any, formData: FormData) => {
  const fieldErrors = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name) fieldErrors.name = "Name is required*";
  if (!email) fieldErrors.email = "Email is required*";
  if (!subject) fieldErrors.subject = "Subject is required*";
  if (!message) fieldErrors.message = "Message is required*";

  if (Object.values(fieldErrors).some((msg) => msg !== "")) {
    return { success: false, fieldErrors };
  }
  // Prefer server env var (do NOT hard-code secrets in source)
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("RESEND_API_KEY is missing from the server environment");
    return {
      success: false,
      message: "Server configuration error: Missing API Key",
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: "alihaider061297@gmail.com",
        subject: `📩 New message from ${name}: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend API error:", err);
      return { success: false, message: "Failed to send email" };
    }

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Server error" };
  }
};
