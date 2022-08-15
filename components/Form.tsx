import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { notesState } from "../common/atoms";
import { getDatafromLocalStorage } from "../common/functions";
import styles from "../styles/Home.module.scss";

export default function Form() {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [notes, setNotes] = useRecoilState(notesState);

  const addHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const prevLocalStorage: any = getDatafromLocalStorage();
    let prevNotes = JSON.parse(prevLocalStorage.notes || "[]");
    const id = Math.random().toString();

    const data = [
      {
        title,
        description,
        id,
      },
      ...prevNotes,
    ];

    setNotes(data);
    localStorage.setItem("notes", JSON.stringify(data));
  };

  return (
    <form className={styles.form} onSubmit={(e) => addHandler(e)}>
      <input type="text" required onChange={(e) => setTitle(e.target.value)} />
      <textarea
        rows={5}
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type={"submit"}>add</button>
    </form>
  );
}
