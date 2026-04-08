"use client";

import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JournalBatchDetails({ isOpen, onClose, batch }) {
    if (!isOpen || !batch) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 animate-in fade-in duration-200">
            <div
                className="bg-white rounded shadow w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b bg-white">
                    <div className="space-y-1">
                        <div className="flex items-center gap-3">
                            <h2 className="text-lg font-bold text-black">
                                Batch Details: {batch.code}
                            </h2>
                            <Badge variant={batch.posted ? "success" : "secondary"} className="text-[10px] font-bold h-5  ">
                                {batch.posted ? "Posted" : "Draft"}
                            </Badge>
                        </div>
                        <p className="text-sm text-black font-medium">
                            {batch.description}
                        </p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-black font-medium   italic">
                            <span>Reference: <span className="text-black not-italic font-bold">{batch.reference}</span></span>
                            <span>Date: <span className="text-black not-italic font-bold">{batch.created_at && format(new Date(batch.created_at), "PPP p")}</span></span>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="h-10 w-10 rounded-full hover:bg-slate-100 transition-colors"
                    >
                        <X className="h-5 w-5 text-black" />
                    </Button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-0 scrollbar-thin scrollbar-thumb-slate-200">
                    <Table>
                        <TableHeader className="sticky top-0 bg-slate-50 z-10 shadow-sm">
                            <TableRow className="border-b-0">
                                <TableHead className="text-xs font-bold text-black px-6 py-4">ENTRY CODE</TableHead>
                                <TableHead className="text-xs font-bold text-black px-6 py-4">ACCOUNT</TableHead>
                                <TableHead className="text-xs font-bold text-black px-6 py-4 text-right">DEBIT</TableHead>
                                <TableHead className="text-xs font-bold text-black px-6 py-4 text-right">CREDIT</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {batch.entries?.map((entry, idx) => (
                                <TableRow
                                    key={entry.id || entry.reference}
                                    className={`${idx % 2 === 0 ? "bg-white" : "bg-slate-50/30"} hover:bg-slate-50 transition-colors border-b-slate-100`}
                                >
                                    <TableCell className="text-xs font-bold text-black px-6 py-4 font-mono">{entry.code}</TableCell>
                                    <TableCell className="px-6 py-4">
                                        <div className="font-bold text-black text-sm whitespace-nowrap">{entry.account}</div>
                                        <div className="text-[10px] text-black font-mono flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                            {entry.account_details?.code || "No account code"}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-sm text-right font-mono text-black font-bold px-6 py-4">
                                        {Number(entry.debit) > 0 ? Number(entry.debit).toLocaleString(undefined, { minimumFractionDigits: 2 }) : "-"}
                                    </TableCell>
                                    <TableCell className="text-sm text-right font-mono text-black font-bold px-6 py-4">
                                        {Number(entry.credit) > 0 ? Number(entry.credit).toLocaleString(undefined, { minimumFractionDigits: 2 }) : "-"}
                                    </TableCell>
                                </TableRow>
                            ))}
                            {(!batch.entries || batch.entries.length === 0) && (
                                <TableRow>
                                    <TableCell colSpan={4} className="h-32 text-center text-black italic text-sm">
                                        No entries found in this batch.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* Footer */}
                <div className="bg-slate-50/80 p-4 border-t flex justify-end">
                    <Button
                        onClick={onClose}
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold h-9 px-6 rounded text-xs"
                    >
                        Close
                    </Button>
                </div>
            </div>

            {/* Backdrop click to close */}
            <div className="absolute inset-0 -z-10" onClick={onClose} />
        </div>
    );
}

