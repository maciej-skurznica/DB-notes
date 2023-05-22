import Link from "next/link";
import CreateNote from "./createNote";
import NotesList from "./notesList";

export default async function NotesPage() {
  return (
    <div>
      <h1>all the Notes</h1>
      <NotesList />
      <CreateNote />
      <Link href="/">Home</Link>
    </div>
  );
}
