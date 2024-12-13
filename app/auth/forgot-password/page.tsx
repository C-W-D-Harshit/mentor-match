import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ForgotPasswordForm } from "./_components/form";

export const metadata: Metadata = {
  title: "Forgot Password - Mentor-Match",
  description: "Reset your Mentor-Match account password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="w-full space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/logo.svg"
            alt="Mentor-Match Logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold">Forgot your password?</h1>
            <p className="text-gray-500">
              No worries, we&apos;ll send you reset instructions.
            </p>
          </div>
        </div>

        <ForgotPasswordForm />

        <div className="text-center">
          <Link
            href="/auth/login"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Back to{" "}
            <span className="hover:text-brand underline underline-offset-4">
              Login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
