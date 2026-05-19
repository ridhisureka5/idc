"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Download,
  Eye,
  ArrowRight,

} from "lucide-react";
import Image from "next/image";

export default function SampleCertificatesPage() {
  const certificates = [
    {
      title: "Natural Diamond Certificate",
      description:
        "Professional grading certificate showing clarity, cut, carat, and authenticity details for premium diamonds.",
      image:
        "/diamond.png",
    },

    {
      title: "Ruby Gemstone Certificate",
      description:
        "Comprehensive gemstone analysis report including origin, treatment details, and quality grading standards.",
      image:
        "/ruby.png",
    },
  ];

  return (
    <main className="bg-[#f8f6f4] overflow-x-hidden text-[#3d1d10] min-h-screen">
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#f7f4f2]/90 backdrop-blur-md border-b border-[#ebe3de]">
                <div className="max-w-[1450px] mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        
                  {/* Logo */}
                  <div className="flex items-center gap-3">
        
                    <div className="w-11 h-11 rounded-xl overflow-hidden">
                      <Image
                        src="/img1.jpeg"
                        alt="IGC Logo"
                        width={44}
                        height={44}
                        className="object-cover"
                      />
                    </div>
        
                    <h1 className="text-[22px] font-bold text-[#9b7147]">
                      IGC
                    </h1>
                  </div>
        
                  {/* Links */}
                  <div className="hidden xl:flex items-center gap-8 text-[14px] text-[#3b3028] font-medium">
        
                    <a href="/" className="hover:text-[#9b7147] transition-all">
                      Home
                    </a>
        
                    <a href="/about" className="hover:text-[#9b7147] transition-all">
                      About
                    </a>
        
                    <a href="/services" className="hover:text-[#9b7147] transition-all">
                      Services
                    </a>
        
                    <a href="/gemology" className="hover:text-[#9b7147] transition-all">
                      Gemology
                    </a>
        
                    <a href="/faq" className="hover:text-[#9b7147] transition-all">
                      FAQ
                    </a>
        
                    <a
                      href="/verify-certificate"
                      className="text-[#9b7147]"
                    >
                      Verify Certificate
                    </a>
        
                    <a href="/reviews" className="hover:text-[#9b7147] transition-all">
                      Reviews
                    </a>
        
                    <a href="/blogs" className="hover:text-[#9b7147] transition-all">
                      Blogs
                    </a>
        
                    <a
                      href="/sample-certificates"
                      className="hover:text-[#9b7147] transition-all"
                    >
                      Sample Certificates
                    </a>
        
                    <a href="/contact" className="hover:text-[#9b7147] transition-all">
                      Contact
                    </a>
                  </div>
                </div>
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
            <BadgeCheck
              size={42}
              className="text-white"
            />
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-[48px] md:text-[78px] leading-[0.95] font-bold tracking-[-0.06em] bg-gradient-to-r from-[#5b240d] via-[#8c5c39] to-[#c89a74] bg-clip-text text-transparent`}
          >
            Sample Certificates
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`max-w-3xl mx-auto mt-7 text-[15px] md:text-[17px] leading-8 text-[#756459]`}
          >
            Explore premium gemstone certification samples and
            understand the quality standards used in our grading process.
          </motion.p>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section className="relative px-5 pb-28">

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (
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
              <div className="relative overflow-hidden h-[340px] bg-[#f4efea]">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105`}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Actions */}
                <div className="absolute top-5 right-5 flex items-center gap-3">

                  <button
                    className={`w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:scale-105 transition-all`}
                  >
                    <Eye
                      size={18}
                      className="text-[#5b240d]"
                    />
                  </button>

                  <button
                    className={`w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center hover:scale-105 transition-all`}
                  >
                    <Download
                      size={18}
                      className="text-[#5b240d]"
                    />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">

                {/* Title */}
                <h2
                  className={`text-[30px] leading-[1.1] tracking-[-0.04em] font-bold text-[#441d0c] mb-4`}
                >
                  {certificate.title}
                </h2>

                {/* Description */}
                <p
                  className={`text-[14px] md:text-[15px] leading-7 text-[#736156] mb-7`}
                >
                  {certificate.description}
                </p>

                {/* Button */}
                <button
                  className={`inline-flex items-center gap-2 text-[#5b240d] text-[14px] font-semibold group-hover:gap-3 transition-all`}
                >
                  View Certificate

                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
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

            <div
              className={`w-16 h-16 mx-auto mb-7 rounded-2xl bg-[#faf3ed] flex items-center justify-center`}
            >
              <BadgeCheck
                size={28}
                className="text-[#5b240d]"
              />
            </div>

            <h2
              className={`text-[34px] md:text-[52px] leading-[0.95] tracking-[-0.05em] font-bold mb-6 bg-gradient-to-r from-[#5b240d] to-[#b88a63] bg-clip-text text-transparent`}
            >
              Certified With Precision
            </h2>

            <p
              className={`max-w-3xl mx-auto text-[15px] md:text-[17px] leading-8 text-[#6d5a50]`}
            >
              Every gemstone certificate is created using professional
              grading standards and advanced authentication methods.
            </p>
          </div>
        </motion.div>
      </section>
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