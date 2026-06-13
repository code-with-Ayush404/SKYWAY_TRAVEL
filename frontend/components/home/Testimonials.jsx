"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const localTestimonials = [
  {
    id: "t-1",
    name: "Sarah Mitchell",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    rating: 5,
    text: "The Leh Ladakh tour was absolutely flawless. Every detail was taken care of — from the airport pickup to the private stays. I've traveled with many agencies, but Skyway sets a completely different standard.",
    tourName: "Leh Ladakh Wonders",
  },
  {
    id: "t-2",
    name: "James Whitmore",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    rating: 5,
    text: "Annapurna Base Camp was a dream come true. The guides were incredibly knowledgeable, and the taxi transfers were always prompt. I'll be booking my next trip here without hesitation.",
    tourName: "Annapurna Expedition",
  },
  {
    id: "t-3",
    name: "Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150",
    rating: 5,
    text: "Our South Goa honeymoon was beyond perfection. The overwater bungalow, private butler, the little surprises they planned for us — I cried happy tears. Skyway Travel made magic happen.",
    tourName: "Romantic Escape to Goa",
  },
  {
    id: "t-4",
    name: "Rajesh Kumar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    rating: 5,
    text: "Booked a taxi service from Gorakhpur to Pokhara. The car was sanitized, driver was polite and knew the route extremely well. Highly recommend their Nepal taxi services.",
    tourName: "Nepal Taxi Booking",
  },
  {
    id: "t-5",
    name: "Gabrielle Williams",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150",
    rating: 5,
    text: "Exceeded our expectations with innovative itineraries that brought our dream family vacation to life. An incredibly professional and caring travel agency.",
    tourName: "Custom Family Tour",
  },
  {
    id: "t-6",
    name: "Samantha Johnson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
    rating: 5,
    text: "Our pilgrimage tour to Ayodhya was seamlessly managed. Special assistance was provided for my elderly parents. Truly grateful for the wonderful service.",
    tourName: "Ayodhya Pilgrimage",
  },
  {
    id: "t-7",
    name: "Isabella Rodriguez",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=150",
    rating: 5,
    text: "Their ability to capture our travel preferences and turn them into a curated luxury experience was amazing. Every accommodation choice was top-notch.",
    tourName: "Luxury Kerala Tour",
  },
  {
    id: "t-8",
    name: "John Peter",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150",
    rating: 5,
    text: "Highly reliable and professional team. We rented a wedding convoy of luxury SUVs. The cars were clean, well-decorated, and the drivers were excellent.",
    tourName: "Wedding Car Rental",
  }
];

export default function Testimonials() {
  // Split local testimonials into two rows
  const row1 = localTestimonials.slice(0, 4);
  const row2 = localTestimonials.slice(4, 8);

  return (
    <section className="py-24 bg-[#FAF8F3] border-t border-b border-border-soft overflow-hidden relative">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col items-center text-center">
        
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#1B4D5A] text-white text-[11px] font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Star className="h-3.5 w-3.5 fill-accent-gold text-accent-gold" />
          <span>Rated 4.5/5 by over 1 Lakh users</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-teal max-w-2xl leading-tight">
          Words of praise from others about our presence.
        </h2>
        <div className="h-0.5 w-16 bg-accent-gold mt-6"></div>
      </div>

      {/* Row 1 (Upward Row) - scrolls right */}
      <div className="testimonials-marquee-wrapper mb-6">
        <div className="testimonials-marquee testimonials-marquee--right">
          {[...row1, ...row1, ...row1].map((t, idx) => (
            <div key={`t-r1-${t.id}-${idx}`} className="testimonials-card text-left relative group">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent-gold/15 group-hover:text-accent-gold/25 transition-colors" />
              
              <div className="flex flex-col gap-3.5">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-text-muted text-sm leading-relaxed italic font-light">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 mt-6 border-t border-border-soft pt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 object-cover rounded-full border-2 border-[#1B4D5A]/15 group-hover:border-accent-gold/40 transition-colors"
                />
                <div className="flex flex-col">
                  <span className="font-sans text-sm font-semibold text-[#1B4D5A]">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-accent-gold font-semibold tracking-wider uppercase mt-0.5">
                    {t.tourName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 (Downward Row) - scrolls left */}
      <div className="testimonials-marquee-wrapper">
        <div className="testimonials-marquee testimonials-marquee--left">
          {[...row2, ...row2, ...row2].map((t, idx) => (
            <div key={`t-r2-${t.id}-${idx}`} className="testimonials-card text-left relative group">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-accent-gold/15 group-hover:text-accent-gold/25 transition-colors" />
              
              <div className="flex flex-col gap-3.5">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-text-muted text-sm leading-relaxed italic font-light">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3.5 mt-6 border-t border-border-soft pt-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 object-cover rounded-full border-2 border-[#1B4D5A]/15 group-hover:border-accent-gold/40 transition-colors"
                />
                <div className="flex flex-col">
                  <span className="font-sans text-sm font-semibold text-[#1B4D5A]">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-accent-gold font-semibold tracking-wider uppercase mt-0.5">
                    {t.tourName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
