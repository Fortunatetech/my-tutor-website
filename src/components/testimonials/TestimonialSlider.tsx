// src/components/testimonials/TestimonialSlider.tsx
"use client";
import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div>
      <AnimatePresence mode="wait">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoHeight
          speed={600}
        >
          {testimonials.map(({ name, avatar, role, quote }, i) => (
            <SwiperSlide key={i}>
              <div className="p-6 bg-transparent border rounded-lg shadow-lg text-center">
                <img
                  src={avatar || "/images/avatar.jpg"}
                  alt={name}
                  className="mx-auto w-16 h-16 rounded-full object-cover mb-3"
                />
                <blockquote className="italic text-neutral-800 dark:text-neutral-50">
                  “{quote}”
                </blockquote>
                <div className="mt-3 font-semibold text-brand-900">{name}</div>
                <div className="text-sm text-neutral-600">{role}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </AnimatePresence>
    </div>
  );
}
