import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.svg"
        alt="MentorMatch Logo"
        width={32}
        height={32}
        priority
      />
      <span className="text-xl font-bold">MentorMatch</span>
    </Link>
  );
}
