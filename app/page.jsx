"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Users,
  Wallet,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Menu,
  CheckCircle2,
  Database,
  LineChart,
  Lock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <Image
                src="/wananchiLogoGoldNoBg.png"
                alt="Wananchi One Sacco"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="font-bold text-xl tracking-tight text-[#174271]">
                Wananchi One
              </span>
              <p className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-widest -mt-1">Sacco</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link href="#overview" className="hover:text-[#174271] transition-colors">Overview</Link>
            <Link href="#modules" className="hover:text-[#174271] transition-colors">Modules</Link>
            <Link href="#features" className="hover:text-[#174271] transition-colors">Features</Link>
            <Button asChild className="bg-[#174271] hover:bg-[#0f2a4d] text-white px-6 rounded-lg shadow-lg shadow-blue-900/20">
              <Link href="/login">Access Portal</Link>
            </Button>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#174271]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden bg-[#174271]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold tracking-wide border border-white/20 text-[#D4AF37]">
                <ShieldCheck className="w-4 h-4" /> SECURE • SCALABLE • MODERN
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Empower Your <br />
                <span className="text-[#D4AF37]">SACCO</span> Operations
              </h1>

              <p className="text-lg md:text-xl text-blue-100/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Wananchi One is a premium, ready-to-deploy platform designed for modern
                Savings and Credit Cooperatives. Manage members, track savings, and
                process loans with unparalleled efficiency.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#D4AF37] hover:bg-[#c19a2f] text-[#174271] text-base px-8 h-14 rounded-xl font-bold shadow-xl shadow-yellow-900/20"
                >
                  <Link href="/login">
                    Go to Admin Portal <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 text-base h-14 rounded-xl backdrop-blur-sm"
                >
                  <Link href="#modules">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#D4AF37]/20 to-transparent blur-2xl rounded-3xl opacity-50"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Users, label: "Members", val: "Active" },
                    { icon: Wallet, label: "Savings", val: "Tracked" },
                    { icon: TrendingUp, label: "Loans", val: "Managed" },
                    { icon: ShieldCheck, label: "Security", val: "Enterprise" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all">
                      <item.icon className="w-8 h-8 text-[#D4AF37] mb-3" />
                      <p className="text-xs text-blue-200 uppercase tracking-widest font-bold">{item.label}</p>
                      <p className="text-lg font-bold text-white">{item.val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-black text-[#D4AF37] uppercase tracking-[0.3em] mb-4">The Platform</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-[#174271] mb-8">
            Designed for Financial Excellence
          </h3>
          <p className="text-lg text-slate-600 leading-relaxed">
            The Wananchi One system provides a robust architecture for microfinance institutions.
            Built on a modular framework, it allows for seamless customization of financial
            products, member workflows, and automated reporting.
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Member Management",
                desc: "Complete lifecycle tracking from onboarding to KYC verification and role assignments.",
              },
              {
                icon: Database,
                title: "Savings & Deposits",
                desc: "Real-time tracking of various savings products with automated balance calculations.",
              },
              {
                icon: LineChart,
                title: "Loan Processing",
                desc: "End-to-end loan management including applications, appraisals, and repayment tracking.",
              },
              {
                icon: Lock,
                title: "Role-Based Access",
                desc: "Granular security levels for Admins, Staff, Treasurers, and general Members.",
              },
            ].map((module, i) => (
              <Card key={i} className="group border-0 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white">
                <CardContent className="p-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#174271]/5 flex items-center justify-center mb-8 group-hover:bg-[#174271] transition-colors duration-500">
                    <module.icon className="w-7 h-7 text-[#174271] group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-[#174271]">{module.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{module.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-[#174271] leading-tight">
                Advanced Financial <br />
                <span className="text-[#D4AF37]">Architecture</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { t: "Automated Reports", d: "Generate trial balances and income statements instantly." },
                  { t: "M-Pesa Integration", d: "Ready-to-use hooks for Daraja API payment processing." },
                  { t: "Cloud Ready", d: "Optimized for deployment on Vercel, Railway, or Heroku." },
                  { t: "Responsive UI", d: "Premium experience across mobile, tablet, and desktop." },
                ].map((feat, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex items-center gap-2 text-[#174271]">
                      <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
                      <span className="font-bold">{feat.t}</span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed">{feat.d}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#174271] rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Database className="w-64 h-64 text-white" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-1 text-[#D4AF37] bg-[#D4AF37] rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">System Summary</h3>
                <p className="text-blue-100/70 leading-relaxed">
                  Wananchi One is a comprehensive ecosystem for managing Sacco operations.
                  It provides high-performance modules for member registration, loan
                  processing, and transparent accounting frameworks.
                </p>
                <ul className="space-y-4 pt-4">
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                    Real-time Member Portals
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                    Automated Interest Calculation
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                    Secure Guarantor Management
                  </li>
                  <li className="flex items-center gap-3 text-white text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></div>
                    Dynamic Financial Reporting
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-50 py-24 text-center border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-[#174271] mb-6">Finalize Your Setup</h2>
          <p className="text-xl text-slate-600 mb-12">
            Access the admin portal to configure your SACCO products and start onboarding members.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#174271] text-white hover:bg-[#0f2a4d] text-lg px-12 h-16 rounded-xl font-bold shadow-2xl shadow-blue-900/30"
          >
            <Link href="/login">Launch Admin Dashboard</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <div className="relative h-8 w-8 grayscale">
              <Image
                src="/wananchiLogoGoldNoBg.png"
                alt="Wananchi One Sacco"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-slate-900">Wananchi One</span>
          </div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Wananchi One Sacco • Designed for SACCO Excellence Powered By <Link href="https://www.wananchimali.com" target="_blank" className="text-[#174271] hover:text-[#D4AF37]"> Wananchi Mali</Link></p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;