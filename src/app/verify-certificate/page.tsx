"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  ExternalLink,
  BadgeCheck,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function VerifyCertificatePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="bg-[#f8f6f4] overflow-x-hidden text-[#3d1d10] min-h-screen">

      {/* NAVBAR */}
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

      {/* HERO SECTION */}
      <section className="relative pt-[140px] md:pt-[180px] pb-24 px-5 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,147,101,0.12),transparent_42%)]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e7d8cd] bg-white/80 backdrop-blur-md text-[#7b4a2d] text-[13px] font-medium shadow-sm mb-7"
          >
            <BadgeCheck size={16} />
            Trusted Certificate Authentication
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[42px] md:text-[68px] leading-[0.95] font-bold tracking-[-0.06em] bg-gradient-to-r from-[#5b240d] via-[#8c5c39] to-[#c89a74] bg-clip-text text-transparent"
          >
            Verify Certificate
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mx-auto mt-6 text-[15px] md:text-[18px] leading-8 text-[#756459]"
          >
            Enter your certificate number to instantly verify gemstone
            authenticity and grading details.
          </motion.p>

          {/* SEARCH BOX */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-14"
          >

            <div
              className={`relative max-w-3xl mx-auto rounded-[30px] border border-[#eadfd5] bg-white/85 backdrop-blur-2xl shadow-[0_25px_70px_rgba(91,36,13,0.07)] p-4 md:p-5`}
            >

              {/* Glow */}
              <div className="absolute inset-0 rounded-[30px] bg-[radial-gradient(circle_at_top_right,rgba(200,154,116,0.10),transparent_40%)]" />

              <div className="relative z-10 flex flex-col md:flex-row items-stretch gap-3">

                {/* Input */}
                <div
                  className={`flex-1 flex items-center h-[60px] rounded-[20px] border border-[#e5d6ca] bg-[#faf7f4] px-5 transition-all duration-300 focus-within:border-[#b98b67] focus-within:ring-4 focus-within:ring-[#c89a74]/10`}
                >

                  <Search
                    size={20}
                    className="text-[#8c7567] mr-3 shrink-0"
                  />

                  <input
                    type="text"
                    maxLength={5}
                    placeholder="Enter Certificate ID"
                    className={`w-full bg-transparent outline-none text-[15px] md:text-[16px] font-medium text-[#4e2412] placeholder:text-[#a08b7e] tracking-[0.08em]`}
                  />
                </div>

                {/* Button */}
                <button
                  className={`h-[60px] px-8 rounded-[20px] bg-gradient-to-r from-[#5b240d] via-[#7b4a2d] to-[#b28763] text-white text-[15px] font-semibold flex items-center justify-center gap-2 shadow-[0_12px_30px_rgba(91,36,13,0.18)] hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(91,36,13,0.22)] transition-all duration-300 whitespace-nowrap`}
                >
                  Verify Now
                  <Search size={17} />
                </button>

              </div>

              {/* Bottom text */}
              <p className="text-[12px] md:text-[13px] text-[#8f7d71] mt-4 text-left pl-1">
                Enter the certificate number printed on your gemstone report.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="relative px-5 pb-28">

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">

          {[
            {
              icon: ShieldCheck,
              title: "Secure Verification",
              text: "Advanced certificate protection and trusted authentication standards.",
            },

            {
              icon: Search,
              title: "Instant Results",
              text: "Verify reports and gemstone authenticity within seconds.",
            },

            {
              icon: ExternalLink,
              title: "24/7 Access",
              text: "Access verification services anytime from anywhere.",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className={`relative overflow-hidden rounded-[30px] border border-[#eadfd4] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)] px-7 py-10 text-center group`}
              >

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(201,154,116,0.14),transparent_60%)]" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="w-20 h-20 rounded-[24px] bg-[#faf4ef] flex items-center justify-center mx-auto mb-7 shadow-inner">

                    <Icon
                      size={36}
                      className="text-[#5b240d]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[24px] font-bold tracking-[-0.03em] mb-4">
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="text-[15px] leading-7 text-[#6d5a50] max-w-[280px] mx-auto">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-28">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`max-w-5xl mx-auto relative overflow-hidden rounded-[38px] border border-[#eadfd4] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.04)] px-7 md:px-14 py-16 text-center`}
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(201,154,116,0.12),transparent_65%)]" />

          <div className="relative z-10">

            <h2 className="text-[36px] md:text-[56px] leading-[0.95] tracking-[-0.05em] font-bold mb-7 bg-gradient-to-r from-[#5b240d] to-[#b88a63] bg-clip-text text-transparent">
              Need Help Verifying?
            </h2>

            <p className="max-w-3xl mx-auto text-[16px] md:text-[18px] leading-8 text-[#6d5a50] mb-10">
              Our gemstone experts are here to assist with certificate
              authentication, report validation, and grading verification.
            </p>

            <div className="flex items-center justify-center gap-4 flex-wrap">

              <Link
                href="/contact"
                className={`px-8 py-4 rounded-2xl bg-gradient-to-r from-[#5b240d] to-[#7a4224] text-white text-[15px] font-semibold shadow-[0_10px_30px_rgba(91,36,13,0.2)] hover:scale-105 transition-all duration-300`}
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className={`px-8 py-4 rounded-2xl border border-[#dbc7b6] bg-white text-[#5b240d] text-[15px] font-medium hover:bg-[#f8f2ed] hover:scale-105 transition-all duration-300`}
              >
                Our Services
              </Link>

            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#4b1f08] text-white pt-16 pb-8 px-6">

        <div className="max-w-[1350px] mx-auto">

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">

            {/* Left */}
            <div>

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

              <p className="mt-6 text-[14px] leading-7 text-[#d7c4b7] max-w-[340px]">
                Trusted gemstone certification and grading services
                with modern authentication standards and expert
                gemologists.
              </p>
            </div>

            {/* Services */}
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

            {/* Company */}
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

            {/* Contact */}
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