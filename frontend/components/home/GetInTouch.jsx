"use client";

import React, { useState } from "react";
import { User, Mail, MessageSquare, Send, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const tourTypes = [
  "Select Tour Type",
  "Domestic Tour Package",
  "Nepal Tour Package",
  "Pilgrimage Tour",
  "Honeymoon Package",
  "Local Taxi Booking",
  "Outstation Taxi",
  "Wedding Car Rental",
  "Airport Transfer",
  "Custom Tour",
];

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tourType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", tourType: "", message: "" });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <section 
      className="relative py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200')",
      }}
    >
      {/* Full-width dark gradient overlay: dark on the left for text contrast, fading to transparent on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Text content (legible and visible) */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <span className="italic-accent text-accent-gold-lt text-xl md:text-2xl mb-2 block font-normal">
            Get in touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight mb-4" style={{ color: "#ffffff" }}>
            Say hello to us
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-md leading-relaxed mb-8">
            We&apos;d love to hear from you. Our friendly team is always here to
            chat and help you plan your perfect journey.
          </p>

          {/* Quick Contact Info */}
          <div className="flex flex-col gap-5">
            <a
              href="tel:+918173923599"
              className="flex items-center gap-3.5 text-white/90 hover:text-accent-gold transition-colors group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-accent-gold/25 transition-colors">
                <Phone className="h-4.5 w-4.5 text-accent-gold-lt" />
              </div>
              <span className="text-sm font-semibold tracking-wide">+91 81739 23599</span>
            </a>

            <a
              href="mailto:hello@skywaytravel.in"
              className="flex items-center gap-3.5 text-white/90 hover:text-accent-gold transition-colors group"
            >
              <div className="p-3 bg-white/10 rounded-full group-hover:bg-accent-gold/25 transition-colors">
                <Mail className="h-4.5 w-4.5 text-accent-gold-lt" />
              </div>
              <span className="text-sm font-semibold tracking-wide">
                hello@skywaytravel.in
              </span>
            </a>

            <div className="flex items-center gap-3.5 text-white/90">
              <div className="p-3 bg-white/10 rounded-full">
                <MapPin className="h-4.5 w-4.5 text-accent-gold-lt" />
              </div>
              <span className="text-sm font-semibold tracking-wide">
                Gorakhpur, Uttar Pradesh, India
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6 flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-lg">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-border-soft flex flex-col w-full"
            >
              {/* Form Input Container */}
              <div className="p-8 md:p-10 flex flex-col gap-5 text-left">
                {/* First Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="First Name"
                    className="w-full px-5 py-4 bg-[#FAF8F3] border border-border-soft rounded-xl text-sm text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal transition-all pr-12"
                  />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-text-muted/40" />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Your Mail"
                    className="w-full px-5 py-4 bg-[#FAF8F3] border border-border-soft rounded-xl text-sm text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal transition-all pr-12"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-text-muted/40" />
                </div>

                {/* Select Tour Type */}
                <div className="relative">
                  <select
                    name="tourType"
                    value={formData.tourType}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#FAF8F3] border border-border-soft rounded-xl text-sm text-text-dark focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal transition-all appearance-none pr-12 cursor-pointer"
                  >
                    {tourTypes.map((type) => (
                      <option
                        key={type}
                        value={type === "Select Tour Type" ? "" : type}
                        disabled={type === "Select Tour Type"}
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-text-muted/40 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-5 py-4 bg-[#FAF8F3] border border-border-soft rounded-xl text-sm text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:border-primary-teal focus:ring-1 focus:ring-primary-teal transition-all resize-none pr-12"
                  />
                  <MessageSquare className="absolute right-4 top-5 h-4.5 w-4.5 text-text-muted/40" />
                </div>
              </div>

              {/* Bottom Solid Bar: Teal Background containing CTA buttons */}
              <div className="bg-[#1B4D5A] px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-white hover:bg-[#FAF8F3] text-primary-teal font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 text-sm tracking-wider disabled:opacity-50 cursor-pointer"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="h-4 w-4 text-primary-teal" />
                </button>

                <a
                  href="tel:+918173923599"
                  className="flex items-center gap-2 text-white hover:text-accent-gold-lt transition-colors font-semibold text-sm tracking-wide group"
                >
                  <Phone className="h-4.5 w-4.5 text-accent-gold group-hover:scale-110 transition-transform" />
                  <span>+91 81739 23599</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
