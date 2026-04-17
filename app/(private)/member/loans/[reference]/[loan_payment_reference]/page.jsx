"use client";

import useAxiosAuth from "@/hooks/authentication/useAxiosAuth";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Loader2, ArrowLeft, Phone } from "lucide-react";
import * as Yup from "yup";
import toast from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
    Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MemberLoadingSpinner from "@/components/general/MemberLoadingSpinner";
import { formatCurrency } from "@/lib/utils";
import { generateLoanSTKPush } from "@/services/mpesa";
import { useFetchLoanRepaymentDetail } from "@/hooks/loanrepayments/actions";

export default function LoanPaymentProcessing() {
    const [loading, setLoading] = useState(false);
    const [paymentMessage, setPaymentMessage] = useState("");
    const [isPolling, setIsPolling] = useState(false);

    const router = useRouter();
    const { reference, loan_payment_reference } = useParams(); // reference = loan reference
    const token = useAxiosAuth();

    const {
        data: loan_payment,
        isLoading: isLoadingLoanPayment,
        refetch: refetchLoanPayment,
    } = useFetchLoanRepaymentDetail(loan_payment_reference, token);

    const pollPaymentStatus = async () => {
        setIsPolling(true);
        const maxRetries = 24; // ~2 minutes
        let tries = 0;

        const interval = setInterval(async () => {
            tries++;
            try {
                const result = await refetchLoanPayment();
                const currentStatus = result?.data?.payment_status;
                const txnStatus = result?.data?.transaction_status;

                if (currentStatus === "COMPLETED" || txnStatus === "Completed") {
                    clearInterval(interval);
                    setPaymentMessage("Payment Successful! Redirecting...");
                    toast.success("Payment completed successfully!");

                    setTimeout(() => {
                        router.push(`/member/loans/${reference}`); // ← Correct: use loan reference
                    }, 1800);

                    setIsPolling(false);
                } else if (["FAILED", "CANCELLED", "REVERSED"].includes(currentStatus)) {
                    clearInterval(interval);
                    setPaymentMessage(`Payment ${currentStatus.toLowerCase()}. Please try again.`);
                    toast.error(`Payment ${currentStatus.toLowerCase()}`);
                    setIsPolling(false);
                    setLoading(false);
                } else if (tries >= maxRetries) {
                    clearInterval(interval);
                    setPaymentMessage("Payment verification timed out. Please check your M-Pesa messages.");
                    toast("Taking longer than expected...", { icon: "⏳" });
                    setIsPolling(false);
                    setLoading(false);
                }
            } catch (e) {
                console.error("Polling error", e);
            }
        }, 5000);
    };

    if (isLoadingLoanPayment && !isPolling) return <MemberLoadingSpinner />;
    if (!loan_payment) return <div className="p-8 text-center">Loan payment record not found</div>;

    const validationSchema = Yup.object().shape({
        phone_number: Yup.string()
            .required("Phone number is required")
            .matches(/^(2547|2541)\d{8}$/, "Phone number must start with 2547 or 2541 and be 12 digits"),
    });

    return (
        <div className="min-h-screen bg-gray-50/50 p-4 sm:p-8 flex items-center justify-center">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-1">
                    <div className="flex items-center space-x-2 mb-2">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => router.back()}
                            className="h-8 w-8"
                            disabled={loading || isPolling}
                        >
                            <ArrowLeft className="h-4 w-4" />
                        </Button>
                        <CardTitle className="text-2xl font-bold text-[#045e32]">
                            Complete Loan Payment
                        </CardTitle>
                    </div>
                    <CardDescription>Confirm details to initiate M-Pesa STK Push</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    {/* Payment Summary */}
                    <div className="bg-gray-50 p-4 rounded border space-y-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Amount</span>
                            <span className="font-bold text-lg">{formatCurrency(loan_payment.amount)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Loan Account</span>
                            <span className="font-mono">{loan_payment.loan_account}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Reference</span>
                            <span className="font-mono">{loan_payment.reference}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Status</span>
                            <span className={`px-3 py-1 rounded text-xs font-medium ${loan_payment.payment_status === "COMPLETED" ? "bg-green-100 text-green-800" :
                                    loan_payment.payment_status === "FAILED" ? "bg-red-100 text-red-800" :
                                        "bg-yellow-100 text-yellow-800"
                                }`}>
                                {loan_payment.payment_status || "PENDING"}
                            </span>
                        </div>
                    </div>

                    {paymentMessage && (
                        <div className={`p-4 rounded text-center text-sm ${paymentMessage.includes("Successful") ? "bg-green-50 text-green-700" :
                                paymentMessage.includes("failed") ? "bg-red-50 text-red-700" :
                                    "bg-blue-50 text-blue-700"
                            }`}>
                            {paymentMessage}
                        </div>
                    )}

                    {!isPolling && loan_payment.payment_status !== "COMPLETED" && (
                        <Formik
                            initialValues={{
                                phone_number: loan_payment.mpesa_phone_number || "",
                                loan_payment_reference: loan_payment.reference,
                            }}
                            validationSchema={validationSchema}
                            onSubmit={async (values) => {
                                setLoading(true);
                                setPaymentMessage("Sending STK Push to your phone...");

                                try {
                                    await generateLoanSTKPush({
                                        phone_number: values.phone_number,
                                        loan_payment_reference: values.loan_payment_reference,
                                    });

                                    setPaymentMessage("STK Push sent! Check your phone.");
                                    toast.success("STK Push sent successfully!");
                                    pollPaymentStatus();
                                } catch (error) {
                                    console.error(error);
                                    toast.error(error?.response?.data?.error || "Failed to send STK Push");
                                    setPaymentMessage("Failed to initiate payment. Try again.");
                                    setLoading(false);
                                }
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone_number">M-Pesa Phone Number</Label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                                            <Field
                                                as={Input}
                                                id="phone_number"
                                                name="phone_number"
                                                className={`pl-10 ${errors.phone_number && touched.phone_number ? "border-red-500" : ""}`}
                                                placeholder="254712345678"
                                            />
                                        </div>
                                        <ErrorMessage name="phone_number" component="div" className="text-red-500 text-sm" />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#045e32] hover:bg-[#034625] h-12 text-lg"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                Sending STK Push...
                                            </>
                                        ) : (
                                            "Pay Now with M-Pesa"
                                        )}
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    )}

                    {isPolling && (
                        <div className="flex flex-col items-center justify-center py-8 space-y-4">
                            <Loader2 className="h-12 w-12 text-[#045e32] animate-spin" />
                            <p className="text-sm text-gray-600 text-center">
                                Waiting for M-Pesa confirmation...<br />
                                This usually takes 10–30 seconds after entering your PIN.
                            </p>
                        </div>
                    )}
                </CardContent>

                <CardFooter className="text-center border-t bg-gray-50 rounded-b-xl p-4">
                    <p className="text-xs text-muted-foreground">
                        You will receive a prompt on your phone. Enter your M-Pesa PIN to confirm.
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}