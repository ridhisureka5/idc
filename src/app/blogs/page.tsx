"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Video,
  Clock3,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export default function BlogsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const blogs = [
    {
      title: "How To Identify A Real Diamond",
      description:
        "Learn the essential techniques used by gemologists to identify authentic diamonds and avoid common gemstone scams.",
      category: "Diamond Guide",
      time: "5 min read",
      image:
        "/diamond.png",
    },

    {
      title: "Ruby vs Sapphire — Key Differences",
      description:
        "Understand the visual and structural differences between rubies and sapphires with expert gemstone insights.",
      category: "Gemstone Education",
      time: "4 min read",
      image:
        "/sapphire.png",
    },
  ];

  return (
    <main className="bg-[#f8f6f4] overflow-x-hidden text-[#3d1d10]">
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

      {/* HERO */}
      <section className="relative pt-[140px] md:pt-[170px] pb-24 px-5 overflow-hidden">

        {/* Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,147,101,0.12),transparent_42%)]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-[90px] h-[90px] mx-auto rounded-[28px] bg-gradient-to-br from-[#4b1f08] to-[#d0a879] flex items-center justify-center shadow-[0_25px_60px_rgba(91,36,13,0.18)] mb-10`}
          >
            <Video
              size={42}
              className="text-white"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-[46px] md:text-[76px] leading-[0.95] font-bold tracking-[-0.06em] bg-gradient-to-r from-[#5b240d] via-[#8c5c39] to-[#c89a74] bg-clip-text text-transparent`}
          >
            Gem Blogs
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`max-w-3xl mx-auto mt-7 text-[15px] md:text-[17px] leading-8 text-[#756459]`}
          >
            Learn about gemstones, jewelry care, certification,
            and gemology through expert educational content.
          </motion.p>
        </div>
      </section>

      {/* BLOGS */}
      <section className="relative px-5 pb-28">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {blogs.map((blog, index) => (
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
              className={`group overflow-hidden rounded-[30px] border border-[#eadfd4] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.04)]`}
            >

              {/* Image */}
              <div className="relative overflow-hidden h-[260px]">

                <img
                  src={blog.image}
                  alt={blog.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Category */}
                <div
                  className={`absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-[#5b240d] text-[12px] font-semibold`}
                >
                  {blog.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Meta */}
                <div className="flex items-center gap-2 text-[#8b7668] text-[13px] mb-4">

                  <Clock3 size={14} />

                  <span>
                    {blog.time}
                  </span>
                </div>

                {/* Title */}
                <h2
                  className={`text-[28px] leading-[1.15] tracking-[-0.04em] font-bold text-[#441d0c] mb-4`}
                >
                  {blog.title}
                </h2>

                {/* Description */}
                <p
                  className={`text-[14px] md:text-[15px] leading-7 text-[#736156] mb-7`}
                >
                  {blog.description}
                </p>

                {/* Button */}
                <button
                  className={`inline-flex items-center gap-2 text-[#5b240d] text-[14px] font-semibold group-hover:gap-3 transition-all`}
                >
                  Read More

                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
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

            <div
              className={`w-16 h-16 mx-auto mb-7 rounded-2xl bg-[#faf3ed] flex items-center justify-center`}
            >
              <Video
                size={28}
                className="text-[#5b240d]"
              />
            </div>

            <h2
              className={`text-[34px] md:text-[52px] leading-[0.95] tracking-[-0.05em] font-bold mb-6 bg-gradient-to-r from-[#5b240d] to-[#b88a63] bg-clip-text text-transparent`}
            >
              More Blogs Coming Soon
            </h2>

            <p
              className={`max-w-3xl mx-auto text-[15px] md:text-[17px] leading-8 text-[#6d5a50]`}
            >
              Our gemologists are preparing more educational gemstone
              and jewelry care content to help you learn and explore.
            </p>
          </div>
        </motion.div>
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
    </main>
  );
}