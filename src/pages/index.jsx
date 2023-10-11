import Link from "next/link";

export default function Home() {
  return (
    <main className="flex p-8 gap-4">
      <Link href="/camera">Webcam</Link>
      <Link href="/camera-pro">Camera Pro</Link>
      {/* <Link href="/scanner">Scanner</Link> */}
    </main>
  );
}
