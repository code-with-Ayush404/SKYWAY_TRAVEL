"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const galleryImages = [
  // Slide 1 Images
  { id: 1, src: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800", alt: "Scenic mountain trekking route", category: "Adventure" },
  { id: 2, src: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800", alt: "Himalayan cable car ride over mountains", category: "Sightseeing" },
  { id: 3, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200", alt: "Breathtaking suspension bridge over valley river", category: "Nature" },
  { id: 4, src: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=800", alt: "Thrilling white water rafting", category: "Rafting" },
  { id: 5, src: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=800", alt: "Paragliding over scenic heights at sunset", category: "Paragliding" },
  { id: 6, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800", alt: "Paragliders sailing over snow peaks", category: "Gliding" },
  
  // Slide 2 Images
  { id: 7, src: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800", alt: "Taj Mahal in Agra at sunrise", category: "Heritage" },
  { id: 8, src: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=800", alt: "Desert camel safari adventure", category: "Desert" },
  { id: 9, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200", alt: "Pristine Goa beach view at sunset", category: "Beach" },
  { id: 10, src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800", alt: "Vibrant and colorful local bazaar culture", category: "Culture" },
  { id: 11, src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800", alt: "Pristine blue alpine lake in the hills", category: "Lakes" },
  { id: 12, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800", alt: "Serene traditional boat ride on a quiet river", category: "Nature" },

  // Slide 3 Images
  { id: 13, src: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=800", alt: "Scenic trekking and backpacking valley trail", category: "Trekking" },
  { id: 14, src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800", alt: "Starry sky night mountain camping", category: "Camping" },
  { id: 15, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200", alt: "Serene lake reflection boat ride", category: "Nature" },
  { id: 16, src: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=800", alt: "Iconic Santorini clifftop coastal beach view", category: "Beach" },
  { id: 17, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800", alt: "Epic road trip through scenic red deserts", category: "Roadtrip" },
  { id: 18, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800", alt: "Beautiful tropical forest waterfall basin", category: "Waterfall" },

  // Slide 4 Images
  { id: 19, src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=800", alt: "Backpacker standing atop high mountain peak", category: "Hiking" },
  { id: 20, src: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=800", alt: "Winding mountain highway road", category: "Sightseeing" },
  { id: 21, src: "https://images.unsplash.com/photo-1472214222541-d510753a4907?q=80&w=1200", alt: "Glorious sunset colors over green hill valley", category: "Nature" },
  { id: 22, src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800", alt: "Tranquil wooden footbridge walkway in deep forest", category: "Forest" },
  { id: 23, src: "https://images.unsplash.com/photo-1502759683299-cdcd6974244f?q=80&w=800", alt: "Beautiful ocean waves crashing on coastal cliffs", category: "Coasts" },
  { id: 24, src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=800", alt: "Relaxing tropical island wooden pier walk", category: "Leisure" },

  // Slide 5 Images
  { id: 25, src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800", alt: "Magnificent epic mountain ranges and green hills", category: "Mountains" },
  { id: 26, src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800", alt: "Camping campfire in the middle of deep pine forest", category: "Camping" },
  { id: 27, src: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200", alt: "Warm autumn forest leaves and sunbeams", category: "Forest" },
  { id: 28, src: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800", alt: "Old historic European street architectural travel", category: "Heritage" },
  { id: 29, src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800", alt: "Luxury tropical travel resort pool", category: "Resort" },
  { id: 30, src: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=800", alt: "Beautiful quiet sandy cove beach shoreline", category: "Beach" },
];

export default function PhotoGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const goNext = () => {
    setActiveIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : 0
    );
  };

  const goPrev = () => {
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : galleryImages.length - 1
    );
  };

  const renderSlideGrid = (slideIndex) => {
    const startIndex = slideIndex * 6;
    const images = galleryImages.slice(startIndex, startIndex + 6);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {/* Image 1: Tall Vertical */}
        <div 
          onClick={() => openLightbox(startIndex + 0)}
          className="md:col-span-1 md:row-span-2 h-[320px] md:h-[500px] relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[0].src} 
            alt={images[0].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-dk/90 via-primary-teal-dk/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-accent-gold text-[10px] font-semibold tracking-wider uppercase">{images[0].category}</span>
              <p className="text-white text-xs font-light line-clamp-1">{images[0].alt}</p>
            </div>
          </div>
        </div>
        
        {/* Image 2: Standard */}
        <div 
          onClick={() => openLightbox(startIndex + 1)}
          className="h-[238px] relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[1].src} 
            alt={images[1].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-dk/90 via-primary-teal-dk/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-accent-gold text-[10px] font-semibold tracking-wider uppercase">{images[1].category}</span>
              <p className="text-white text-xs font-light line-clamp-1">{images[1].alt}</p>
            </div>
          </div>
        </div>

        {/* Image 3: Spans 2 Cols */}
        <div 
          onClick={() => openLightbox(startIndex + 2)}
          className="sm:col-span-2 md:col-span-2 h-[238px] relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[2].src} 
            alt={images[2].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-dk/90 via-primary-teal-dk/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-accent-gold text-[10px] font-semibold tracking-wider uppercase">{images[2].category}</span>
              <p className="text-white text-xs font-light line-clamp-1">{images[2].alt}</p>
            </div>
          </div>
        </div>

        {/* Image 4: Standard */}
        <div 
          onClick={() => openLightbox(startIndex + 3)}
          className="h-[238px] relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[3].src} 
            alt={images[3].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-dk/90 via-primary-teal-dk/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-accent-gold text-[10px] font-semibold tracking-wider uppercase">{images[3].category}</span>
              <p className="text-white text-xs font-light line-clamp-1">{images[3].alt}</p>
            </div>
          </div>
        </div>

        {/* Image 5: Standard */}
        <div 
          onClick={() => openLightbox(startIndex + 4)}
          className="h-[238px] relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[4].src} 
            alt={images[4].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-dk/90 via-primary-teal-dk/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-accent-gold text-[10px] font-semibold tracking-wider uppercase">{images[4].category}</span>
              <p className="text-white text-xs font-light line-clamp-1">{images[4].alt}</p>
            </div>
          </div>
        </div>

        {/* Image 6: Standard */}
        <div 
          onClick={() => openLightbox(startIndex + 5)}
          className="h-[238px] relative rounded-2xl overflow-hidden group cursor-pointer shadow-md"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={images[5].src} 
            alt={images[5].alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-teal-dk/90 via-primary-teal-dk/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div className="flex flex-col gap-1 text-left">
              <span className="text-accent-gold text-[10px] font-semibold tracking-wider uppercase">{images[5].category}</span>
              <p className="text-white text-xs font-light line-clamp-1">{images[5].alt}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-white border-t border-border-soft relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="small-caps-label block mb-3">
          EXPLORE OUR DESTINATIONS
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-teal leading-tight mb-4">
          Make Your Tour More{" "}
          <span className="italic-accent text-accent-gold">Pleasure</span>
          <br />
          <span className="text-primary-teal font-sans font-bold text-3xl md:text-5xl mt-2 block tracking-tight">
            Recent Gallery
          </span>
        </h2>
        <p className="text-text-muted text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          A visual window into the breathtaking landscapes, thrilling adventures, 
          and rich cultural heritage waiting for you on your next journey.
        </p>
      </div>

      {/* Swiper Gallery Container */}
      <div className="max-w-7xl mx-auto px-6 relative pb-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={800}
          autoplay={{
            delay: 2500, // moves automatically after 2.5 seconds
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".gallery-custom-pagination",
            bulletClass: "gallery-bullet",
            bulletActiveClass: "gallery-bullet-active",
          }}
          className="w-full animate-fade-in"
        >
          <SwiperSlide>{renderSlideGrid(0)}</SwiperSlide>
          <SwiperSlide>{renderSlideGrid(1)}</SwiperSlide>
          <SwiperSlide>{renderSlideGrid(2)}</SwiperSlide>
          <SwiperSlide>{renderSlideGrid(3)}</SwiperSlide>
          <SwiperSlide>{renderSlideGrid(4)}</SwiperSlide>
        </Swiper>

        {/* Custom Pagination centered horizontally below the gallery container */}
        <div className="gallery-custom-pagination absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-3 z-20"></div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-[110] cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-[110] cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-[110] cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image container */}
          <div
            className="max-w-4xl max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl p-6 text-left">
              <span className="text-accent-gold text-[10px] font-semibold tracking-[0.25em] uppercase block mb-1">
                {galleryImages[activeIndex].category}
              </span>
              <p className="text-white text-sm font-light">
                {galleryImages[activeIndex].alt}
              </p>
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-wider font-medium">
            {activeIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
