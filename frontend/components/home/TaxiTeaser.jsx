"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Car,
  Heart,
} from "lucide-react";

export default function TaxiTeaser() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="small-caps-label text-left">
              TAXI & EVENT RIDES
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-teal text-left leading-tight">
              Premium Travel Services
            </h2>

            <p className="text-text-muted text-sm md:text-base mt-2 text-left leading-relaxed">
              Skyway Travel offers reliable taxi services and elegant wedding
              car rentals with professional drivers, clean vehicles, and smooth
              booking support.
            </p>
          </div>

          <div className="relative h-80 rounded-card overflow-hidden border border-border-soft shadow-md group">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800"
              alt="Skyway Taxi fleet booking"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-primary-teal/80 via-transparent to-transparent opacity-80" />

            <div className="absolute bottom-6 left-6 right-6 text-white flex flex-wrap gap-5 text-left">
              <div className="flex items-center gap-2 text-xs">
                <ShieldCheck className="h-4.5 w-4.5 text-accent-gold" />
                <span>Verified Drivers</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Clock className="h-4.5 w-4.5 text-accent-gold" />
                <span>24/7 Availability</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 mt-8 gap-6">
          <div className="bg-bg-cream border border-border-soft rounded-card shadow-lg p-8  flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-accent-gold shadow-sm mb-5">
                <Car className="h-7 w-7" />
              </div>

              <span className="small-caps-label text-left">
                PREMIUM RIDES
              </span>

              <h3 className="font-serif text-3xl font-bold text-primary-teal mt-2">
                Taxi Services
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mt-4">
                Book comfortable and reliable taxi services for local rides,
                airport transfers, outstation trips, family vacations, and
                business travel.
              </p>

              <ul className="mt-6 space-y-3 text-text-dark">
                <li className="flex items-center gap-2 text-sm">
                  <ShieldCheck className="h-4 w-4 text-accent-gold" />
                  Safe & Verified Drivers
                </li>

                <li className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-accent-gold" />
                  24/7 Booking Support
                </li>

                <li className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-accent-gold" />
                  Local & Outstation Trips
                </li>
              </ul>
            </div>

            <Link
              href="/taxi-service"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-primary-teal hover:bg-primary-teal-dk text-white font-semibold py-3 px-6 rounded-btn transition-all"
            >
              Explore Taxi Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="bg-bg-cream border border-border-soft rounded-card shadow-lg p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div>
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-accent-gold shadow-sm mb-5">
                <Heart className="h-7 w-7" />
              </div>

              <span className="small-caps-label text-left">
                LUXURY EVENTS
              </span>

              <h3 className="font-serif text-3xl font-bold text-primary-teal mt-2">
                Wedding Cars
              </h3>

              <p className="text-text-muted text-sm leading-relaxed mt-4">
                Make your special day memorable with our premium wedding car
                collection, decorated cars, and chauffeur-driven vehicles.
              </p>

              <ul className="mt-6 space-y-3 text-text-dark">
                <li className="flex items-center gap-2 text-sm">
                  <Car className="h-4 w-4 text-accent-gold" />
                  Premium Luxury Cars
                </li>

                <li className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-accent-gold" />
                  On-Time Service Guarantee
                </li>

                <li className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-accent-gold" />
                  Perfect for Weddings & Events
                </li>
              </ul>
            </div>

            <Link
              href="/wedding-rentals"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-gold-lt text-white font-semibold py-3 px-6 rounded-btn transition-all"
            >
              Explore Wedding Cars
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}