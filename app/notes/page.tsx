import Link from "next/link";
import CreateNote from "../../components/createNote";
import NotesList from "../../components/notesList";

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
