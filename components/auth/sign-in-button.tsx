'use client';
import { Button } from "@/components/ui/button";
 // adjust path if needed
import Link from "next/link";

interface SignInButtonProps {
  className?: string;
}

export function SignInButton({ className }: SignInButtonProps) {
  return (
    <Button asChild className={className}>
      <Link href="/sign-in">Sign In</Link>
    </Button>
  );
}

