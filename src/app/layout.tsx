import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/nav/Header";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper";
import PageTransition from "@/components/PageTransition";
import { BookingProvider } from "@/components/booking/BookingProvider";
import FloatingCTA from "@/components/ui/FloatingCTA";
import BookingModal from "@/components/booking/BookingModal";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const metadata = {
  title: "TutorCoach",
  description: "Personal Tutor & Coach – Academic, Tech & Career Services",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <ThemeProviderWrapper>
          <BookingProvider>
            <Header />
            <main className="flex-1 ">
              <PageTransition>{children}</PageTransition>
            </main>

            {/* Floating CTA available across pages */}
            <FloatingCTA />

            {/* Global booking modal (reads prefill from BookingProvider) */}
            <BookingModal />
          </BookingProvider>
        </ThemeProviderWrapper>

        <footer className="bg-brand-900 dark:text-white mt-8 border-t">
          <div className="container mx-auto px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Services</h4>
              <ul className="space-y-1 text-sm">
                <li>Tutoring</li>
                <li>Career Coaching</li>
                <li>Resume & Interview Prep</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <ul className="space-y-1 text-sm">
                <li>About Me</li>
                <li>Testimonials</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <ul className="space-y-1 text-sm">
                <li>Contact Form</li>
                <li>Book Consultation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Follow</h4>
              <ul className="space-y-1 text-sm">
                <li>LinkedIn</li>
                <li>Twitter</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 py-4 text-center text-sm">
            © {new Date().getFullYear()} TutorCoach
          </div>
        </footer>
      </body>
    </html>
  );
}
