import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { UserAuthForm } from "../_components/user-auth-form";

export const metadata: Metadata = {
  title: "Sign Up - Mentor-Match",
  description: "Create your Mentor-Match account",
};

export default function SignUpPage() {
  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <Image
            src="/logo.svg"
            alt="Mentor-Match Logo"
            width={64}
            height={64}
            className="mx-auto"
          />
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <UserAuthForm authType="signup" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link
            href="/terms"
            className="hover:text-brand underline underline-offset-4"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="hover:text-brand underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="hover:text-brand underline underline-offset-4"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
