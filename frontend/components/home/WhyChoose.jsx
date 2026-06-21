import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Award,
  ArrowUpRight,
  MapPin,
  Car,
  PhoneCall,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Sparkles className="h-6 w-6 text-accent-gold" />,
    tag: "custom travel planning",
    title: "Exclusive Trip",
    desc: "Personalized tour plans for Nepal, Uttarakhand, Ayodhya, Kathmandu and nearby destinations.",
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    icon: <ShieldCheck className="h-6 w-6 text-primary-teal" />,
    tag: "safe & comfortable ride",
    title: "Safety First Always",
    desc: "Clean vehicles, experienced drivers and reliable support to make every journey secure.",
    bgColor: "bg-emerald-50",
  },
  {
    id: 3,
    icon: <Award className="h-6 w-6 text-red-950" />,
    tag: "trusted travel support",
    title: "Professional Guide",
    desc: "Helpful route guidance, smooth booking support and local travel knowledge for a better experience.",
    bgColor: "bg-rose-50",
  },
];

const services = [
  "Airport Pickup & Drop",
  "Car Rental Service",
  "Nepal Tour Package",
  "Raxaul Border Taxi",
  "Kathmandu Trip",
  "Wedding Cars",
];

export default function WhyChoose() {
  return (
    <section className="py-16 bg-bg-cream border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <span className="small-caps-label">Let’s Go Together</span>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-teal leading-tight">
            Plan Your Trip With Us
          </h2>

          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Skyway Travel helps you plan smooth and comfortable journeys from
            Gorakhpur to your favorite destinations. Whether you need a local
            taxi, car rental, Nepal tour package, Raxaul Border transfer, or a
            Kathmandu trip, our team provides reliable vehicles, experienced
            drivers, and friendly travel support.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-btn border border-border-soft bg-white px-4 py-3 text-sm font-semibold text-primary-teal shadow-sm"
              >
                <CheckCircle className="h-4 w-4 text-accent-gold shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          {/* <div className="rounded-card border border-border-soft bg-white p-5 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-full bg-bg-cream flex items-center justify-center text-accent-gold shrink-0">
                  <PhoneCall className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-primary-teal">
                    Need Help Planning?
                  </h3>
                  <p className="text-xs md:text-sm text-text-muted leading-relaxed mt-1">
                    Tell us your destination and travel date. We will suggest
                    the best route and vehicle option.
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-btn bg-primary-teal px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-primary-teal-dk"
              >
                Contact Us
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div> */}
        </div>

        <div className="lg:col-span-6 flex flex-col gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white border border-border-soft p-6 rounded-card shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-start gap-5 text-left group"
            >
              <div
                className={`p-3 rounded-card w-12 h-12 shrink-0 flex items-center justify-center ${f.bgColor} transition-transform group-hover:rotate-6 duration-300`}
              >
                {f.icon}
              </div>

              <div className="flex flex-col gap-1.5 flex-grow">
                <span className="text-[9px] uppercase tracking-wider font-bold text-accent-gold">
                  {f.tag}
                </span>

                <h3 className="font-serif text-lg font-bold text-primary-teal flex items-center gap-1 group-hover:text-accent-gold transition-colors">
                  <span>{f.title}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-xs text-text-muted leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}

          {/* <div className="grid grid-cols-2 gap-4"> */}
            {/* <div className="rounded-card bg-primary-teal p-5 text-white">
              <MapPin className="h-5 w-5 text-accent-gold mb-3" />
              <h4 className="font-serif text-lg font-bold">
                Route Guidance
              </h4>
              <p className="text-xs text-white/75 mt-1 leading-relaxed">
                Easy planning for Gorakhpur, Nepal, Raxaul and Kathmandu trips.
              </p>
            </div> */}
{/* 
            <div className="rounded-card bg-white border border-border-soft p-5">
              <Car className="h-5 w-5 text-accent-gold mb-3" />
              <h4 className="font-serif text-lg font-bold text-primary-teal">
                Clean Vehicles
              </h4>
              <p className="text-xs text-text-muted mt-1 leading-relaxed">
                Comfortable cars for family, business and outstation travel.
              </p>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}