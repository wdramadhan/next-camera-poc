import Link from "next/link";

export default function Home() {
  return (
    <main className="flex p-4 gap-2">
      <Link
        href="/camera"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
      >
        Default Camera
      </Link>
      <Link
        href="/camera-pro"
        className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full"
      >
        Camera Pro
      </Link>
    </main>
  );
}
