import Hero from "@/components/home/Hero";
// import Stats from "@/components/home/Stats";
import TourPreview from "@/components/home/TourPreview";
import TaxiTeaser from "@/components/home/TaxiTeaser";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import PhotoGallery from "@/components/home/PhotoGallery";
import GetInTouch from "@/components/home/GetInTouch";
import Blogs from "@/components/home/Blogs";
import { getPackages } from "@/lib/dataService";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Skyway Travel - Premium Curated Travel & Booking Platform",
  description:
    "Curated tour packages, taxi/car rentals, and luxury wedding car rentals across India & Nepal.",
};

export default async function HomePage() {
  const packages = await getPackages();

  return (
    <div className="flex flex-col w-full">
      <Hero />
      {/* <Stats /> */}
      <TourPreview packages={packages} />
      <TaxiTeaser />
      <WhyChoose />
      <PhotoGallery />
      <GetInTouch />
      <Testimonials />
      <Blogs />
    </div>
  );
}
