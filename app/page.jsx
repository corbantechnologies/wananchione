"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Wallet,
  Menu as MenuIcon,
  X as XIcon,
  ArrowRight,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Globe,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden font-sans">
      {/* Subtle Background Pattern */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
      // style={{
      //   backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
      // }}
      ></div>

      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="relative h-10 w-10">
              <Image
                src="/wananchiLogoGoldNoBg.png"
                alt="Wananchi One Sacco"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg text-[#D4AF37] ">
              Wananchi One
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="#features"
              className="text-[13px] font-bold  text-black hover:text-[#D4AF37] transition-colors"
            >
              Infrastructure
            </Link>
            <Link
              href="#about"
              className="text-[13px] font-bold  text-black hover:text-[#D4AF37] transition-colors"
            >
              Governance
            </Link>
            <Button
              asChild
              className="bg-[#D4AF37] hover:bg-[#b8962d] text-white px-8 rounded font-bold text-[13px] shadow-sm transition-all shadow-[#D4AF37]/10 "
            >
              <Link href="/login">Secure Access</Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="h-6 w-6 text-[#D4AF37]" />
          </Button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[280px] bg-white shadow transform transition-transform duration-300 ease-out border-l border-slate-100 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-between items-center border-b border-slate-50">
            <span className="font-bold text-lg text-[#D4AF37]">NAVIGATION</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col p-4 gap-2">
            <Link
              href="#features"
              className="px-4 py-3 rounded hover:bg-slate-50 text-[14px] font-bold text-black transition-colors "
              onClick={() => setIsMenuOpen(false)}
            >
              Infrastructure
            </Link>
            <Link
              href="#about"
              className="px-4 py-3 rounded hover:bg-slate-50 text-[14px] font-bold text-black transition-colors "
              onClick={() => setIsMenuOpen(false)}
            >
              Governance
            </Link>
            <div className="pt-6 mt-4 border-t border-slate-50">
              <Button
                asChild
                className="w-full bg-[#D4AF37] text-white rounded h-12 font-bold shadow-md "
              >
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                  Access Portal
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/20 backdrop-blur-xs z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 border-b border-slate-50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded bg-[#D4AF37]/5 text-[#D4AF37] text-[11px] font-bold  mb-12 border border-[#D4AF37]/10">
            <Lock className="w-3 h-3" />
            <span>Institutional-Grade Financial Ecosystem</span>
          </div>

          <h1 className="text-lg md:text-lg font-bold mb-10 text-black ">
            Precision <br className="hidden lg:block" />
            <span className="text-[#D4AF37]">Infrastructure</span>
          </h1>

          <p className="text-lg text-black mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
            Strategic liquidity, precise capital deployment, and institutional-grade
            governance designed exclusively for elite professionals and high-level
            decision makers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              asChild
              className="h-16 px-12 rounded text-[16px] font-bold bg-[#D4AF37] hover:bg-[#b8962d] text-white shadow shadow-[#D4AF37] transition-all "
            >
              <Link href="/login">
                Portal entry
                <ArrowRight className="ml-3 w-5 h-5 opacity-70" />
              </Link>
            </Button>
            <Link
              href="#features"
              className="text-[14px] font-bold text-black hover:text-[#D4AF37] transition-colors h-16 flex items-center px-8"
            >
              System Overview
            </Link>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="features" className="py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-xl">
              <h2 className="text-lg font-bold text-black mb-8  leading-none">
                Enterprise <br />
                Components
              </h2>
              <p className="text-black font-medium text-lg leading-relaxed">
                Our infrastructure is built on precision-engineered components
                to facilitate collective prosperity through institutional-grade
                transparency.
              </p>
            </div>
            <div className="h-[2px] w-32 bg-[#D4AF37] mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Wallet,
                title: "Institutional Liquidity",
                desc: "Sophisticated capital growth structures designed for high-yield wealth preservation.",
                points: [
                  "Strategic Reserves",
                  "Tiered Growth Assets",
                  "Optimized Yields",
                ],
              },
              {
                icon: ShieldCheck,
                title: "Capital Infrastructure",
                desc: "Low-interest credit lines matched to strategic professional and capital investment needs.",
                points: [
                  "Corporate Rate Match",
                  "Real-time Settlement",
                  "Transparent Governance",
                ],
              },
              {
                icon: Users,
                title: "Executive Governance",
                desc: "A governed network of peers committed to professional excellence and shared fiscal integrity.",
                points: [
                  "Professional Tiers",
                  "Peer Transparency",
                  "Shared Prosperity",
                ],
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className="group border border-slate-100 bg-white hover:border-[#D4AF37]/20 hover:shadow transition-all duration-500 rounded p-4"
              >
                <CardHeader className="p-6">
                  <div className="w-14 h-14 rounded bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500 text-[#D4AF37]">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-lg font-bold text-black mb-5  leading-none">
                    {feature.title}
                  </CardTitle>
                  <p className="text-black text-[16px] leading-relaxed mb-8 font-medium">
                    {feature.desc}
                  </p>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <ul className="space-y-4 border-t border-slate-50 pt-8">
                    {feature.points.map((pt, pidx) => (
                      <li
                        key={pidx}
                        className="flex items-center gap-3 text-[14px] font-bold  text-black"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] opacity-60" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section id="about" className="py-32 bg-slate-50/50 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-[11px] font-bold text-[#D4AF37]  mb-8 border-l-4 border-[#D4AF37] pl-6 leading-none">
                Enterprise Standards
              </div>
              <h2 className="text-lg font-bold text-black mb-10 leading-tight ">
                The Gold Standard <br />
                in Governance
              </h2>
              <p className="text-lg text-black leading-relaxed font-medium mb-12">
                Wananchi One operates at the intersection of technological
                transparency and institutional-grade cooperative finance. Our mandate
                is to build a resilient financial base for high-level decision
                makers who demand precision in every facet of their wealth management.
              </p>
              <div className="flex items-center gap-6 py-4 px-8 bg-white border border-slate-100 rounded shadow w-fit">
                <span className="text-[#D4AF37] font-bold text-lg italic ">
                  Wananchi One
                </span>
                <span className="text-black">|</span>
                <span className="text-black font-bold text-[13px]  whitespace-nowrap">
                  Excellence • Transparency • Governance
                </span>
              </div>
            </div>
            <div className="relative aspect-square bg-white rounded flex items-center justify-center border border-slate-100 shadow overflow-hidden">
              <div className="absolute inset-0 opacity-[0.05]">
                <Globe className="w-full h-full text-[#D4AF37] p-20" />
              </div>
              <div className="text-center p-12 relative z-10">
                <span className="text-lg font-bold text-[#D4AF37] block mb-4 ">
                  99.8%
                </span>
                <span className="text-black font-bold  text-[13px] leading-relaxed block max-w-[200px] mx-auto">
                  Institutional Satisfaction Index
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#0B0E14] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <Building2 className="absolute -right-1/4 -bottom-1/4 w-[800px] h-[800px]" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-lg font-bold mb-10  leading-none">
            Scale your <br />
            <span className="text-[#D4AF37]">Capital Infrastructure</span>
          </h2>
          <p className="text-lg text-black mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
            Join a governed community of professionals securing their financial
            future through precision-engineered liquidity and credit programs.
          </p>
          <Button
            asChild
            className="h-20 px-16 rounded text-[18px] bg-[#D4AF37] text-white hover:bg-[#b8962d] shadow shadow-[#D4AF37]/20 transition-all font-bold  active:scale-95"
          >
            <Link href="/login">Execute Membership Entry</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 border-t border-slate-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-16 mb-20">
            <div className="max-w-xs text-center md:text-left">
              <div className="flex items-center gap-4 mb-8 justify-center md:justify-start">
                <div className="h-10 w-10 relative">
                  <Image
                    src="/wananchiLogoGold.png"
                    alt="Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-black ">
                  Wananchi One
                </h3>
              </div>
              <p className="text-[15px] text-black font-medium leading-relaxed">
                Upholding institutional standards through technology-driven
                transparency and professional governance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-16 sm:gap-32">
              <div className="flex flex-col gap-6">
                <span className="text-[12px] font-bold  text-black">
                  Legal
                </span>
                <Link
                  href="#"
                  className="text-[14px] text-black hover:text-[#D4AF37] font-bold "
                >
                  Privacy
                </Link>
                <Link
                  href="#"
                  className="text-[14px] text-black hover:text-[#D4AF37] font-bold "
                >
                  Conduct
                </Link>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-[12px] font-bold  text-black">
                  Terminal
                </span>
                <Link
                  href="/login"
                  className="text-[14px] text-black hover:text-[#D4AF37] font-bold "
                >
                  Member
                </Link>
                <Link
                  href="/login"
                  className="text-[14px] text-black hover:text-[#D4AF37] font-bold "
                >
                  Admin
                </Link>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[11px] font-bold text-black ">
              © {new Date().getFullYear()} Wananchi One Sacco. All Institutional
              Protocols Applied.
            </p>
            <p className="text-[11px] font-bold text-black ">
              Powered by{" "}
              <span className="text-black">CORBAN TECHNOLOGIES LTD</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
