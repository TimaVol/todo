export function getDatafromLocalStorage() {
  let currantLocalStorage: object = {};

  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let item;
    if (key) {
      item = localStorage.getItem(key);
    }

    if (item && key) {
      currantLocalStorage = { ...currantLocalStorage, [key]: item };
    }
  }

  return currantLocalStorage;
}
