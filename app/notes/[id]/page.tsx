import Link from "next/link";
import { Note } from "@/components/notesList/notesList.interfaces";

async function getNote(noteId: string) {
  // can be fetched here like this because this is a dynamic route and it is not cached
  const res = await fetch(
    `https://db-notes.fly.dev/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data as Note;
}

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);

  return (
    <div>
      <h1>note/{note.id}</h1>
      <div>
        <h2>{note.title}</h2>
        <h5>{note.content}</h5>
        <p>{note.created}</p>
      </div>
      <Link href={"/notes"}>Back to notes</Link>
    </div>
  );
}
