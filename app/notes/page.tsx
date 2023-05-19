import Link from "next/link";
import PocketBase from "pocketbase";
import CreateNote from "./createNote";
import { Note } from "./notes.interfaces";
import NotesList from "./notesList";

// export const dynamic = "auto",
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = "auto",
//   runtime = "nodejs",
//   preferredRegion = "auto";

// async function getNotes() {
// const db = new PocketBase("https://db-notes.fly.dev");
// const db = new PocketBase("http://127.0.0.1:8090");
// const data = await db.collection("notes").getFullList();

// const res = await fetch(
//   "https://db-notes.fly.dev/api/collections/notes/records?page=1&perPage=30",
//   { cache: "no-store" }
// );
// const data = await res.json();
// console.log(data);

//   return data as unknown as Note[];
// }

export default async function NotesPage() {
  // const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <NotesList />
      <CreateNote />
      <Link href="/">Home</Link>
    </div>
  );
}
