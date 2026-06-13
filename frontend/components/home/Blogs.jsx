"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Travel agency for those who want to explore the world and try to make adventure",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800",
    date: "July 05, 2024",
    readTime: "6 Min Read",
    isLarge: true,
  },
  {
    id: 2,
    title: "The best time to visit japan & enjoy the cherry blossoms",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800",
    date: "July 07, 2024",
    readTime: "7 Min Read",
    isLarge: false,
  },
  {
    id: 3,
    title: "Hidden history of Japan in the world and try to make adventure",
    image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=800",
    date: "July 10, 2024",
    readTime: "8 Min Read",
    isLarge: false,
  },
];

export default function Blogs() {
  const largePost = blogPosts.find((post) => post.isLarge);
  const smallPosts = blogPosts.filter((post) => !post.isLarge);

  return (
    <section className="py-24 bg-[#FAF8F3] border-t border-border-soft overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="text-left flex flex-col gap-2">
            <span className="italic-accent text-accent-gold text-lg md:text-xl font-normal lowercase block">
              Blog and Article
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-teal tracking-tight">
              Blog & Articles From Skyway
            </h2>
          </div>

          <Link
            href="/tour-packages"
            className="inline-flex items-center gap-2 border border-primary-teal/30 hover:border-primary-teal text-primary-teal font-semibold px-6 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-primary-teal hover:text-white transition-all duration-300 shadow-sm"
          >
            <span>See More Articles</span>
            <ArrowRight className="h-4.5 w-4.5" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: 1 Large Post Card */}
          {largePost && (
            <div className="lg:col-span-6 group flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              {/* Image Container */}
              <Link 
                href="/tour-packages"
                className="w-full h-80 md:h-[360px] overflow-hidden relative block"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={largePost.image}
                  alt={largePost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              {/* Text content */}
              <div className="flex flex-col flex-grow gap-3.5 p-6 md:p-8 text-left justify-between">
                <div className="flex flex-col gap-3">
                  {/* Date & Time */}
                  <div className="flex items-center gap-4 text-xs text-text-muted font-semibold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-accent-gold" />
                      <span>{largePost.date}</span>
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-accent-gold" />
                      <span>{largePost.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link 
                    href="/tour-packages"
                    className="text-xl md:text-2xl font-serif font-bold text-primary-teal hover:text-accent-gold transition-colors duration-300 leading-snug block"
                  >
                    {largePost.title}
                  </Link>
                </div>

                {/* Read More Link */}
                <Link
                  href="/tour-packages"
                  className="inline-flex items-center gap-2 text-xs font-bold text-accent-gold hover:text-primary-teal uppercase tracking-widest transition-colors duration-300 mt-2"
                >
                  <span>Read More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Right Column: 2 Stacked Horizontal Cards */}
          <div className="lg:col-span-6 flex flex-col gap-8 justify-between">
            {smallPosts.map((post) => (
              <div
                key={post.id}
                className="group flex flex-col sm:flex-row bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 text-left h-[calc(50%-16px)]"
              >
                {/* Image Container */}
                <Link 
                  href="/tour-packages"
                  className="w-full sm:w-2/5 h-48 sm:h-full overflow-hidden relative block shrink-0"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>

                {/* Text Content */}
                <div className="flex flex-col gap-3 justify-center p-6 md:p-8 sm:w-3/5">
                  {/* Date & Time */}
                  <div className="flex items-center gap-4 text-xs text-text-muted font-semibold uppercase tracking-wider">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-accent-gold" />
                      <span>{post.date}</span>
                    </div>
                    <span>|</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-accent-gold" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link 
                    href="/tour-packages"
                    className="text-base md:text-lg font-serif font-bold text-primary-teal hover:text-accent-gold transition-colors duration-300 leading-snug block line-clamp-2"
                  >
                    {post.title}
                  </Link>

                  {/* Read More Link */}
                  <Link
                    href="/tour-packages"
                    className="inline-flex items-center gap-2 text-xs font-bold text-accent-gold hover:text-primary-teal uppercase tracking-widest transition-colors duration-300 mt-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
