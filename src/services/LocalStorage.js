import LSC from "./LocalStorageCheck";

export default class LocalStorage {
  constructor() {
    if (!LSC.LocalStorageCheck()) {
      alert("The localstorage is not available!");
    }
  }

  get = key => {
    if (this.itemExists(key))
      return JSON.parse(localStorage.getItem(key));
    return null;
  };

  set = (key, item) => {
    localStorage.setItem(key, JSON.stringify(item));
  };

  remove = key => {
    localStorage.removeItem(key);
  };

  nuke = () => {
    localStorage.clear();
  };

  itemExists = itemKey => {
    return (localStorage.getItem(itemKey)) ? true : false;
  }

  encodePassword = (username, password) => {
    return btoa(`${username}:${password}`);
  }
}
