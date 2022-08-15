import { useRecoilState } from "recoil";
import { notesState } from "../common/atoms";
import { getDatafromLocalStorage } from "../common/functions";
import styles from "../styles/Home.module.scss";
export default function Note() {
  const [notes, setNotes] = useRecoilState<object[]>(notesState);

  const deleteHendler = (id: string) => {
    const LocalStorageData: any = getDatafromLocalStorage();
    if (LocalStorageData.notes) {
      const data = JSON.parse(LocalStorageData.notes);
      const dataWithoutItem = data.filter(
        (itm: { id: string }) => itm.id !== id
      );

      localStorage.setItem("notes", JSON.stringify(dataWithoutItem));
      setNotes(dataWithoutItem);
    }
  };
  return (
    <>
      {notes?.map((item: any) => (
        <div key={Math.random()} className={styles.note}>
          <h3>{item?.title}</h3>
          <p>{item?.description}</p>
          <button onClick={() => deleteHendler(item?.id)}>delete</button>
        </div>
      ))}
    </>
  );
}
