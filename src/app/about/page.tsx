"use client";
import { useState } from "react";

import Image from "next/image";
import {
  Gem,
  Globe,
  Users,
  BadgeCheck,
  Target,
  Award,
  Clock3,
  Shield,
  ArrowUp,
  Menu,
  X,
} from "lucide-react";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#f7f4f2] overflow-hidden">

      {/* ================= HERO ================= */}
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

      <section className="pt-[150px] pb-[110px] px-6 text-center relative">

        <div className="absolute inset-0 bg-gradient-to-b from-[#efe7e1] via-[#f7f4f2] to-[#f7f4f2]" />

        <div className="relative z-10 max-w-[900px] mx-auto animate-fadeUp">

          <h1 className="text-[42px] md:text-[70px] leading-[1.1] font-bold tracking-[-2px] text-[#8b603d]">
            About GEM CERT
          </h1>

          <p className="mt-6 text-[15px] md:text-[20px] text-[#6d5d55] leading-8">
            Your trusted partner in gemstone certification,
            authenticity verification, and precision grading.
          </p>
        </div>
      </section>

      {/* ================= COMPANY PROFILE ================= */}

      <section className="px-6 pb-24">

        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="animate-slideLeft">

            <h2 className="text-[36px] md:text-[48px] font-bold tracking-[-1px] text-[#3f1f10]">
              Company Profile
            </h2>

            <div className="mt-8 space-y-6 text-[16px] leading-9 text-[#655750]">

              <p>
                At IGC Lab&apos;s, we are committed to excellence in gemstone
                analysis and certification. As a premier gemological laboratory,
                we specialize in the testing, grading, and authentication of
                diamonds, colored gemstones, and jewelry.
              </p>

              <p>
                Our highly trained gemologists utilize advanced technology and
                industry-approved methodologies to provide precise and reliable
                results with complete transparency and trust.
              </p>

              <p>
                Whether you need diamond grading, gemstone identification,
                or authenticity verification, IGC Lab&apos;s is your trusted
                gemology partner.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-10 space-y-3 text-[15px] text-[#5d514a]">

              <p>
                <span className="font-semibold text-[#3f1f10]">
                  Location:
                </span>{" "}
                Building No 3120, Lane No 35, Beadonpura,
                Karol Bagh Delhi - 110005
              </p>

              <p>
                <span className="font-semibold text-[#3f1f10]">
                  Contact:
                </span>{" "}
                9953070803 , 8010019074
              </p>

              <p>
                <span className="font-semibold text-[#3f1f10]">
                  Email:
                </span>{" "}
                igcgemcenter@gmail.com
              </p>

              <p>
                <span className="font-semibold text-[#3f1f10]">
                  Website:
                </span>{" "}
                internationalgemologicalcenter.com
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="animate-slideRight">

            <div className="bg-white border border-[#eadfd8] rounded-[32px] p-10 md:p-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:-translate-y-2 transition-all duration-500">

              <div className="flex justify-center">

                <div className="w-[150px] h-[150px] rounded-full bg-[#f7f0ea] flex items-center justify-center animate-float">

                  <Gem
                    size={90}
                    strokeWidth={1.6}
                    className="text-[#4b1f08]"
                  />
                </div>
              </div>

              <h3 className="mt-10 text-center text-[28px] md:text-[40px] font-bold tracking-[-1px]">

                <span className="bg-gradient-to-r from-[#5f2d13] to-[#c59661] bg-clip-text text-transparent">
                  Expertise. Precision. Trust.
                </span>
              </h3>

              <p className="mt-5 text-center text-[15px] leading-8 text-[#6d5d55] max-w-[480px] mx-auto">
                Premium gemstone certification backed by years of expertise,
                advanced gemological techniques, and globally trusted
                authentication standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}

      <section className="px-6 pb-28">

        <div className="max-w-[1320px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              icon: <Gem size={30} strokeWidth={1.8} />,
              value: "12+",
              label: "Years Experience",
            },
            {
              icon: <Globe size={30} strokeWidth={1.8} />,
              value: "65K+",
              label: "Certificates Issued",
            },
            {
              icon: <Users size={30} strokeWidth={1.8} />,
              value: "25+",
              label: "Expert Gemologists",
            },
            {
              icon: <BadgeCheck size={30} strokeWidth={1.8} />,
              value: "99%",
              label: "Client Satisfaction",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#eadfd8] rounded-[28px] p-8 text-center hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500 animate-fadeUp"
            >
              <div className="flex justify-center text-[#4b1f08]">
                {item.icon}
              </div>

              <h3 className="mt-5 text-[40px] font-bold text-[#4b1f08]">
                {item.value}
              </h3>

              <p className="mt-2 text-[15px] text-[#685951]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MISSION VISION ================= */}

      <section className="px-6 pb-28">

        <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {[
            {
              icon: <Target size={38} strokeWidth={1.8} />,
              title: "Our Mission",
              desc:
                "To provide accurate, reliable, and trustworthy gemstone certification services that empower clients to make informed decisions with confidence.",
            },
            {
              icon: <Award size={38} strokeWidth={1.8} />,
              title: "Our Vision",
              desc:
                "To be the global leader in gemstone certification, setting the standard for accuracy, reliability, and customer trust worldwide.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#eadfd8] rounded-[30px] p-10 md:p-12 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
            >
              <div className="text-[#4b1f08]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-[34px] font-bold tracking-[-1px] text-[#3f1f10]">
                {item.title}
              </h3>

              <p className="mt-5 text-[16px] leading-9 text-[#665851]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}

      <section className="px-6 pb-32">

        <div className="text-center">

          <h2 className="text-[42px] md:text-[56px] font-bold tracking-[-2px] text-[#4b1f08]">
            Our Core Values
          </h2>

          <p className="mt-4 text-[16px] text-[#6d5d55]">
            What defines our commitment
          </p>
        </div>

        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">

          {[
            {
              icon: <Shield size={38} strokeWidth={1.8} />,
              title: "Integrity",
              desc: "Honest and ethical in all our dealings",
            },
            {
              icon: <Award size={38} strokeWidth={1.8} />,
              title: "Excellence",
              desc: "Committed to the highest quality standards",
            },
            {
              icon: <Users size={38} strokeWidth={1.8} />,
              title: "Expertise",
              desc: "Skilled professionals you can trust",
            },
            {
              icon: <Clock3 size={38} strokeWidth={1.8} />,
              title: "Efficiency",
              desc: "Timely and reliable service delivery",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#eadfd8] rounded-[28px] p-10 text-center hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)] transition-all duration-500"
            >
              <div className="flex justify-center text-[#4b1f08]">
                {item.icon}
              </div>

              <h3 className="mt-6 text-[30px] font-bold text-[#3f1f10]">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-[#6d5d55]">
                {item.desc}
              </p>
            </div>
          ))}
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

      {/* ================= SCROLL BUTTON ================= */}

      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-2xl bg-[#4b1f08] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
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

        .animate-float {
          animation: float 4s ease-in-out infinite;
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

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </main>
  );
}