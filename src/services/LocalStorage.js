const LSCheck = () => {
  try {
    localStorage.setItem("test", "test");
    localStorage.removeItem("test");
    return true;
  } catch (e) {
    return false;
  }
};

export default class LocalStorage {
  constructor() {
    if (!LSCheck()) {
      alert("The localstorage is not available!");
    }
  }

  get = key => {
    if (this.itemExists(key))
      return JSON.parse(localStorage.getItem(key));
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
