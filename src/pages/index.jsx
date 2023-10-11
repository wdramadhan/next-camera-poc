import Link from "next/link";

export default function Home() {
  return (
    <main className="flex p-8 gap-4">
      <Link href="/camera">Default</Link>
      <Link href="/camera-pro">Camera Pro</Link>
    </main>
  );
}
