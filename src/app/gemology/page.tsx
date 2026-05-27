"use client";

import {
  Microscope,
  Gem,
  Scale,
  Layers3,
  Globe,
  Sparkles,
  FlaskConical,
  Eye,
  Diamond,
  Menu,
  X,
  Home,
  FileText,
  HelpCircle,
  MessageCircle,
  Video,
  Shield,
  
} from "lucide-react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const stats = [
  {
    number: "12+",
    label: "Years of Experience",
  },

  {
    number: "65K+",
    label: "Gems Certified",
  },

  {
    number: "20+",
    label: "Jewellery Brands",
  },

  {
    number: "99.9%",
    label: "Accuracy Rate",
  },
];

const scienceCards = [
  {
    icon: Microscope,
    image: "/3.png",
    title: "Gem Identification",
    desc: "Determining gemstone type through scientific testing.",

    points: [
      "Refractive Index measurement",
      "Specific Gravity testing",
      "Spectroscopy analysis",
      "Microscopic inclusion examination",
    ],
  },

  {
    icon: Scale,
    image: "/6.png",
    title: "Grading Systems",
    desc: "International standards for gemstone quality.",

    points: [
      "4Cs of Diamonds",
      "Color grading",
      "Clarity assessment",
      "Cut evaluation",
    ],
  },

  {
    icon: Layers3,
    image: "/7.png",
    title: "Gem Formation",
    desc: "Natural geological gemstone formation process.",

    points: [
      "Crystallization",
      "Metamorphic changes",
      "Igneous formation",
      "Millions of years timeline",
    ],
  },

  {
    icon: Globe,
    image: "/10.png",
    title: "Origin Determination",
    desc: "Tracing gemstones to mining sources.",

    points: [
      "Geographic analysis",
      "Chemical fingerprinting",
      "Trace element detection",
      "Spectroscopic signatures",
    ],
  },

  {
    icon: Sparkles,
    image: "/ruby.png" ,
    title: "Treatment Detection",
    desc: "Identifying gemstone enhancements.",

    points: [
      "Heat treatment detection",
      "Diffusion analysis",
      "Fracture filling detection",
      "Surface coating identification",
    ],
  },

  {
    icon: FlaskConical,
    image: "/5.png",
    title: "Laboratory Instruments",
    desc: "Advanced gemology laboratory equipment.",

    points: [
      "Refractometers",
      "Gem microscopes",
      "Polariscopes",
      "Spectrometers",
    ],
  },
];

const diamondCards = [
  {
    title: "Cut",
    subtitle: "Light performance & brilliance",
    tag: "Excellent to Poor",
  },

  {
    title: "Color",
    subtitle: "Color grading scale",
    tag: "D to Z",
  },

  {
    title: "Clarity",
    subtitle: "Inclusion grading",
    tag: "Flawless to I3",
  },

  {
    title: "Carat Weight",
    subtitle: "Diamond size measure",
    tag: "0.01 to 5.00+",
  },
];

const infoSections = [
  {
    icon: Gem,
    title: "What is Gemology?",
    text: "Gemology is the science dealing with natural and artificial gemstone materials. It focuses on gemstone identification, grading, and authenticity verification using scientific testing.",
  },

  {
    icon: Eye,
    title: "Gemstone Identification",
    text: "Gemstone identification involves refractometers, microscopes, spectroscopes, hardness testing, and specific gravity analysis to distinguish natural and treated gemstones.",
  },

  {
    icon: Diamond,
    title: "The Four C's of Diamonds",
    text: "The Four C’s define diamond quality: Cut, Color, Clarity, and Carat Weight. Cut remains the most important factor for brilliance.",
  },

  {
    icon: Layers3,
    title: "Natural vs Lab-Grown Gemstones",
    text: "Natural gemstones form over millions of years while lab-grown stones are created in controlled environments but remain chemically identical.",
  },

  {
    icon: Sparkles,
    title: "Gemstone Treatments",
    text: "Common gemstone treatments include heat treatment, irradiation, diffusion, dyeing, and fracture filling with full disclosure required in ethical gemology.",
  },

  {
    icon: Globe,
    title: "Gemstone Origins and Sources",
    text: "Gemstones are sourced worldwide and origin affects desirability, rarity, and gemstone market value.",
  },
];

export default function GemologyPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: Home },

    { name: "About", href: "/about", icon: FileText },

    { name: "Services", href: "/services", icon: Gem },

    { name: "FAQ", href: "/faq", icon: HelpCircle },

    {
      name: "Verify Certificate",
      href: "/verify-certificate",
      icon: Shield,
    },

    { name: "Gemology", href: "/gemology", icon: Gem },

    { name: "Reviews", href: "/reviews", icon: MessageCircle },

    { name: "Blogs", href: "/blogs", icon: Video },
  ];

  return (
    <main className="bg-[#f8f6f4] text-[#3f1d10] overflow-hidden">
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

      {/* MOBILE SIDEBAR */}

      
      {/* HERO */}

      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,154,116,0.14),transparent_45%)]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto text-center"
        >
          <div className="w-20 h-20 rounded-[28px] bg-gradient-to-br from-[#d7b081] to-[#5a2b14] mx-auto flex items-center justify-center shadow-[0_20px_60px_rgba(90,43,20,0.18)] mb-8">
            <Microscope size={36} className="text-white" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] mb-5">
            Gemology
          </h1>

          <p className="text-[16px] md:text-[18px] text-[#6d5b51]">
            Understanding the Science of Gemstones
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                className="bg-white border border-[#eee3d8] rounded-[24px] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_50px_rgba(90,43,20,0.08)] transition-all duration-500"
              >
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {item.number}
                </h3>

                <p className="text-[14px] text-[#6d5b51]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* INTRO */}

      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden max-w-5xl mx-auto bg-white border border-[#eee3d8] rounded-[36px] px-8 md:px-14 py-14 shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#c89a74]/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <Gem
              size={54}
              className="mx-auto text-[#5a2b14] mb-8"
            />

            <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight mb-8 tracking-[-0.04em]">
              Gemology – The Science of Gemstones
            </h2>

            <p className="text-[16px] md:text-[17px] leading-9 text-center text-[#6d5a50] max-w-4xl mx-auto">
              Gemology is the scientific study of gemstones,
              focusing on their properties, origins,
              classifications, and identification methods. It
              ensures accurate gemstone authentication, grading,
              and ethical trade.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SCIENCE CARDS */}

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {scienceCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -7,
                }}
                className="group relative overflow-hidden bg-white border border-[#eee3d8] rounded-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(90,43,20,0.08)] transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="relative h-[230px] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d1207]/70 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                    <Icon
                      size={30}
                      className="text-[#5a2b14]"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-[30px] font-semibold leading-tight mb-4 tracking-[-0.03em]">
                    {card.title}
                  </h3>

                  <p className="text-[15px] leading-8 text-[#6d5a50] mb-7">
                    {card.desc}
                  </p>

                  <div className="space-y-3">
                    {card.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-[14px] text-[#5e4d43]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ddb788]" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
            {/* INFO SECTIONS */}

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto space-y-8">
          {infoSections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.04,
                }}
                whileHover={{
                  y: -4,
                }}
                className="group relative overflow-hidden rounded-[34px] border border-[#eadfd4] bg-white px-8 md:px-12 py-10 md:py-12 shadow-[0_8px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_60px_rgba(91,44,22,0.08)] transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,154,116,0.13),transparent_35%)] opacity-0 group-hover:opacity-100 transition duration-700" />

                <div className="relative z-10 flex items-start gap-5">
                  
                  {/* ICON */}
                  <div className="w-14 h-14 rounded-2xl bg-[#f6f1ec] flex items-center justify-center shrink-0">
                    <Icon size={30} className="text-[#5a2b14]" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <h2 className="text-[34px] md:text-[42px] font-bold tracking-[-0.03em] leading-tight mb-5">
                      {section.title}
                    </h2>

                    <p className="text-[16px] md:text-[17px] leading-9 text-[#6e5d53]">
                      {section.text}
                    </p>
                  </div>
                </div>

                {/* FOUR C GRID */}
                {section.title === "The Four C's of Diamonds" && (
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    {diamondCards.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          y: -4,
                          scale: 1.01,
                        }}
                        className="group/card relative overflow-hidden rounded-[26px] border border-[#ede3d9] bg-[#fcfaf8] p-8 hover:border-[#e2c8af] transition-all duration-500"
                      >
                        {/* GLOW */}
                        <div className="absolute top-0 right-0 w-36 h-36 bg-[#c89a74]/10 blur-3xl rounded-full opacity-0 group-hover/card:opacity-100 transition duration-700" />

                        <div className="relative z-10">
                          
                          {/* TITLE */}
                          <h4 className="text-[28px] font-semibold mb-3">
                            {item.title}
                          </h4>

                          {/* SUBTITLE */}
                          <p className="text-[15px] text-[#6d5a50] mb-5">
                            {item.subtitle}
                          </p>

                          {/* TAG */}
                          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#f0ebe6] text-[13px] text-[#4c2a1b]">
                            {item.tag}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[40px] max-w-7xl mx-auto"
        >
          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#5b240d] via-[#946843] to-[#d7b07f]" />

          {/* GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_40%)]" />

          <div className="relative z-10 px-8 md:px-16 py-24 text-center">
            
            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-[-0.04em] mb-6">
              Ready to Get Your
              <br className="hidden md:block" />
              Gemstone Certified?
            </h2>

            {/* DESC */}
            <p className="text-[16px] md:text-[18px] text-white/90 leading-8 max-w-3xl mx-auto mb-12">
              Contact us today for professional gemological
              services and gemstone certification with trusted
              expert analysis.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center justify-center gap-5 flex-wrap">

              <Link
                href="/contact"
                className="px-9 py-4 rounded-2xl bg-white text-[#4a1d0e] text-[15px] font-semibold hover:scale-105 hover:shadow-2xl transition duration-300"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="px-9 py-4 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-md text-white text-[15px] font-medium hover:bg-white/25 transition duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}

      <footer className="bg-[#4b1f08] text-white pt-16 pb-8 px-8">
        <div className="max-w-[1350px] mx-auto">

          {/* TOP GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">

            {/* LEFT */}
            <div>

              {/* LOGO */}
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

              {/* DESCRIPTION */}
              <p className="mt-6 text-[14px] leading-7 text-[#d7c4b7] max-w-[340px]">
                Trusted gemstone certification and grading
                services with modern authentication standards
                and expert gemologists.
              </p>

              {/* SOCIALS */}
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

                <a
                  href="#"
                  className="hover:text-white transition-all"
                >
                  Diamond Certification
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all"
                >
                  Gemstone Identification
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all"
                >
                  Color Grading
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all"
                >
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

                <a
                  href="#"
                  className="hover:text-white transition-all"
                >
                  About
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all"
                >
                  Blogs
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="hover:text-white transition-all"
                >
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

                {/* WHATSAPP */}
                <a
                  href="https://wa.me/919953070803?text=Hello%20IGC,%20I%20want%20to%20know%20about%20gemstone%20certification."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 bg-[#25D366] hover:bg-[#1ebe5a] transition-all text-white py-3 rounded-xl text-[14px] font-medium flex items-center justify-center"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
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