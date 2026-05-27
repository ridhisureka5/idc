"use client";

import {
  Gem,
  ShieldCheck,
  Microscope,
  FileBadge,
  Sparkles,
  Truck,
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

const services = [
  {
    icon: Gem,
    image: "/1.png",
    title: "Diamond Sorting",
    desc: "Professional diamond sorting and grading services using advanced techniques and equipment for accurate classification.",
    points: [
      "Precision Sorting",
      "Advanced Equipment",
      "Quality Classification",
    ],
  },

  {
    icon: Gem,
    image: "/2.png",
    title: "Gems and Jewellery Certification",
    desc: "Comprehensive certification services for all types of gems and jewellery, ensuring authenticity and quality.",
    points: [
      "Authenticity Verification",
      "Quality Reports",
      "Official Certification",
    ],
  },

  {
    icon: Gem,
    image: "/3.png",
    title: "CVD , HPHT & Labgrown Diamonds Testing",
    desc: "Advanced testing is performed to accurately identify whether a diamond is natural, CVD-grown, or HPHT-treated using modern gemological instruments.",
    points: [
      "CVD Detection",
      "HPHT Testing",
      "Labgrown Identification",
    ],
  },

  {
    icon: FileBadge,
    image: "/4.png",
    title: "Gemstone Certification",
    desc: "Comprehensive gemstone certification with detailed analysis and official reports for all types of precious and semi-precious stones.",
    points: [
      "Detailed Reports",
      "Stone Authentication",
      "Quality Analysis",
    ],
  },

  {
    icon: Sparkles,
    image: "/5.png",
    title: "Lab-Grown Testing",
    desc: "Advanced testing to identify and certify laboratory-grown diamonds and gemstones with complete disclosure.",
    points: [
      "Synthetic Detection",
      "Labgrown Verification",
      "Transparency Reports",
    ],
  },

  {
    icon: Sparkles,
    image: "/6.png",
    title: "Uncut Diamond & Polki Certification",
    desc: "This certification verifies the authenticity and natural origin of uncut diamonds and traditional Polki diamonds.",
    points: [
      "Uncut Diamond Analysis",
      "Polki Certification",
      "Natural Origin Verification",
    ],
  },

  {
    icon: Truck,
    image: "/7.png",
    title: "Mobile Lab Service",
    desc: "On-site gemological services for businesses and collectors requiring convenient, professional certification.",
    points: [
      "On-site Testing",
      "Business Services",
      "Fast Processing",
    ],
  },

  {
    icon: Microscope,
    image: "/8.png",
    title: "Advanced Analysis",
    desc: "State-of-the-art analytical services using spectroscopy, microscopy, and advanced gemological instruments.",
    points: [
      "Spectroscopy",
      "Microscopy",
      "High Accuracy",
    ],
  },

  {
    icon: Microscope,
    image: "/9.png",
    title: "Diamond Plotting",
    desc: "Diamond plotting maps internal and external characteristics such as inclusions and blemishes for accurate identification.",
    points: [
      "Inclusion Mapping",
      "Structure Identification",
      "Grading Support",
    ],
  },

  {
    icon: ShieldCheck,
    image: "/10.png",
    title: "Verification Services",
    desc: "Independent verification of existing certificates and expert opinions for buyers and sellers.",
    points: [
      "Certificate Verification",
      "Expert Validation",
      "Buyer Protection",
    ],
  },
];

const process = [
  {
    no: "01",
    title: "Submission",
    desc: "Submit your gemstone to our laboratory",
  },

  {
    no: "02",
    title: "Analysis",
    desc: "Comprehensive examination by expert gemologists",
  },

  {
    no: "03",
    title: "Verification",
    desc: "Quality review and double-check procedures",
  },

  {
    no: "04",
    title: "Certification",
    desc: "Issue of official certificate with full report",
  },
];

export default function ServicesPage() {
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
    <main className="bg-[#f8f6f4] text-[#3e1d10] overflow-hidden">
      {/* NAVBAR */}

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

      {/* MOBILE SIDEBAR */}

      
      {/* HERO */}

      <section className="pt-28 pb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            Our Services
          </h1>

          <p className="text-[15px] text-[#6f5e54] leading-7">
            Professional gemological services tailored to meet your
            needs
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

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
                  scale: 1.01,
                }}
                className="group relative bg-white border border-[#eee2d8] rounded-[26px] overflow-hidden transition-all duration-500 hover:shadow-[0_18px_50px_rgba(90,43,20,0.10)]"
              >
                {/* IMAGE */}
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d1207]/70 via-transparent to-transparent" />

                  {/* ICON */}
                  <div className="absolute bottom-5 left-5 w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg">
                    <Icon
                      size={28}
                      className="text-[#5b2c16]"
                    />
                  </div>
                </div>

                {/* GLOW */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#c79a74]/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition duration-700" />

                {/* CONTENT */}
                <div className="relative z-10 p-9">
                  <h3 className="text-[23px] md:text-[25px] font-semibold leading-snug mb-5">
                    {service.title}
                  </h3>

                  <p className="text-[15px] leading-8 text-[#6e5d54] mb-8">
                    {service.desc}
                  </p>

                  <div className="space-y-3">
                    {service.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 text-[14px] text-[#5f4e45]"
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
            {/* PROCESS */}
      <section className="py-24 px-6 bg-[#fbf9f7]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Process
          </h2>

          <p className="text-[15px] text-[#6f5e54]">
            How we certify your gemstones
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
              whileHover={{
                y: -6,
              }}
              className="relative overflow-hidden bg-white rounded-[24px] border border-[#eee2d8] p-8 text-center hover:shadow-[0_14px_40px_rgba(90,43,20,0.08)] transition-all duration-500"
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c79a74]/0 via-[#c79a74]/0 to-[#c79a74]/5 opacity-0 hover:opacity-100 transition duration-700" />

              <div className="relative z-10">
                {/* NUMBER */}
                <h1 className="text-6xl font-bold text-[#ece4de] mb-6">
                  {item.no}
                </h1>

                {/* TITLE */}
                <h3 className="text-[24px] font-semibold mb-3">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-[14px] leading-7 text-[#6d5a50]">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto bg-white border border-[#eee2d8] rounded-[34px] px-8 md:px-16 py-16 text-center shadow-[0_12px_40px_rgba(0,0,0,0.03)]"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Ready to Certify Your Gems?
          </h2>

          <p className="text-[16px] leading-8 text-[#6e5d54] max-w-3xl mx-auto mb-10">
            Submit your gemstones today and receive professional
            certification from our expert gemologists.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-xl bg-[#5b2c16] text-white text-[15px] font-medium hover:scale-105 hover:shadow-lg transition duration-300"
            >
              Contact Us
            </Link>

            <Link
              href="/services"
              className="px-8 py-3.5 rounded-xl border border-[#d9c6b8] text-[15px] font-medium hover:bg-[#f7f1ec] transition duration-300"
            >
              View Services
            </Link>
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
                Trusted gemstone certification and grading services
                with modern authentication standards and expert
                gemologists.
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