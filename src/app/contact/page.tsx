"use client";

import { type FormEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock3,
  Send,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name')?.toString() ?? '';
    const email = formData.get('email')?.toString() ?? '';
    const subject = formData.get('subject')?.toString() ?? '';
    const message = formData.get('message')?.toString() ?? '';

    const whatsappMessage = `
Hello IGC,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/919953070803?text=${encodedMessage}`,
      "_blank"
    );

    e.currentTarget.reset();
  };

  return (
    <main className="bg-[#f8f6f4] overflow-x-hidden text-[#3d1d10]">
      
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

      {/* HERO */}
      <section className="relative pt-[140px] md:pt-[170px] pb-20 px-5 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,147,101,0.12),transparent_42%)]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-[48px] md:text-[78px] leading-[0.95] font-bold tracking-[-0.06em] bg-gradient-to-r from-[#5b240d] via-[#8c5c39] to-[#c89a74] bg-clip-text text-transparent`}
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`max-w-3xl mx-auto mt-7 text-[15px] md:text-[17px] leading-8 text-[#756459]`}
          >
            Get in touch with our expert team for gemstone
            certification, grading, and consultation services.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative px-5 pb-28">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-8">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-[28px] border border-[#eadfd4] bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.03)]"
            >

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#f5efeb] flex items-center justify-center shrink-0">
                  <MapPin size={28} className="text-[#5b240d]" />
                </div>

                <div>

                  <h3 className="text-[24px] font-bold mb-3">
                    Address
                  </h3>

                  <p className="text-[15px] leading-8 text-[#736156]">
                    3120 Lane No 35,
                    Beadonpura, Karol Bagh,
                    New Delhi, Delhi 110005
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[28px] border border-[#eadfd4] bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.03)]"
            >

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#f5efeb] flex items-center justify-center shrink-0">
                  <Mail size={28} className="text-[#5b240d]" />
                </div>

                <div>

                  <h3 className="text-[24px] font-bold mb-3">
                    Email
                  </h3>

                  <p className="text-[15px] leading-8 text-[#736156]">
                    igcgemcenter@gmail.com
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[28px] border border-[#eadfd4] bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.03)]"
            >

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#f5efeb] flex items-center justify-center shrink-0">
                  <Phone size={28} className="text-[#5b240d]" />
                </div>

                <div>

                  <h3 className="text-[24px] font-bold mb-3">
                    Phone
                  </h3>

                  <p className="text-[15px] leading-8 text-[#736156]">
                    +91 1143571032
                    <br />
                    +91 8010019074
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-[28px] border border-[#eadfd4] bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.03)]"
            >

              <div className="flex items-start gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#f5efeb] flex items-center justify-center shrink-0">
                  <Clock3 size={28} className="text-[#5b240d]" />
                </div>

                <div>

                  <h3 className="text-[24px] font-bold mb-3">
                    Business Hours
                  </h3>

                  <p className="text-[15px] leading-8 text-[#736156]">
                    Monday - Saturday
                    <br />
                    10:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Inquiry */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="rounded-[28px] border border-[#eadfd4] bg-white p-7 shadow-[0_15px_50px_rgba(0,0,0,0.03)]"
            >

              <h3 className="text-[24px] font-bold mb-4">
                Quick Inquiries
              </h3>

              <p className="text-[15px] leading-8 text-[#736156] mb-6">
                Reach out directly for urgent gemstone
                certification questions.
              </p>

              <div className="space-y-4">

                {/* CALL BUTTON */}
                <a
                  href="tel:+911143571032"
                  className={`w-full h-[58px] rounded-2xl border border-[#dbc7b6] bg-white text-[#5b240d] text-[15px] font-semibold flex items-center justify-center gap-3 hover:bg-[#f8f2ed] transition-all`}
                >
                  <Phone size={18} />
                  Call Now
                </a>

                {/* WHATSAPP BUTTON */}
                <a
                  href="https://wa.me/919953070803"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full h-[60px] rounded-2xl bg-gradient-to-r from-[#53d86a] to-[#23d45f] text-white text-[15px] font-semibold flex items-center justify-center gap-3 shadow-[0_15px_35px_rgba(83,216,106,0.28)] hover:scale-[1.01] transition-all`}
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-[34px] border border-[#eadfd4] bg-white p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.04)] h-fit`}
          >

            <h2
              className={`text-[42px] leading-[1] tracking-[-0.04em] font-bold text-[#5b240d] mb-10`}
            >
              Send Us a Message
            </h2>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >

              {/* Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* Name */}
                <div>

                  <label className="block text-[15px] font-semibold mb-3">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className={`w-full h-[60px] rounded-2xl border border-[#d9c9bd] bg-[#fbf8f5] px-5 text-[15px] outline-none focus:border-[#b88a63] focus:ring-4 focus:ring-[#c89a74]/10 transition-all`}
                  />
                </div>

                {/* Email */}
                <div>

                  <label className="block text-[15px] font-semibold mb-3">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className={`w-full h-[60px] rounded-2xl border border-[#d9c9bd] bg-[#fbf8f5] px-5 text-[15px] outline-none focus:border-[#b88a63] focus:ring-4 focus:ring-[#c89a74]/10 transition-all`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>

                <label className="block text-[15px] font-semibold mb-3">
                  Subject *
                </label>

                <input
                  type="text"
                  name="subject"
                  placeholder="How can we help?"
                  required
                  className={`w-full h-[60px] rounded-2xl border border-[#d9c9bd] bg-[#fbf8f5] px-5 text-[15px] outline-none focus:border-[#b88a63] focus:ring-4 focus:ring-[#c89a74]/10 transition-all`}
                />
              </div>

              {/* Message */}
              <div>

                <label className="block text-[15px] font-semibold mb-3">
                  Message *
                </label>

                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  required
                  className={`w-full rounded-2xl border border-[#d9c9bd] bg-[#fbf8f5] px-5 py-4 text-[15px] outline-none resize-none focus:border-[#b88a63] focus:ring-4 focus:ring-[#c89a74]/10 transition-all`}
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className={`w-full h-[62px] rounded-2xl bg-gradient-to-r from-[#4b1f08] to-[#6a2c0d] text-white text-[16px] font-semibold flex items-center justify-center gap-3 shadow-[0_18px_40px_rgba(91,36,13,0.18)] hover:scale-[1.01] transition-all`}
              >
                Send on WhatsApp

                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
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