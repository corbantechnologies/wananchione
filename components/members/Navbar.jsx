"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X as XIcon, Lock, LogOut } from "lucide-react";

function MemberNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header
        className="bg-white border-b border-slate-100 text-black sticky top-0 z-50 shadow-sm backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/member/dashboard" className="flex items-center gap-3">
            <div className="h-8 w-8 relative">
              <Image
                src="/wananchiLogoGold.png"
                alt="Wananchi One"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-[#D4AF37] ">
              Wananchi One
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-black hover:text-[#D4AF37] hover:bg-slate-50 rounded"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-[300px] bg-white text-black transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-out border-l border-slate-100 shadow`}
      >
        <div className="flex flex-col h-full">
          <div className="p-8 flex justify-between items-center border-b border-slate-50">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[12px] font-bold text-[#D4AF37] ">
                Member Terminal
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-slate-50 rounded-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <XIcon className="h-5 w-5" />
            </Button>
          </div>
          <nav className="flex flex-col p-6 gap-2">
            {[
              { label: "Dashboard", href: "/member/dashboard" },
              { label: "Capital Infrastructure", href: "/member/loan-applications" },
              { label: "Guarantor Governance", href: "/member/guarantorprofile" },
              { label: "Fiscal Reports", href: "/member/reports" },
              { label: "Account Protocols", href: "/member/settings" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-[14px] font-bold  transition-all hover:bg-slate-50 hover:text-[#D4AF37] rounded border-l-2 border-transparent hover:border-[#D4AF37]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-12 pt-8 border-t border-slate-50">
              <Button
                variant="outline"
                onClick={() => {
                  setIsMenuOpen(false);
                  signOut({ callbackUrl: "/login" });
                }}
                className="w-full h-12 border-slate-200 text-black hover:border-red-100 hover:text-red-500 hover:bg-red-50 font-bold  text-[12px] rounded transition-all group"
              >
                <LogOut className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Terminate Session
              </Button>
            </div>
          </nav>

          <div className="mt-auto p-8 text-center border-t border-slate-50">
            <p className="text-[10px] font-bold text-black ">
              Precision Access Layer v2.0
            </p>
          </div>
        </div>
      </div>

      {/* Overlay for Sidebar */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/10 backdrop-blur-xs z-40 transition-opacity duration-500"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default MemberNavbar;
