"use client";

import React from "react";
import Link from "next/link";
import { Plane, Phone, Mail, MapPin, ChevronRight } from "lucide-react";

export default function Footer() {
  const instagramImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=300", alt: "Eiffel Tower" },
    { id: 2, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300", alt: "Beach chairs" },
    { id: 3, src: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=300", alt: "Thailand bay boat" },
    { id: 4, src: "https://images.unsplash.com/photo-1473116763269-25541579ff6f?q=80&w=300", alt: "Couple on beach" },
    { id: 5, src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=300", alt: "Rio aerial view" },
    { id: 6, src: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=300", alt: "Burj Al Arab" },
  ];

  return (
    <footer className="bg-footer-dark text-white pt-20 pb-8 border-t border-[#133842]">
      {/* Footer Columns */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
        
        {/* Col 1: Brand & Desc (4 cols on lg) */}
        <div className="lg:col-span-4 flex flex-col gap-6 text-left">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-primary-teal text-white p-2 rounded-btn">
              <Plane className="h-5 w-5 rotate-45 text-accent-gold" />
            </div>
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Skyway{" "}
              <span className="italic-accent text-xl font-normal lowercase">
                travel
              </span>
            </span>
          </Link>
          
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            As a reliable local taxi service in Gorakhpur, we provide a variety of travel solutions, 
            including affordable car rentals, Gorakhpur to Nepal tour packages, Gorakhpur to Raxaul 
            border taxi service, and comfortable rides from Gorakhpur to Kathmandu for a seamless journey.
          </p>

          <Link
            href="/about"
            className="inline-flex items-center justify-center border border-accent-gold hover:bg-accent-gold hover:text-white text-accent-gold font-semibold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all duration-300 self-start mt-2"
          >
            Read More
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-gold p-2 border border-gray-700 hover:border-accent-gold rounded-full hover:scale-105 transition-all flex items-center justify-center"
              aria-label="Facebook"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-gold p-2 border border-gray-700 hover:border-accent-gold rounded-full hover:scale-105 transition-all flex items-center justify-center"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-gold p-2 border border-gray-700 hover:border-accent-gold rounded-full hover:scale-105 transition-all flex items-center justify-center"
              aria-label="Twitter"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links (2 cols on lg) */}
        <div className="lg:col-span-2 flex flex-col gap-5 text-left">
          <h4 className="text-sm font-serif font-bold text-white tracking-wide border-b border-white/10 pb-2">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3">
            {[
              { name: "Home", href: "/" },
              { name: "About us", href: "/about" },
              { name: "Popular Destination", href: "/tour-packages" },
              { name: "Local Taxi", href: "/taxi-service" },
              { name: "Activities", href: "/tour-packages" },
              { name: "Tours", href: "/tour-packages" },
              { name: "Contact us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-accent-gold transition-colors group"
              >
                <ChevronRight className="h-3.5 w-3.5 text-accent-gold group-hover:translate-x-0.5 transition-transform" />
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Col 3: Get In Touch (3 cols on lg) */}
        <div className="lg:col-span-3 flex flex-col gap-5 text-left">
          <h4 className="text-sm font-serif font-bold text-white tracking-wide border-b border-white/10 pb-2">
            Get In Touch
          </h4>
          <div className="flex flex-col gap-4">
            
            {/* Phones */}
            <div className="flex gap-3 items-start text-sm text-gray-400">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-full shrink-0">
                <Phone className="h-4 w-4 text-accent-gold" />
              </div>
              <div className="flex flex-col">
                <a href="tel:+918173923599" className="hover:text-accent-gold transition-colors font-medium">
                  +91 81739 23599
                </a>
                <a href="tel:+919140427414" className="hover:text-accent-gold transition-colors font-medium mt-1">
                  +91 91404 27414
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-3 items-center text-sm text-gray-400">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-full shrink-0">
                <Mail className="h-4 w-4 text-accent-gold" />
              </div>
              <a href="mailto:skywaytravels35@gmail.com" className="hover:text-accent-gold transition-colors font-medium">
                skywaytravels35@gmail.com
              </a>
            </div>

            {/* Location 1 */}
            <div className="flex gap-3 items-start text-sm text-gray-400">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-full shrink-0">
                <MapPin className="h-4 w-4 text-accent-gold" />
              </div>
              <span className="leading-relaxed">
                Bankati Chak, 87-A, Raiganj Rd, near Choti Maszid, Raiganj, Gorakhpur, Uttar Pradesh
              </span>
            </div>

            {/* Location 2 */}
            <div className="flex gap-3 items-start text-sm text-gray-400">
              <div className="p-2.5 bg-white/5 border border-white/10 rounded-full shrink-0">
                <MapPin className="h-4 w-4 text-accent-gold" />
              </div>
              <span className="leading-relaxed">
                Senduli benduli Rd, Rustampur, Alam chowk, Gorakhpur, Uttar Pradesh
              </span>
            </div>

          </div>
        </div>

        {/* Col 4: Instagram Post (3 cols on lg) */}
        <div className="lg:col-span-3 flex flex-col gap-5 text-left">
          <h4 className="text-sm font-serif font-bold text-white tracking-wide border-b border-white/10 pb-2">
            Instagram Post
          </h4>
          <div className="grid grid-cols-3 gap-2.5">
            {instagramImages.map((img) => (
              <div
                key={img.id}
                className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer border border-white/5 shadow-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary-teal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Copyright Block */}
      <div className="max-w-7xl mx-auto px-6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <div>
          Copyright © 2026 Skyway Travel. All Rights Reserved.
        </div>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-accent-gold transition-colors">
            Privacy Policy
          </Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-accent-gold transition-colors">
            Terms of Service
          </Link>
          <span>·</span>
          <Link href="/cookies" className="hover:text-accent-gold transition-colors">
            Cookies Settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
