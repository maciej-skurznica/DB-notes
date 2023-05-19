import Link from "next/link";
import PocketBase from "pocketbase";
import CreateNote from "./createNote";
import { Note } from "./notes.interfaces";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

async function getNotes() {
  const db = new PocketBase("https://db-notes.fly.dev");
  const data = await db.collection("notes").getFullList();

  // const res = await fetch(
  //   "https://db-notes.fly.dev/api/collections/notes/records?page=1&perPage=30",
  //   { cache: "no-store" }
  // );
  // const data = await res.json();
  // console.log(data);

  return data as unknown as Note[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
      <CreateNote />
      <Link href="/">Home</Link>
    </div>
  );
}

function Note({ note }: { note: Note }) {
  const { id, title, content, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
