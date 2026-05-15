"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { 
    LayoutDashboard, 
    Users, 
    HandCoins, 
    PiggyBank, 
    ArrowRight, 
    Download, 
    BadgePercent, 
    CheckCircle2, 
    HelpCircle,
    ShieldCheck,
    FileSpreadsheet
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { generateMigrationChecklist } from "@/lib/pdf-generator";

export default function WananchiMigrationHub() {
    const router = useRouter();

    const handleDownloadChecklist = () => {
        generateMigrationChecklist("Wananchi One");
    };


    const phases = [
        {
            id: "foundation",
            title: "Phase 1: Foundation",
            description: "Setting up your GL and Products.",
            icon: LayoutDashboard,
            steps: [
                { title: "GL Accounts", icon: LayoutDashboard, href: "/sacco-admin/setup", desc: "Setup your Chart of Accounts." },
                { title: "Payment Accounts", icon: ShieldCheck, href: "/sacco-admin/setup", desc: "Link Bank and Cash accounts." },
                { title: "Loan Products", icon: HandCoins, href: "/sacco-admin/setup", desc: "Define interest and GL rules." },
            ]
        },
        {
            id: "data",
            title: "Phase 2: Member Migration",
            description: "Bringing your member register into the system.",
            icon: Users,
            steps: [
                { title: "Member Import", icon: Users, href: "/sacco-admin/members", desc: "Invite single members, use the bulk form, or upload CSV." },
            ]
        },
        {
            id: "balances",
            title: "Phase 3: Savings & Fees",
            description: "Migrating opening balances.",
            icon: PiggyBank,
            steps: [
                { title: "Savings Migration", icon: PiggyBank, href: "/sacco-admin/saving-deposits", desc: "Post opening savings balances." },
                { title: "Fee Migration", icon: BadgePercent, href: "/sacco-admin/fee-payments", desc: "Record outstanding fee payments." },
            ]
        },
        {
            id: "loans",
            title: "Phase 4: Loan Migration",
            description: "Moving active loans into Wananchi One.",
            icon: HandCoins,
            steps: [
                { title: "Bulk Loan Apps", icon: HandCoins, href: "/sacco-admin/loan-applications", desc: "Best for automation and member tracking." },
                { title: "Legacy Migration", icon: HelpCircle, href: "/sacco-admin/onboarding/existing-loans", desc: "Manual records for non-standard loans." },
            ]
        },
        {
            id: "reports",
            title: "Phase 5: Validation",
            description: "Verifying your migration with reports.",
            icon: ShieldCheck,
            steps: [
                { title: "Sacco Reports", icon: ShieldCheck, href: "/sacco-admin/reports", desc: "Balance Sheets, P&L, and Portfolio summaries." },
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50/50 p-4 md:p-8 space-y-8 mx-auto">
            {/* Header Section */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#174271] font-semibold text-sm uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    Onboarding Center
                </div>
                <h1 className="text-3xl font-bold tracking-tight text-slate-900">Wananchi One Migration Hub</h1>
                <p className="text-slate-500 max-w-2xl">
                    Welcome to your mission control for SACCO migration. Follow the phases below to move your data from legacy systems to Wananchi One.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Roadmap */}
                <div className="lg:col-span-2 space-y-8">
                    {phases.map((phase) => (
                        <Card key={phase.id} className="overflow-hidden border-none shadow-sm">
                            <CardHeader className="bg-white border-b border-slate-100 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-slate-100 text-[#174271]">
                                        <phase.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-lg">{phase.title}</CardTitle>
                                        <CardDescription>{phase.description}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="divide-y divide-slate-100">
                                    {phase.steps.map((step, idx) => (
                                        <div 
                                            key={idx} 
                                            className="p-4 hover:bg-slate-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group cursor-pointer"
                                            onClick={() => router.push(step.href)}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="flex-shrink-0 flex flex-col items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-500 text-xs font-bold">
                                                    {idx + 1}
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                                                        {step.title}
                                                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 hidden sm:inline" />
                                                    </h3>
                                                    <p className="text-sm text-slate-500">{step.desc}</p>
                                                </div>
                                            </div>
                                            <Button variant="ghost" size="sm" className="text-[#174271] group-hover:bg-white group-hover:shadow-sm w-full sm:w-auto">
                                                Configure
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Sidebar Resources */}
                <div className="space-y-6">
                    <Card className="border-[#174271]/20 bg-[#174271]/5">
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-[#174271]" />
                                Need Help?
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-sm text-slate-600">
                                Migration can be complex. We recommend cleaning your data in Excel before attempting a bulk upload.
                            </p>
                            <Button 
                                className="w-full bg-[#174271] hover:bg-[#174271]/90 text-white gap-2 font-semibold"
                                onClick={handleDownloadChecklist}
                            >
                                <Download className="w-4 h-4" /> Download Migration Checklist
                            </Button>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg">Import Templates</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 cursor-pointer transition-colors">
                                <div className="flex items-center gap-3">
                                    <FileSpreadsheet className="w-5 h-5 text-green-600" />
                                    <span className="text-sm font-medium">Member Register</span>
                                </div>
                                <Download className="w-4 h-4 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 cursor-pointer transition-colors">
                                <div className="flex items-center gap-3">
                                    <FileSpreadsheet className="w-5 h-5 text-green-600" />
                                    <span className="text-sm font-medium">Savings Balances</span>
                                </div>
                                <Download className="w-4 h-4 text-slate-400" />
                            </div>
                            <div className="flex items-center justify-between p-3 rounded-lg border hover:bg-slate-50 cursor-pointer transition-colors">
                                <div className="flex items-center gap-3">
                                    <FileSpreadsheet className="w-5 h-5 text-green-600" />
                                    <span className="text-sm font-medium">Fee Payments</span>
                                </div>
                                <Download className="w-4 h-4 text-slate-400" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
