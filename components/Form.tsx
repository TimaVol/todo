import { useState } from "react";
import { useRecoilState } from "recoil";
import { notesState } from "../common/atoms";
import { getDatafromLocalStorage } from "../common/functions";
import styles from "../styles/components/Board.module.scss";

export default function Form() {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [notes, setNotes] = useRecoilState<object[]>(notesState);

  const addHandler = () => {
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
    <div className={styles.form}>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <textarea rows={5} onChange={(e) => setDescription(e.target.value)} />
      <button onClick={addHandler}>add</button>
    </div>
  );
}
