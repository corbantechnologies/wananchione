"use client";

import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X as XIcon, Shield, LogOut } from "lucide-react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import Image from "next/image";

function SaccoAdminNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <header className="bg-white border-b border-slate-100 text-black sticky top-0 z-50 shadow-sm backdrop-blur-md">
        <div className="mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/sacco-admin/dashboard"
            className="flex items-center gap-3"
          >
            <div className="h-8 w-8 relative">
              <Image
                src="/wananchiLogoGold.png"
                alt="Wananchi One"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold text-[#174271]  flex items-center gap-2">
              Wananchi One
              <span className="text-[10px] font-bold  bg-[#174271]/5 text-[#174271] px-2 py-0.5 rounded border border-[#174271]/10">
                Governance
              </span>
            </span>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="text-black hover:text-[#174271] hover:bg-slate-50 rounded"
            onClick={() => setIsMenuOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
          </Button>
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
              <Shield className="w-4 h-4 text-[#174271]" />
              <span className="text-[12px] font-bold text-[#174271] ">
                Admin Console
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
          <nav className="flex flex-col p-6 gap-1 overflow-y-auto">
            {[
              { label: "Executive Summary", href: "/sacco-admin/dashboard" },
              { label: "System Setup", href: "/sacco-admin/setup" },
              { label: "Institutional Ledger", href: "/sacco-admin/accounting" },
              { label: "Governance Reports", href: "/sacco-admin/reports" },
              { label: "Credit Facilities", href: "/sacco-admin/loan-applications" },
              { label: "Registry", href: "/sacco-admin/members" },
              { label: "Personal Profile", href: "/sacco-admin/personal" },
              { label: "Guarantor Profile", href: "/sacco-admin/personal/guarantorprofile" },
              { label: "Terminal Transact", href: "/sacco-admin/transact" },
              { label: "Capital Outflow", href: "/sacco-admin/withdrawals" },
              { label: "Global Settings", href: "/sacco-admin/settings" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-[13px] font-bold transition-all hover:bg-slate-50 hover:text-[#174271] rounded  border-l-2 border-transparent hover:border-[#174271]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-8 pt-8 border-t border-slate-50">
              <Button
                variant="outline"
                onClick={() => {
                  setIsMenuOpen(false);
                  signOut({ callbackUrl: "/login" });
                }}
                className="w-full h-12 border-slate-200 text-black hover:border-red-100 hover:text-red-500 hover:bg-red-50 font-bold  text-[12px] rounded transition-all group"
              >
                <LogOut className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Logout Terminal
              </Button>
            </div>
          </nav>

          <div className="mt-auto p-8 text-center border-t border-slate-50">
            <p className="text-[10px] font-bold text-black ">
              Governance Layer v4.0
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

export default SaccoAdminNavbar;
