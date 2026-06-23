import {
  ArrowRight,
  Car,
  MapPin,
  ShieldCheck,
  Star,
  Quote,
  Camera,
} from "lucide-react";
import Link from "next/link";

const gallery = [
  "https://plus.unsplash.com/premium_photo-1697730334768-6e65fa8fded0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1554710869-95f3df6a3197?q=80&w=677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=900",
  "https://plus.unsplash.com/premium_photo-1697729439457-85d4b9d3a2cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const features = [
  {
    icon: <Car />,
    title: "Comfortable Rentals",
    text: "Clean, well-maintained cars for family tours, business trips, and outstation travel.",
  },
  {
    icon: <MapPin />,
    title: "Custom Tour Plans",
    text: "Personalized packages for Ayodhya, Uttarakhand, Nepal, Gorakhpur and more.",
  },
  {
    icon: <ShieldCheck />,
    title: "Safe & Reliable",
    text: "Experienced drivers, verified routes, and smooth support throughout your journey.",
  },
];

const testimonials = [
  {
    name: "Yash Gupta",
    img: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "Our Ayodhya trip was smooth and comfortable. The car was clean and the driver was very cooperative.",
  },
  {
    name: "Rajesh Kumar",
    img: "https://images.pexels.com/photos/31964260/pexels-photo-31964260.jpeg",
    text: "Skyway Travel managed our Uttarakhand tour perfectly. Everything felt planned and stress-free.",
  },
  {
    name: "Krishna Tripathi",
    img: "https://images.pexels.com/photos/11576669/pexels-photo-11576669.jpeg",
    text: "Great experience for our Nepal trip. Good service, polite driver, and proper travel guidance.",
  },
  {
    name: "Ankit Singh",
    img: "https://randomuser.me/api/portraits/men/41.jpg",
    text: "Very professional service. Booking was easy and the entire journey was comfortable for my family.",
  },
  {
    name: "Priya Sharma",
    img: "https://images.pexels.com/photos/17936815/pexels-photo-17936815.jpeg",
    text: "The tour package was well planned. Hotels, car, and route guidance were handled very nicely.",
  },
  {
    name: "Saurabh Mishra",
    img: "https://images.pexels.com/photos/13287884/pexels-photo-13287884.jpeg",
    text: "Best travel service from Gorakhpur. Transparent pricing and very helpful support team.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#faf7f1] text-[#164b57]">
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .auto-scroll {
          animation: scrollLeft 30s linear infinite;
        }

        .gallery-scroll {
          animation: scrollLeft 32s linear infinite;
        }

        .auto-scroll:hover,
        .gallery-scroll:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .auto-scroll {
            animation-duration: 38s;
          }

          .gallery-scroll {
            animation-duration: 40s;
          }
        }
      `}</style>

      <section className="mx-auto max-w-7xl px-4 pt-8 text-center sm:px-6 sm:pt-10">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#d4a629] sm:text-xl sm:tracking-[0.35em]">
          Welcome To Skyway Travel
        </p>

        <h2 className="mx-auto mt-4 max-w-6xl font-serif text-3xl font-bold leading-tight text-[#164b57] sm:mt-5 sm:text-4xl md:text-6xl">
          Your trusted travel partner from Gorakhpur
        </h2>

        <div className="mx-auto mt-5 h-[3px] w-20 bg-[#d4a629] sm:mt-6 sm:w-24" />

        <p className="mx-auto mt-6 max-w-6xl pb-8 text-base leading-7 text-gray-600 sm:mt-7 sm:pb-10 sm:text-lg sm:leading-8">
          At Skyway Travel Gorakhpur, we believe that every journey should be as
          memorable as the destination itself. With years of experience in the
          travel industry, we offer premium car rental services and carefully
          curated tour packages designed to suit the unique preferences of every
          traveler. Whether you are planning a spiritual trip to Ayodhya, an
          adventurous getaway to Uttarakhand, a scenic journey through Nepal, or
          a family vacation, our team is committed to providing seamless travel
          experiences with comfort, safety, and reliability at the forefront.
        </p>
      </section>

      <div className="mt-4 mb-4 bg-[#f5efe6]">
        <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800"
              alt="Travel destination"
              className="mt-8 h-[280px] w-full rounded-[24px] object-cover shadow-lg sm:mt-12 sm:h-[420px] sm:rounded-[32px]"
            />

            <div className="space-y-3 sm:space-y-5">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800"
                alt="Mountain travel"
                className="h-[155px] w-full rounded-[24px] object-cover shadow-lg sm:h-[230px] sm:rounded-[32px]"
              />

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800"
                alt="Nature trip"
                className="h-[155px] w-full rounded-[24px] object-cover shadow-lg sm:h-[230px] sm:rounded-[32px]"
              />
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="rounded-3xl border border-[#eadfca] bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl sm:p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#faf7f1] text-[#d4a629] sm:h-14 sm:w-14">
                    {item.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#164b57] sm:text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/tour-packages"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-teal bg-primary-teal px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary-teal-dk sm:mt-10 sm:px-8 sm:text-base"
            >
              Plan Your Trip
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>

      <section className="py-8">
        <div className="mb-10 px-4 text-center sm:mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d4a629] sm:text-lg sm:tracking-[0.35em]">
            Testimonials
          </p>

          <h2 className="mt-4 font-serif text-3xl font-bold text-[#164b57] md:text-6xl">
            What Our Clients Say
          </h2>

          <div className="mx-auto mt-6 h-[3px] w-20 bg-[#d4a629]" />
        </div>

        <div className="mx-auto max-w-7xl overflow-hidden px-4 pb-12 sm:px-6">
          <div className="auto-scroll flex w-max gap-4 sm:gap-6">
            {[...testimonials, ...testimonials].map((item, i) => (
              <div
                key={i}
                className="relative w-[280px] shrink-0 rounded-[28px] border border-[#eadfca] bg-white p-5 shadow-sm sm:w-[320px] sm:rounded-[32px] sm:p-6 md:w-[420px]"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover sm:h-16 sm:w-16"
                  />

                  <div>
                    <h3 className="text-lg font-bold text-[#164b57] sm:text-xl">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500">Traveller</p>
                  </div>
                </div>

                <div className="mt-4 flex gap-1 text-[#d4a629]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={18} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  "{item.text}"
                </p>

                <div className="absolute right-5 top-5 text-[#d4a629]/25 sm:right-6 sm:top-6">
                  <Quote size={42} className="sm:h-12 sm:w-12" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#f5efe6]">
        <section className="mx-auto max-w-8xl px-4 py-10 pb-20 sm:px-6 sm:pb-24">
          <div className="mb-10">
            <div className="w-full text-center">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d4a629] sm:text-lg sm:tracking-[0.35em]">
                Gallery
              </p>

              <h2 className="mt-4 font-serif text-3xl font-bold text-[#164b57] md:text-5xl">
                Memories From Our Journeys
              </h2>

              <div className="mx-auto mt-6 h-[3px] w-20 bg-[#d4a629]" />
            </div>
{/* 
            <div className="hidden rounded-full bg-white p-4 text-[#d4a629] shadow md:flex">
              <Camera size={30} />
            </div> */}
          </div>

          <div className="overflow-hidden pb-6">
            <div className="gallery-scroll flex w-max gap-4 sm:gap-6">
              {[...gallery, ...gallery].map((img, i) => (
                <div
                  key={i}
                  className="group relative h-[240px] w-[280px] shrink-0 overflow-hidden rounded-[28px] sm:h-[280px] sm:w-[320px] sm:rounded-[32px] md:h-[310px] md:w-[420px]"
                >
                  <img
                    src={img}
                    alt="Skyway travel gallery"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#164b57]/80 to-transparent" />

                  <p className="absolute bottom-5 left-5 text-lg font-semibold text-white sm:text-xl">
                    Skyway Travel Moment
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}