"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Wallet,
  ArrowRight,
  TrendingUp,
  Award,
  Menu,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11">
              <Image
                src="/wananchiLogoGoldNoBg.png"
                alt="Wananchi One Sacco"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-bold text-2xl tracking-tight text-[#174271]">
                Wananchi One
              </span>
              <p className="text-[10px] text-[#D4AF37] font-medium -mt-1">Sacco</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
            <Link href="#about" className="hover:text-[#174271] transition-colors">About Us</Link>
            <Link href="#products" className="hover:text-[#174271] transition-colors">Our Products</Link>
            <Link href="#why-us" className="hover:text-[#174271] transition-colors">Why Wananchi</Link>
            <Button asChild className="bg-[#174271] hover:bg-[#0f2a4d] text-white px-8 rounded-full">
              <Link href="/login">Member Portal</Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div className="bg-white w-4/5 max-w-xs h-full ml-auto p-6" onClick={e => e.stopPropagation()}>
            {/* Mobile menu content */}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-20 pb-24 bg-gradient-to-br from-[#174271] to-[#0f2a4d] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm mb-8 border border-white/20">
            <Award className="w-4 h-4" /> Member-Owned • Community-Driven
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Grow Together.<br />
            Save Smarter.<br />
            <span className="text-[#D4AF37]">Thrive as One.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
            Your trusted Savings and Credit Cooperative. Secure savings, affordable loans,
            and real financial growth for every member.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#D4AF37] hover:bg-[#c19a2f] text-[#174271] text-lg px-10 h-14 rounded-full font-semibold"
            >
              <Link href="/login">
                Join Wananchi One <ArrowRight className="ml-2" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#174271] text-lg h-14 rounded-full"
            >
              <Link href="#products">Explore Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white border-b py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-[#174271]">2,500+</p>
            <p className="text-sm text-slate-600">Active Members</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#174271]">KSh 180M+</p>
            <p className="text-sm text-slate-600">Savings Mobilized</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#174271]">KSh 95M+</p>
            <p className="text-sm text-slate-600">Loans Disbursed</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#174271]">98%</p>
            <p className="text-sm text-slate-600">Member Satisfaction</p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#174271] mb-4">Our Products</h2>
            <p className="text-lg text-slate-600 max-w-md mx-auto">
              Designed to help you save, borrow, and grow responsibly
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: "Savings Accounts",
                desc: "Flexible and high-interest savings options for individuals and groups.",
                color: "text-green-600",
              },
              {
                icon: TrendingUp,
                title: "Affordable Loans",
                desc: "Competitive interest rates with flexible repayment terms.",
                color: "text-blue-600",
              },
              {
                icon: Users,
                title: "Wananchi Ventures",
                desc: "Collective investment opportunities for members.",
                color: "text-amber-600",
              },
            ].map((product, i) => (
              <Card key={i} className="border-0 shadow hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center bg-white shadow mb-8 ${product.color}`}>
                    <product.icon className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-[#174271]">{product.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{product.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold leading-tight mb-8 text-[#174271]">
                Built for Kenyans,<br />by Kenyans
              </h2>
              <div className="space-y-8">
                {[
                  "Transparent operations with full member visibility",
                  "Competitive returns on savings",
                  "Fast and fair loan processing",
                  "Community-focused decision making",
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <p className="text-lg text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <Image
                src="/wananchiLogo.png" // Replace with actual image
                alt="Wananchi One Members"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#174271] py-24 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to start your financial journey?</h2>
          <p className="text-xl text-white/80 mb-10">
            Join thousands of Kenyans building a secure and prosperous future together.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#D4AF37] text-[#174271] hover:bg-[#c19a2f] text-lg px-12 h-16 rounded-full"
          >
            <Link href="/login">Become a Member Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white/80 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
          <p className="text-sm">© {new Date().getFullYear()} Wananchi One Sacco • All Rights Reserved</p>
          {/* <p className="text-xs mt-2">Licensed by the SACCO Societies Regulatory Authority (SASRA)</p> */}
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;