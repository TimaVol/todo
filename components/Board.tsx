import { useEffect, useState } from "react";
import { RecoilState, useRecoilState } from "recoil";
import { notesState } from "../common/atoms";
import { getDatafromLocalStorage } from "../common/functions";
import Note from "./Note";
import styles from "../styles/Home.module.scss";

export default function Board() {
  const [notes, setNotes] = useRecoilState(notesState);

  useEffect(() => {
    const LocalStorageData: any = getDatafromLocalStorage();

    if (LocalStorageData.notes) {
      let data: object[] = JSON.parse(LocalStorageData.notes);

      setNotes(data);
    }
  }, [setNotes]);

  return (
    <div className={styles.board}>
      <Note />
    </div>
  );
}
