import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-16 py-8 flex flex-col items-center ">
      <h1 className="text-2xl font-semibold">Welcome to DB notes</h1>
      <h2 className="mt-1">Please login to see your notes</h2>
      <Link
        className="mt-20 inline-block rounded bg-yellow-400 px-8 py-3 text-sm font-medium transition hover:scale-110 hover:shadow-xl active:bg-yellow-300"
        href="/notes"
      >
        Login and go to notes
      </Link>
    </main>
  );
}
