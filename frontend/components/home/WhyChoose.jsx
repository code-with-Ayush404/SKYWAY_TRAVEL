import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Sparkles className="h-6 w-6 text-accent-gold" />,
    tag: "nepal tour package",
    title: "Exclusive Trip",
    desc: "There are many variations of passages of available but the majority.",
    bgColor: "bg-amber-50",
  },
  {
    id: 2,
    icon: <ShieldCheck className="h-6 w-6 text-primary-teal" />,
    tag: "nepal tour package",
    title: "Safety First Always",
    desc: "There are many variations of passages of available but the majority.",
    bgColor: "bg-emerald-50",
  },
  {
    id: 3,
    icon: <Award className="h-6 w-6 text-red-950" />,
    tag: "Shine travels & gorakhpur to nepal tour package",
    title: "Professional Guide",
    desc: "There are many variations of passages of available but the majority.",
    bgColor: "bg-rose-50",
  },
];

export default function WhyChoose() {
  const brandStats = [
    { value: "12K+", label: "Trips Completed" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "8+", label: "Years Experience" },
  ];

  return (
    <section className="py-24 bg-bg-cream border-t border-border-soft">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Copy & Stats */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <span className="small-caps-label">Let’s Go Together</span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-teal leading-tight">
            Plan Your Trip With us
          </h2>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Plan your trip with us! Shine Travels offers Local Taxi in Gorakhpur, 
            Car Rent, Gorakhpur to Nepal Tour Package, Gorakhpur to Raxaul Border, 
            and Gorakhpur to Kathmandu services. We ensure comfortable, reliable, 
            and safe journeys with experienced drivers to make your travel experience unforgettable.
          </p>

          <hr className="border-border-soft" />

          {/* Core Brand Stats */}
          <div className="grid grid-cols-3 gap-4">
            {brandStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="font-serif text-2xl md:text-3xl font-bold text-primary-teal">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs uppercase tracking-wider font-semibold text-text-muted">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: 1-Column Feature List */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          {features.map((f) => (
            <div
              key={f.id}
              className="bg-white border border-border-soft p-6 rounded-card shadow-sm hover:shadow-md hover:translate-y-[-4px] transition-all duration-300 flex items-start gap-5 text-left group"
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
        </div>
      </div>
    </section>
  );
}
