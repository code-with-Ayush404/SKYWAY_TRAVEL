"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, Calculator, ArrowRight, Car, UserCheck } from "lucide-react";
import { toast } from "sonner";

const vehicleTypes = [
  { id: "economy", name: "Economy", icon: "🚗", pricePerKm: 11 },
  { id: "comfort", name: "Comfort", icon: "🚙", pricePerKm: 16 },
  { id: "luxury", name: "Luxury", icon: "🚘", pricePerKm: 28 },
  { id: "van", name: "Group Van", icon: "🚐", pricePerKm: 22 },
];

const reasons = [
  {
    id: 1,
    icon: <Clock className="h-6 w-6 text-accent-gold" />,
    tag: "always on time",
    title: "Punctual & Reliable",
    desc: "We value your time. Our drivers arrive early and ensure safe, on-time arrivals for every single transfer.",
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    icon: <UserCheck className="h-6 w-6 text-primary-teal" />,
    tag: "professional drivers",
    title: "Experienced & Verified",
    desc: "Polite, licensed, and highly trained local drivers with deep knowledge of Gorakhpur, Nepal, and regional routes.",
    bgColor: "bg-emerald-50",
  },
  {
    id: 3,
    icon: <Car className="h-6 w-6 text-[#1B4D5A]" />,
    tag: "clean & comfortable fleet",
    title: "Sanitized & Modern Vehicles",
    desc: "Travel in pristine comfort with our fully air-conditioned, regularly serviced, and sanitized taxi fleet.",
    bgColor: "bg-rose-50",
  },
];

export default function TaxiClient({ initialCars = [] }) {
  const [selectedType, setSelectedType] = useState("comfort");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [passengers, setPassengers] = useState("4");
  const [estimatedFare, setEstimatedFare] = useState(null);
  const [isEstimating, setIsEstimating] = useState(false);

  const activeTypeOption =
    vehicleTypes.find((v) => v.id === selectedType) || vehicleTypes[1];

  const taxiCars = initialCars.filter((car) => car.vehicleType === "TAXI");

  const handleEstimateFare = (e) => {
    e.preventDefault();

    if (!pickup || !drop || !date || !time) {
      toast.error("Please fill in all route details.");
      return;
    }

    setIsEstimating(true);

    setTimeout(() => {
      const simulatedDistance = Math.floor(Math.random() * (45 - 20 + 1)) + 20;
      const fare = simulatedDistance * activeTypeOption.pricePerKm + 150;

      setEstimatedFare(fare);
      setIsEstimating(false);
      toast.success(
        `Fare calculated for a distance of ${simulatedDistance} km!`,
      );
    }, 800);
  };

  const getWhatsAppLink = (carName, customFare) => {
    let text = "";

    if (carName) {
      text = `Hi Starline Travel, I would like to book the vehicle "${carName}" for a ride request. Please share availability.`;
    } else {
      text =
        `Hi Starline Travel, I would like to book a transfer:\n\n` +
        `Vehicle: ${activeTypeOption.name}\n` +
        `Pickup: ${pickup}\n` +
        `Drop: ${drop}\n` +
        `Date & Time: ${date} at ${time}\n` +
        `Passengers: ${passengers}\n` +
        `Estimated Fare: ₹${customFare || estimatedFare}`;
    }

    return `https://wa.me/919876543210?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="bg-bg-cream min-h-screen pb-24 text-left">
      <section className="bg-white border-b border-border-soft py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="small-caps-label">AIRPORT & CITY TRANSFERS</span>

              <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-teal leading-tight">
                Book Your Transfer
              </h1>

              <p className="text-text-muted text-xs md:text-sm mt-2 leading-relaxed">
                Reliable, punctual, and professional drivers ready to take you
                anywhere.
              </p>
            </div>

            <div className="relative h-64 md:h-72 rounded-card overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800"
                alt="Starline premium taxi transfers"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-primary-teal/80 via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-4 left-6 right-6 text-white flex gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-accent-gold" />
                  <span>Sanitized Vehicles</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-accent-gold" />
                  <span>24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="small-caps-label">Why Choose Us</span>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary-teal leading-tight">
                Why Choose Skyway Travel
              </h2>
            </div>

            <div className="flex flex-col gap-4">
              {reasons.map((reason) => (
                <div
                  key={reason.id}
                  className="bg-white border border-border-soft p-5 rounded-card shadow-sm hover:shadow-md hover:scale-[1.03] transition-all duration-300 flex items-start gap-4 text-left group"
                >
                  <div
                    className={`p-3 rounded-card w-12 h-12 shrink-0 flex items-center justify-center ${reason.bgColor} transition-transform group-hover:rotate-6 duration-300`}
                  >
                    {reason.icon}
                  </div>

                  <div className="flex flex-col gap-1 flex-grow">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-accent-gold">
                      {reason.tag}
                    </span>

                    <h3 className="font-serif text-base md:text-lg font-bold text-primary-teal group-hover:text-accent-gold transition-colors">
                      {reason.title}
                    </h3>

                    <p className="text-xs text-text-muted leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="mb-12 border-b border-border-soft pb-6">
          <span className="small-caps-label">LOCAL TAXI</span>

          <h2 className="text-2xl md:text-4xl font-serif font-bold text-primary-teal">
            Our Taxi Fleet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {taxiCars.map((car) => (
            <div
              key={car._id || car.id}
              className="bg-white border border-border-soft rounded-card overflow-hidden shadow-sm"
            >
              <div className="h-64 w-full">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-5">
                  {car.name}
                </h3>

                <div className="h-px bg-gray-300 mb-5" />

                <table className="w-full border border-gray-200 text-sm text-gray-600">
                  <tbody>
                    <tr>
                      <td className="border border-gray-200 p-3">Price</td>
                      <td className="border border-gray-200 p-3">
                        {car.pricePerKm}
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-200 p-3">
                        Extra KM Price
                      </td>
                      <td className="border border-gray-200 p-3">
                        {car.extraKmPrice}
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-200 p-3">
                        Extra Hours
                      </td>
                      <td className="border border-gray-200 p-3">
                        {car.extraHours}
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-200 p-3">
                        Night Charge
                      </td>
                      <td className="border border-gray-200 p-3">
                        {car.nightCharge}
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-200 p-3">
                        Out Station
                      </td>
                      <td className="border border-gray-200 p-3">
                        {car.outStation}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-center mt-8">
                  <a
                    href={getWhatsAppLink(car.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-primary-teal text-white px-8 py-3 rounded-btn text-sm font-semibold"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
