"use client";

import { CheckCircle, XCircle, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Achievements } from "./Achievements";
import { useForm } from "react-hook-form";

interface Achievement {
  _id: string;
  title: string;
  description: string;
  certificateImage?: string;
}

interface ContactProps {
  achievements: Achievement[];
  viewMoreHref?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact Component
 * Redesigned for Professional Feminine Theme.
 * Elegant contact form and achievement showcase.
 */
export function Contact({ achievements, viewMoreHref }: ContactProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message");
      }

      setSubmitStatus("success");
      reset();

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(
        error.message || "Something went wrong. Please try again."
      );

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-secondary/20 relative">
      <div className="container px-6 mx-auto">
        {/* Achievements Section */}
        <Achievements achievements={achievements} viewMoreHref={viewMoreHref} />

        {/* Contact Section */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-6 text-foreground">
              Get In Touch<span className="text-primary">.</span>
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              I'm open to new opportunities and collaborations. Feel free to
              reach out.
            </p>
          </div>

          {/* Success/Error Message */}
          {submitStatus !== "idle" && (
            <div
              className={`mb-8 p-4 rounded-xl flex items-center gap-3 ${
                submitStatus === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {submitStatus === "success" ? (
                <CheckCircle size={20} />
              ) : (
                <XCircle size={20} />
              )}
              <p className="text-sm font-medium">
                {submitStatus === "success"
                  ? "Thank you! Your message has been sent successfully."
                  : errorMessage}
              </p>
            </div>
          )}

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8 bg-card p-8 md:p-12 rounded-[2rem] shadow-xl border border-white/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Name */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                  type="email"
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
                Subject
              </label>
              <input
                {...register("subject")}
                type="text"
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none"
                placeholder="Topic of discussion"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground/80 uppercase tracking-wide">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows={5}
                className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none resize-none"
                placeholder="Tell me more..."
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:bg-primary/90 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-primary/30"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-2">
              Or email me directly at
            </p>
            <a
              href={`mailto:${
                process.env.NEXT_PUBLIC_EMAIL || "agpas@example.com"
              }`} // Fallback to avoid empty link
              className="text-primary font-serif italic text-xl hover:underline"
            >
              {process.env.NEXT_PUBLIC_EMAIL || "your-email@example.com"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
