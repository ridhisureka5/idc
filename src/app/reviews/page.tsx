 "use client";

import {
  MessageCircle,
  Star,
  ShieldCheck,
  Send,
  Quote,
  Sparkles,
  ArrowUp,
    Menu,
    X,

} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ReviewsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reviews = [
    {
      name: "Rahul Mehta",
      role: "Diamond Buyer",
      rating: 5,
      review:
        "Very professional certification service. The report was detailed, accurate, and delivered on time. Highly recommended for genuine gemstone verification.",
    },
    {
      name: "Priya Sharma",
      role: "Jewellery Designer",
      rating: 5,
      review:
        "Excellent experience with IGC. Their gemstone identification process was smooth and transparent. The team was supportive throughout.",
    },
    {
      name: "Aman Verma",
      role: "Collector",
      rating: 4,
      review:
        "Authentic certification with great customer support. The report quality and professionalism exceeded my expectations.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f5f2] overflow-hidden">
             {/* ================= NAVBAR ================= */}
<nav className="fixed top-0 left-0 w-full z-50 bg-[#f7f4f2]/90 backdrop-blur-md border-b border-[#ebe3de]">

  <div className="flex items-center justify-between px-5 md:px-12 py-4">

    {/* Logo */}
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl overflow-hidden">
        <Image
          src="/img1.jpeg"
          alt="IGC Logo"
          width={48}
          height={48}
          className="object-cover"
        />
      </div>

      <h1 className="text-xl font-bold text-[#9b7147]">
        IGC
      </h1>
    </div>

    {/* Desktop Navbar */}
    <div className="hidden lg:flex items-center gap-10 text-[15px] text-[#3b3028] font-medium">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/services">Services</a>
      <a href="/gemology">Gemology</a>
      <a href="/faq">FAQ</a>
      <a href="/verify-certificate">Verify Certificate</a>
      <a href="/reviews">Reviews</a>
      <a href="/blogs">Blogs</a>
      <a href="/sample-certificates">Sample Certificates</a>
      <a href="/contact">Contact</a>
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setMenuOpen(true)}
      className="lg:hidden w-12 h-12 rounded-full bg-gradient-to-br from-[#6e3a18] to-[#d7ae7b] text-white flex items-center justify-center shadow-xl"
    >
      <Menu size={28} />
    </button>
  </div>

  {/* MOBILE MENU */}
  <div
    className={`fixed top-0 right-0 h-screen w-[85%] max-w-[360px] bg-white z-[100] transition-all duration-500 shadow-2xl ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-6 border-b border-[#eee]">

      <div className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-2xl overflow-hidden">
          <Image
            src="/img1.jpeg"
            alt="IGC"
            width={56}
            height={56}
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-[30px] font-bold text-[#2d1407]">
            Menu
          </h2>

          <p className="text-[15px] text-[#7a6c63]">
            Navigate to any section
          </p>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="w-14 h-14 rounded-full bg-[#f3ece7] flex items-center justify-center shadow-lg"
      >
        <X size={30} className="text-[#4b1f08]" />
      </button>
    </div>

    {/* Links */}
    <div className="flex flex-col px-6 py-8 gap-5 text-[22px] font-semibold text-[#2d1407]">

      <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
      <a href="/services" onClick={() => setMenuOpen(false)}>Services</a>
      <a href="/faq" onClick={() => setMenuOpen(false)}>FAQ</a>
      <a href="/verify-certificate" onClick={() => setMenuOpen(false)}>Verify Certificate</a>
      <a href="/gemology" onClick={() => setMenuOpen(false)}>Gemology</a>
      <a href="/reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
      <a href="/blogs" onClick={() => setMenuOpen(false)}>Blogs</a>
      <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
    </div>

    {/* Bottom Button */}
    <div className="absolute bottom-6 left-6 right-6">
      <button
        onClick={() => setMenuOpen(false)}
        className="w-full bg-[#4b1f08] text-white py-4 rounded-2xl text-[18px] font-semibold"
      >
        Close Menu
      </button>
    </div>
  </div>

  {/* Overlay */}
  {menuOpen && (
    <div
      onClick={() => setMenuOpen(false)}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90] lg:hidden"
    />
  )}
</nav>
            

      {/* ================= HERO ================= */}

      <section className="relative pt-[150px] pb-[110px] px-6">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#efe3d8_0%,#f8f5f2_60%)]" />

        <div className="relative z-10 max-w-[950px] mx-auto text-center animate-fadeUp">

          <div className="w-24 h-24 rounded-[30px] mx-auto bg-gradient-to-br from-[#5b2408] to-[#ddb37c] flex items-center justify-center shadow-[0_15px_50px_rgba(91,36,8,0.18)]">

            <MessageCircle
              size={44}
              strokeWidth={1.8}
              className="text-white"
            />
          </div>

          <h1 className="mt-10 text-[48px] md:text-[78px] leading-[1] tracking-[-3px] font-bold">

            <span className="bg-gradient-to-r from-[#5b2408] via-[#8a5a36] to-[#d1a06d] bg-clip-text text-transparent">
              Customer Reviews
            </span>
          </h1>

          <p className="mt-8 text-[18px] md:text-[22px] leading-10 text-[#685951] max-w-[900px] mx-auto">
            Trusted experiences from clients who rely on our
            gemstone certification and authenticity verification services.
          </p>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}

      <section className="px-6 pb-28">

        <div className="max-w-[1380px] mx-auto grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-10 items-start">

          {/* ================= LEFT FORM ================= */}

          <div className="bg-white border border-[#ebdfd8] rounded-[34px] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.04)] sticky top-28 animate-slideLeft">

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#5b2408] to-[#ddb37c] flex items-center justify-center">

                <Sparkles size={24} className="text-white" />
              </div>

              <div>
                <h2 className="text-[30px] font-bold leading-tight text-[#3f1f10]">
                  Share Your Experience
                </h2>

                <p className="mt-1 text-[14px] text-[#7a6b64]">
                  Help others make trusted decisions
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="mt-10 space-y-7">

              {/* NAME */}
              <div>
                <label className="text-[15px] font-semibold text-[#3f1f10]">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-3 h-[58px] rounded-2xl border border-[#e8ddd6] bg-[#faf8f6] px-5 text-[15px] outline-none focus:border-[#9b6b45] transition-all"
                />
              </div>

              {/* RATING */}
              <div>

                <label className="text-[15px] font-semibold text-[#3f1f10]">
                  Rating
                </label>

                <div className="flex items-center gap-3 mt-4">

                  {[1, 2, 3, 4, 5].map((item) => (
                    <button
                      key={item}
                      className="w-12 h-12 rounded-2xl border border-[#eadfd8] bg-[#faf8f6] flex items-center justify-center hover:bg-[#5b2408] hover:border-[#5b2408] group transition-all duration-300"
                    >
                      <Star
                        size={22}
                        className="text-[#c8b8ae] group-hover:text-white transition-all"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* REVIEW */}
              <div>
                <label className="text-[15px] font-semibold text-[#3f1f10]">
                  Your Review
                </label>

                <textarea
                  rows={5}
                  placeholder="Share your experience with our certification services..."
                  className="w-full mt-3 rounded-2xl border border-[#e8ddd6] bg-[#faf8f6] px-5 py-4 text-[15px] outline-none resize-none focus:border-[#9b6b45] transition-all"
                />
              </div>

              {/* BUTTON */}
              <button className="w-full h-[60px] rounded-2xl bg-gradient-to-r from-[#4b1f08] to-[#6f3417] text-white text-[16px] font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-lg">

                Submit Review

                <Send size={18} />
              </button>

              <p className="text-[13px] leading-6 text-[#85746c]">
                * Your review will be visible after admin approval.
              </p>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}

          <div className="animate-slideRight">

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {[
                {
                  title: "Verified Reviews",
                  desc: "All reviews are manually approved",
                  icon: <ShieldCheck size={30} />,
                },
                {
                  title: "Authentic Feedback",
                  desc: "Real gemstone certification clients",
                  icon: <Star size={30} />,
                },
                {
                  title: "Trusted Service",
                  desc: "Professional & transparent support",
                  icon: <MessageCircle size={30} />,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#ebdfd8] rounded-[30px] p-8 text-center hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-2xl mx-auto bg-gradient-to-br from-[#5b2408] to-[#ddb37c] flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>

                  <h3 className="mt-6 text-[26px] font-bold text-[#3f1f10] leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-[#6d5d55]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* REVIEWS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-10">

              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#ebdfd8] rounded-[32px] p-8 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden"
                >

                  {/* gradient blur */}
                  <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-[#ddb37c]/20 rounded-full blur-3xl" />

                  {/* top */}
                  <div className="relative z-10 flex items-start justify-between gap-4">

                    <div className="flex items-center gap-4">

                      {/* avatar */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5b2408] to-[#c99863] flex items-center justify-center text-white text-[22px] font-semibold shadow-lg">
                        {review.name.charAt(0)}
                      </div>

                      <div>

                        <h3 className="text-[22px] font-bold text-[#3f1f10]">
                          {review.name}
                        </h3>

                        <p className="text-[14px] text-[#8a7b74] mt-1">
                          {review.role}
                        </p>
                      </div>
                    </div>

                    <Quote
                      size={34}
                      className="text-[#d5b08b]"
                    />
                  </div>

                  {/* stars */}
                  <div className="flex items-center gap-1 mt-7 relative z-10">

                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="#d6a066"
                        className="text-[#d6a066]"
                      />
                    ))}
                  </div>

                  {/* review text */}
                  <p className="mt-6 text-[15px] leading-8 text-[#655851] relative z-10">
                    {review.review}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="px-6 pb-32">

        <div className="max-w-[1380px] mx-auto bg-gradient-to-r from-[#4b1f08] via-[#6b3417] to-[#8b5b36] rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden">

          {/* blur */}
          <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] bg-white/10 rounded-full blur-3xl" />

          <div className="absolute bottom-[-120px] left-[-120px] w-[280px] h-[280px] bg-[#d8a878]/20 rounded-full blur-3xl" />

          <div className="relative z-10">

            <h2 className="text-[40px] md:text-[60px] font-bold tracking-[-2px] text-white leading-tight">
              Trusted By Thousands
            </h2>

            <p className="mt-6 text-[17px] md:text-[20px] text-[#f3dfd0] leading-9 max-w-[850px] mx-auto">
              Experience reliable gemstone certification with
              transparency, precision, and industry-leading standards.
            </p>
<Link href="/verify-certificate" className="mt-10 bg-white text-[#4b1f08] px-10 h-[60px] rounded-2xl text-[20px] font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
              Verify Your Certificate
            </Link>
            
          </div>
        </div>
      </section>
      <footer className="bg-[#4b1f08] text-white pt-16 pb-8 px-8">
      
        <div className="max-w-[1350px] mx-auto">
      
          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
      
            {/* LEFT */}
            <div>
      
              {/* Logo */}
              <div className="flex items-center gap-3">
      
                <div className="w-10 h-10 rounded-xl overflow-hidden">
                  <Image
                    src="/img1.jpeg"
                    alt="IGC"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
      
                <h2 className="text-[24px] font-semibold">
                  GemCertify
                </h2>
              </div>
      
              {/* Description */}
              <p className="mt-6 text-[14px] leading-7 text-[#d7c4b7] max-w-[340px]">
                Trusted gemstone certification and grading services
                with modern authentication standards and expert
                gemologists.
              </p>
      
              {/* Socials */}
              <div className="flex items-center gap-3 mt-6">
      
                <div className="w-10 h-10 rounded-lg bg-[#6b3417] flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer">
                  f
                </div>
      
                <div className="w-10 h-10 rounded-lg bg-[#6b3417] flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer">
                  ◎
                </div>
      
                <div className="w-10 h-10 rounded-lg bg-[#6b3417] flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer">
                  𝕏
                </div>
      
                <div className="w-10 h-10 rounded-lg bg-[#6b3417] flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer">
                  in
                </div>
              </div>
            </div>
      
            {/* SERVICES */}
            <div>
              <h3 className="text-[18px] font-semibold">
                Services
              </h3>
      
              <div className="flex flex-col gap-4 mt-6 text-[14px] text-[#d7c4b7]">
      
                <a href="#" className="hover:text-white transition-all">
                  Diamond Certification
                </a>
      
                <a href="#" className="hover:text-white transition-all">
                  Gemstone Identification
                </a>
      
                <a href="#" className="hover:text-white transition-all">
                  Color Grading
                </a>
      
                <a href="#" className="hover:text-white transition-all">
                  Custom Reports
                </a>
              </div>
            </div>
      
            {/* COMPANY */}
            <div>
              <h3 className="text-[18px] font-semibold">
                Company
              </h3>
      
              <div className="flex flex-col gap-4 mt-6 text-[14px] text-[#d7c4b7]">
      
                <a href="#" className="hover:text-white transition-all">
                  About
                </a>
      
                <a href="#" className="hover:text-white transition-all">
                  Blogs
                </a>
      
                <a href="#" className="hover:text-white transition-all">
                  Contact
                </a>
      
                <a href="#" className="hover:text-white transition-all">
                  Reviews
                </a>
              </div>
            </div>
      
            {/* CONTACT */}
            <div>
              <h3 className="text-[18px] font-semibold">
                Contact
              </h3>
      
              <div className="mt-6 flex flex-col gap-4 text-[14px] text-[#d7c4b7]">
      
                <p>
                  igcgemcenter@gmail.com
                </p>
      
                <p>
                  +91 1143571032
                </p>
      
                <p className="leading-6">
                  Karol Bagh, New Delhi,
                  India 110005
                </p>
      
                {/* WhatsApp */}
                <a
  href="https://wa.me/919953070803?text=Hello%20IGC,%20I%20want%20to%20know%20about%20gemstone%20certification."
  target="_blank"
  rel="noopener noreferrer"
  className={`mt-3 bg-[#25D366] hover:bg-[#1ebe5a] transition-all text-white py-3 rounded-xl text-[14px] font-medium flex items-center justify-center`}
>
  WhatsApp Us
</a>
              </div>
            </div>
          </div>
      
          {/* Bottom */}
          <div className="border-t border-[#744731] mt-12 pt-6 text-center">
      
            <p className="text-[13px] text-[#cbb6a9]">
              © 2026 GemCertify. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* ================= FLOAT BUTTON ================= */}

      <button className="fixed bottom-6 right-6 w-14 h-14 rounded-2xl bg-[#4b1f08] text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-105 transition-all duration-300">
        <ArrowUp size={18} />
      </button>

      {/* ================= ANIMATIONS ================= */}

      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }

        .animate-slideLeft {
          animation: slideLeft 1s ease forwards;
        }

        .animate-slideRight {
          animation: slideRight 1s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </main>
  );
}