import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { notesState } from "../common/atoms";
import { getDatafromLocalStorage } from "../common/functions";
import Note from "./Note";

export default function Board() {
  const [notes, setNotes] = useRecoilState<object[]>(notesState);

  useEffect(() => {
    const LocalStorageData: any = getDatafromLocalStorage();

    if (LocalStorageData.notes) {
      let data: object[] = JSON.parse(LocalStorageData.notes);

      setNotes(data);
    }
  }, [setNotes]);

  return <Note />;
}
