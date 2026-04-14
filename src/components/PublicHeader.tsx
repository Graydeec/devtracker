"use client";

import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function AuthLayout() {
  return (
    <header className="flex justify-between items-center p-4 gap-4 h-16 border-b">
      <div className="font-semibold text-xl">DevTracker</div>
      <div className="flex items-center gap-6">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
        <Show when="signed-out">
          <SignInButton fallbackRedirectUrl="/dashboard" />
          <SignUpButton fallbackRedirectUrl="/dashboard">
            <button className="bg-purple-700 text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </Show>

        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </header>
  );
}
