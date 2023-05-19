"use client";

import Link from "next/link";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import { Note } from "./notes.interfaces";

export default function NotesList() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function getNotes() {
      const db = new PocketBase("https://db-notes.fly.dev");
      const data = await db.collection("notes").getFullList();
      setNotes(data as unknown as Note[]);
    }
    getNotes();
  });

  return (
    <div>
      {notes.length && notes.map((note: Note) => <Note key={note.id} note={note} />)}
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
