import { atom } from "recoil";

export const notesState = atom({
  key: "notesState",
  default: [] as any[],
});
