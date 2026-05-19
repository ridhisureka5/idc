"use client";

import { useState } from "react";
import {
  HelpCircle,
  Clock3,
  Package,
  ShieldCheck,
  Truck,
  ChevronDown,
  ChevronUp,
  
} from "lucide-react";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqs = [
  {
    icon: Clock3,
    question: "How long does certification take?",
    answer:
    "The certification process typically takes 3-5 business days from the time we receive your gemstone. This timeline allows our expert gemologists to conduct thorough testing and analysis. For express service, we offer 24-hour certification at an additional fee. You will receive email notifications at each stage of the certification process, keeping you informed throughout.",
  },
  {
    icon: Package,
    question: "How to send my gemstone?",
    answer:
    "Sending your gemstone to us is simple and secure. First, complete our online submission form with details about your gemstone. Once you receive your unique submission ID, carefully package your gemstone in protective materials. Include the submission ID in your package and send it via any reputable courier service to our address: No 35, 3120 Lane, Beadonpura, Karol Bagh, New Delhi, Delhi 110005. We recommend using tracking services and insuring your package for its full value.",
  },
  {
    icon: ShieldCheck,
    question: "What tests are included?",
    answer:
     "Our comprehensive certification includes multiple advanced tests performed by certified gemologists. These include: 1) Visual inspection under 10x-30x magnification, 2) Refractive index testing to determine gemstone identity, 3) Specific gravity measurements, 4) Spectroscopic analysis for detailed chemical composition, 5) Fluorescence testing under UV light, 6) Treatment detection tests, 7) Color grading using master stones, 8) Carat weight measurement on calibrated scales. Your certificate will detail all findings with photographic documentation..",
  },
  {
    icon: Truck,
    question: "Is courier insured?",
    answer:
    " Yes! We take the safety of your precious gemstones seriously. All outbound shipments are fully insured for the full value of your gemstone. We use premium courier services with proven track records for handling high-value items. You will receive tracking information immediately upon dispatch, allowing you to monitor your gemstone's journey back to you. For high-value items over ₹1,00,000, we use armored transport services for enhanced security."
  },
  {
    icon: HelpCircle,
    question: "Can I track my certificate?",
    answer:
     " Absolutely! You can track your certificate through our online portal 24/7. Simply enter your unique submission ID on our verification page to view real-time status updates. The tracking system shows: receipt confirmation, current testing stage, quality review status, and dispatch information. You will also receive SMS and email notifications at key milestones. For personalized updates, our customer service team is available during business hours to provide detailed progress reports."
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-[#f8f6f4] overflow-hidden text-[#3f1d10]">
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#f7f4f2]/90 backdrop-blur-md border-b border-[#ebe3de]">
                            <div className="flex items-center justify-between px-12 py-4">
                              
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
                    
                              {/* Nav Links */}
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
                            </div>
                          </nav>
                    
      {/* HERO */}
      <section className="relative pt-28 md:pt-32 pb-24 px-6">
        {/* background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,154,116,0.18),transparent_45%)]" />

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-5xl mx-auto text-center"
        >
          {/* icon */}
          <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-[#5b240d] via-[#9a6c45] to-[#ddb987] flex items-center justify-center mx-auto shadow-[0_20px_60px_rgba(91,36,13,0.18)] mb-10">
            <HelpCircle size={42} className="text-white" />
          </div>

          {/* heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] mb-8 bg-gradient-to-r from-[#5a2b14] to-[#c19365] bg-clip-text text-transparent">
            Frequently Asked <br />
            Questions
          </h1>

          {/* subtext */}
          <p className="max-w-3xl mx-auto text-[17px] md:text-[20px] leading-9 text-[#6d5a50]">
            Find answers to common questions about gemstone certification,
            testing processes, reports, courier safety, and professional
            gemological services.
          </p>
        </motion.div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[38px] border border-[#eadfd4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
          >
            {/* glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#c89a74]/10 blur-3xl rounded-full" />

            <div className="relative z-10">
              {faqs.map((faq, index) => {
                const Icon = faq.icon;
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`px-7 md:px-10 py-7 transition-all duration-300 ${
                      index !== faqs.length - 1
                        ? "border-b border-[#f1e7dc]"
                        : ""
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between gap-5 text-left"
                    >
                      <div className="flex items-center gap-5">
                        {/* icon */}
                        <div className="w-14 h-14 rounded-2xl bg-[#f7f1eb] flex items-center justify-center shrink-0">
                          <Icon
                            size={26}
                            className="text-[#5a2b14]"
                          />
                        </div>

                        {/* question */}
                        <h3 className="text-[18px] md:text-[18px] font-semibold tracking-[-0.03em]">
                          {faq.question}
                        </h3>
                      </div>

                      {/* arrow */}
                      <div className="text-[#6f5d52]">
                        {isOpen ? (
                          <ChevronUp size={24} />
                        ) : (
                          <ChevronDown size={24} />
                        )}
                      </div>
                    </button>

                    {/* answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{
                            opacity: 0,
                            height: 0,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[74px] pr-4 pt-7">
                            <p className="text-[16px] md:text-[18px] leading-10 text-[#6d5b50] max-w-4xl">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden max-w-5xl mx-auto rounded-[40px] border border-[#eadfd4] bg-white shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
        >
          {/* background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,154,116,0.14),transparent_45%)]" />

          <div className="relative z-10 px-8 md:px-16 py-20 text-center">
            <h2 className="text-4xl md:text-3xl font-bold tracking-[-0.04em] mb-6">
              Still Have Questions?
            </h2>

            <p className="max-w-3xl mx-auto text-[16px] md:text-[18px] leading-9 text-[#6d5a50] mb-12">
              Our expert team is here to help! Feel free to reach out if you
              have any specific queries about gemstone certification, testing,
              or personalized guidance.
            </p>

            <div className="flex items-center justify-center gap-5 flex-wrap mt-10">
  <Link
    href="/contact"
    className="inline-flex items-center justify-center px-9 py-4 rounded-2xl 
    bg-gradient-to-r from-[#5b240d] to-[#7a4224] 
    text-white text-[15px] font-semibold 
    shadow-[0_10px_30px_rgba(91,36,13,0.2)] 
    hover:scale-105 hover:shadow-[0_14px_40px_rgba(91,36,13,0.28)] 
    transition-all duration-300"
  >
    Contact Us
  </Link>

  <Link
    href="/services"
    className="inline-flex items-center justify-center px-9 py-4 rounded-2xl 
    border border-[#dbc7b6] bg-white 
    text-[#5b240d] text-[15px] font-medium 
    hover:bg-[#f8f2ed] hover:scale-105 
    transition-all duration-300"
  >
    View Our Services
  </Link>
</div>
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