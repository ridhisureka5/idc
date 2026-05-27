"use client";

import { useState } from "react";
import Link from "next/link";

import Image from "next/image";
import {
  ShieldCheck,
  Lock,
  BadgeCheck,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#f7f4f2] overflow-hidden">
      
      {/* ================= NAVBAR ================= */}
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

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 px-6">
        
        {/* Glow */}
        <div className="absolute w-[550px] h-[550px] rounded-full bg-white blur-3xl opacity-90"></div>

        {/* Center Logo */}
        <div className="relative z-10 w-24 h-24 rounded-full bg-[#f1ebe6] flex items-center justify-center mb-8 shadow-md">
  
  {/* Simple Diamond Logo */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#6e3a18"
    strokeWidth="1.8"
    className="w-12 h-12"
  >
    <path d="M6 3h12l4 5-10 13L2 8l4-5z" />
    <path d="M2 8h20" />
    <path d="M10 3L8 8l4 13 4-13-2-5" />
  </svg>

</div>

       {/* Heading */}
<h1 className="relative z-10 max-w-[1000px] leading-[1.05] font-extrabold tracking-tight">
  
  <span className="block text-[55px] bg-gradient-to-r from-[#5c2b0c] via-[#b8864b] to-[#e0bf86] bg-clip-text text-transparent">
    Trusted Gem Identification &
  </span>

  <span className="block text-[54px] bg-gradient-to-r from-[#7a441e] via-[#c89b5d] to-[#f1d2a2] bg-clip-text text-transparent py-2">
    Diamond Grading Lab
  </span>

</h1>

        {/* Subtitle */}
        <p className="relative z-10 mt-6 text-[18px] text-[#5e5147]">
          ISO certified / EGAC Accredited / Expert Gemologist & Graders
        </p>

        {/* Pills */}
        <div className="relative z-10 flex items-center gap-4 mt-8 flex-wrap justify-center">
          
          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm">
            <ShieldCheck className="text-[#4b1f08]" size={18} />
            <span className="text-[16px] font-medium text-[#2f231b]">
              Certified
            </span>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm">
            <Lock className="text-[#4b1f08]" size={18} />
            <span className="text-[16px] font-medium text-[#2f231b]">
              Secure
            </span>
          </div>

          <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl shadow-sm">
            <BadgeCheck className="text-[#4b1f08]" size={18} />
            <span className="text-[16px] font-medium text-[#2f231b]">
              Authentic
            </span>
          </div>
        </div>

        {/* Button */}
        <Link href="/verify-certificate" className="relative z-10 mt-10 flex items-center gap-3 bg-[#4b1f08] hover:bg-[#351404] transition-all text-white text-[18px] px-8 py-4 rounded-xl shadow-lg">
          Verify Certificate
          <ArrowRight size={20} />
        </Link>

        {/* Scroll Arrow */}
        <div
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          className="relative z-10 mt-14 animate-bounce cursor-pointer"
        >
          <ChevronDown className="text-[#3d3128]" size={30} />
        </div>
      </section>

      {/* ================= SERVICES SECTION ================= */}
     {/* ================= SERVICES SECTION ================= */}

<section className="bg-[#faf8f6] py-20 px-5 md:px-8">
  
  {/* Heading */}
  <div className="text-center">
    <h2 className="text-[34px] md:text-[42px] font-bold text-[#4b1f08]">
      Our Services
    </h2>

    <p className="text-[17px] md:text-[18px] text-[#6b5b52] mt-3">
      Comprehensive gem certification services
    </p>
  </div>

  {/* Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16 max-w-[1300px] mx-auto">

    {/* CARD 1 */}
    <div className="bg-white border border-[#efe7e1] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      {/* SMALL IMAGE */}
      <div className="h-[180px] overflow-hidden">
        <img
          src="/diamond.png"
          alt="Diamond Certification"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="w-14 h-14 rounded-2xl bg-[#f3efec] flex items-center justify-center text-[#4b1f08] text-2xl">
          ✧
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#241813]">
          Diamond Certification
        </h3>

        <p className="mt-3 text-[16px] leading-7 text-[#6d5d55]">
          Professional diamond grading and certification
        </p>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-white border border-[#efe7e1] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      <div className="h-[180px] overflow-hidden">
        <img
          src="/service2.jpeg"
          alt="Gemstone Identification"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="w-14 h-14 rounded-2xl bg-[#f3efec] flex items-center justify-center text-[#4b1f08] text-2xl">
          ◈
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#241813]">
          Gemstone Identification
        </h3>

        <p className="mt-3 text-[16px] leading-7 text-[#6d5d55]">
          Accurate identification of all precious stones
        </p>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-white border border-[#efe7e1] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      <div className="h-[180px] overflow-hidden">
        <img
          src="/service3.jpeg"
          alt="Color Grading"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="w-14 h-14 rounded-2xl bg-[#f3efec] flex items-center justify-center text-[#4b1f08] text-2xl">
          ☆
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#241813]">
          Color Grading
        </h3>

        <p className="mt-3 text-[16px] leading-7 text-[#6d5d55]">
          Expert color analysis and certification
        </p>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="bg-white border border-[#efe7e1] rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

      <div className="h-[180px] overflow-hidden">
        <img
          src="/service4.jpeg"
          alt="Custom Reports"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="w-14 h-14 rounded-2xl bg-[#f3efec] flex items-center justify-center text-[#4b1f08] text-2xl">
          ⌘
        </div>

        <h3 className="mt-6 text-[22px] font-bold text-[#241813]">
          Custom Reports
        </h3>

        <p className="mt-3 text-[16px] leading-7 text-[#6d5d55]">
          Tailored certification for unique gems
        </p>
      </div>
    </div>
  </div>

  {/* BUTTON */}
  <div className="flex justify-center mt-16">
    <Link
      href="/services"
      className="border border-[#c9b7aa] text-[#2b1d15] px-8 py-3 rounded-2xl text-[16px] font-medium hover:bg-white transition-all flex items-center gap-3"
    >
      View All Services
      <ArrowRight size={18} />
    </Link>
  </div>
</section>
{/* ================= GOOGLE REVIEWS SECTION ================= */}



{/* ================= LATEST BLOGS SECTION ================= */}

<section className="bg-[#faf8f6] py-24 px-8">

  {/* Heading */}
  <div className="text-center">
    <h2 className="text-[42px] font-bold text-[#4b1f08]">
      Latest Blogs
    </h2>

    <p className="text-[18px] text-[#6d5d55] mt-3">
      Learn about gems from our experts
    </p>
  </div>

  {/* Blog Cards */}
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16 max-w-[1350px] mx-auto">

    {/* BLOG 1 */}
    <div className="bg-white rounded-[24px] overflow-hidden border border-[#eee5df] shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300 cursor-pointer">

      {/* Blog Image */}
      <div className="h-[260px] overflow-hidden">
        <img
          src="/diamond.png"
          alt="Diamond Guide"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="p-7">
        
        {/* Category */}
        <span className="inline-block bg-[#f4ece6] text-[#6e3a18] text-[13px] font-medium px-4 py-2 rounded-full">
          Gem Education
        </span>

        {/* Title */}
        <h3 className="mt-5 text-[28px] font-bold text-[#3d1d0b] leading-tight">
          How To Identify Real Diamonds Like An Expert
        </h3>

        {/* Description */}
        <p className="mt-4 text-[16px] leading-7 text-[#6d5d55]">
          Learn the professional methods gemologists use to identify
          authentic diamonds and avoid imitations.
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-6">
          
          <span className="text-[14px] text-[#9a8b82]">
            July 2026
          </span>

          <button className="text-[#4b1f08] font-semibold text-[15px] hover:translate-x-1 transition-all">
            Read More →
          </button>
        </div>
      </div>
    </div>

  </div>

  {/* View All Button */}
  <div className="flex justify-center mt-16">
    <Link href="/blogs">
      <button className="border border-[#c9b7aa] text-[#2b1d15] px-8 py-3 rounded-xl text-[16px] font-medium hover:bg-white transition-all flex items-center gap-3">
        View All Blogs
        <ArrowRight size={18} />
      </button>
    </Link>
  </div>
</section>
{/* ================= FOOTER SECTION ================= */}


       {/* ================= CLEAN PREMIUM FOOTER ================= */}

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
    </main>
  );
}