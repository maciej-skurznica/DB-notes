import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      Home
      <Link href="/notes">Notes</Link>
    </main>
  );
}
