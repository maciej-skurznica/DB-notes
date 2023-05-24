import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      Home | login to see your notes and go to the notes page
      <Link href="/notes">Notes</Link>
    </main>
  );
}
