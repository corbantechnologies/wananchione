"use client";

import React from "react";
import { 
    HelpCircle, 
    ArrowRight, 
    Rocket, 
    PiggyBank, 
    HandCoins, 
    FileText, 
    ShieldCheck, 
    UserCircle,
    Mail,
    MessageCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function WananchiMemberHelpCenter() {
    const primaryColor = "#D4AF37";

    const quickLinks = [
        { title: "Getting Started", icon: Rocket, desc: "New here? Learn the basics of Wananchi One." },
        { title: "Savings Guide", icon: PiggyBank, desc: "How to manage your deposits and interest." },
        { title: "Loan Application", icon: HandCoins, desc: "Step-by-step guide to applying for credit." },
        { title: "Statements", icon: FileText, desc: "How to download your financial reports." }
    ];

    const faqs = [
        {
            q: "How do I activate my account?",
            a: "Check your email for an invitation from Wananchi One. Click the link to set your password and log in with your Member Number."
        },
        {
            q: "How long does it take for my payment to reflect?",
            a: "To ensure accurate reconciliation with the SACCO's bank records, payment balances are typically updated by the end of the day. You can check your dashboard in the evening to see your new balance."
        },
        {
            q: "How do I apply for a loan?",
            a: "Go to the Loans section, select your desired product, and use the calculator to check your limits and repayment terms."
        },
        {
            q: "What is an 'Amendment'?",
            a: "If the Admin reviews your loan and suggests a change in the amount or terms, your loan will move to 'Amended' status. You must accept or reject these changes to proceed."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 space-y-8 mx-auto">
            {/* Hero Section */}
            <div className="text-center space-y-4 py-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                    <HelpCircle className="w-4 h-4" />
                    Wananchi Support
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900">
                    How can we help you grow?
                </h1>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    Welcome to the Wananchi One Member Support Center.
                </p>
            </div>

            {/* Quick Link Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickLinks.map((link, idx) => (
                    <Card key={idx} className="hover:border-[#D4AF37] transition-all hover:shadow-md cursor-pointer group">
                        <CardHeader className="space-y-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                                <link.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <CardTitle className="text-lg">{link.title}</CardTitle>
                                <CardDescription className="text-xs leading-relaxed">{link.desc}</CardDescription>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
                        Frequently Asked Questions
                    </h2>
                    <Card>
                        <CardContent className="pt-6">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, idx) => (
                                    <AccordionItem key={idx} value={`item-${idx}`}>
                                        <AccordionTrigger className="text-left font-semibold text-slate-800 hover:text-[#D4AF37]">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-slate-600 leading-relaxed">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                        <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
                        Contact Us
                    </h2>
                    <Card className="bg-[#D4AF37] text-white border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>Still have questions?</CardTitle>
                            <CardDescription className="text-white/80">
                                Our support team is here for the Wananchi community.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex flex-col sm:flex-row items-center gap-4 p-3 bg-white/10 rounded-lg text-center sm:text-left">
                                <Mail className="w-5 h-5 flex-shrink-0" />
                                <div className="text-sm">
                                    <p className="font-bold">Email Support</p>
                                    <p className="opacity-80 text-xs">support@wananchione.com</p>
                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row items-center gap-4 p-3 bg-white/10 rounded-lg text-center sm:text-left">
                                <UserCircle className="w-5 h-5 flex-shrink-0" />
                                <div className="text-sm">
                                    <p className="font-bold">Admin Office</p>
                                    <p className="opacity-80 text-xs">Visit your local SACCO branch</p>
                                </div>
                            </div>
                            <Button className="w-full bg-white text-[#D4AF37] hover:bg-slate-100 font-bold mt-4">
                                Open a Support Ticket
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
