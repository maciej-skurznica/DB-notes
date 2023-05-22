import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      Home | login to see your notes and go to the notes page
      <Link href="/notes">Notes</Link>
    </main>
  );
}
