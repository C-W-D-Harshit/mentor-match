import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { UserAuthForm } from "../_components/user-auth-form";

export const metadata: Metadata = {
  title: "Login - Mentor-Match",
  description: "Login to your Mentor-Match account",
};

export default function LoginPage() {
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
            Welcome back
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <UserAuthForm authType="login" />
        <p className="px-8 text-center text-sm text-muted-foreground">
          <Link
            href="/auth/forgot-password"
            className="hover:text-brand underline underline-offset-4"
          >
            Forgot your password?
          </Link>
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/auth/signup"
            className="hover:text-brand underline underline-offset-4"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
