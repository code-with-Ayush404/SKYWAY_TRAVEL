"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, Calculator, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const vehicleTypes = [
  { id: "economy", name: "Economy", icon: "🚗", pricePerKm: 11 },
  { id: "comfort", name: "Comfort", icon: "🚙", pricePerKm: 16 },
  { id: "luxury", name: "Luxury", icon: "🚘", pricePerKm: 28 },
  { id: "van", name: "Group Van", icon: "🚐", pricePerKm: 22 },
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

          <div className="lg:col-span-7 bg-bg-cream border border-border-soft rounded-card shadow-lg p-6 md:p-8">
            <h3 className="font-serif text-lg md:text-xl font-bold text-primary-teal mb-4">
              Select Vehicle Type & Route
            </h3>

            <form onSubmit={handleEstimateFare} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                {vehicleTypes.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => {
                      setSelectedType(v.id);
                      setEstimatedFare(null);
                    }}
                    className={`p-3 rounded-card text-left border ${
                      selectedType === v.id
                        ? "bg-white border-primary-teal ring-1 ring-primary-teal"
                        : "bg-white/60 border-border-soft"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xl">{v.icon}</span>
                      <span className="text-[10px] font-bold text-primary-teal">
                        from ₹{v.pricePerKm}/km
                      </span>
                    </div>

                    <span className="font-semibold text-xs text-text-dark mt-1">
                      {v.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  placeholder="Pickup Location"
                  className="px-3 py-2 bg-white border border-border-soft rounded-btn text-xs"
                />

                <input
                  type="text"
                  required
                  value={drop}
                  onChange={(e) => setDrop(e.target.value)}
                  placeholder="Drop Location"
                  className="px-3 py-2 bg-white border border-border-soft rounded-btn text-xs"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="px-3 py-2 bg-white border border-border-soft rounded-btn text-xs"
                />

                <input
                  type="time"
                  required
                  value={time} 
                  onChange={(e) => setTime(e.target.value)}
                  className="px-3 py-2 bg-white border border-border-soft rounded-btn text-xs"
                />

                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="px-3 py-2 bg-white border border-border-soft rounded-btn text-xs"
                >
                  <option value="2">2 Persons</option>
                  <option value="4">4 Persons</option>
                  <option value="7">7 Persons</option>
                  <option value="12">12 Persons</option>
                </select>
              </div>

              {estimatedFare !== null && (
                <div className="bg-white border p-4 rounded-card flex justify-between items-center">
                  <div>
                    <span className="text-xs text-text-muted">
                      Estimated Fare
                    </span>
                    <p className="font-serif text-2xl font-bold text-primary-teal">
                      ₹{estimatedFare}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white text-xs font-semibold py-2.5 px-4 rounded-btn flex items-center gap-1.5"
                  >
                    Book via WhatsApp
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={isEstimating}
                className="w-full bg-accent-gold text-white font-semibold py-3 rounded-btn text-sm flex items-center justify-center gap-2"
              >
                <Calculator className="h-4 w-4" />
                {isEstimating ? "Estimating..." : "Estimate Fare"}
              </button>
            </form>
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
