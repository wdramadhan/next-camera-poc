import Link from "next/link";

export default function Home() {
  return (
    <main className="flex p-8 gap-4">
      <Link href="/camera">Camera Page</Link>
      <Link href="/scanner">Scanner Page</Link>
    </main>
  );
}
