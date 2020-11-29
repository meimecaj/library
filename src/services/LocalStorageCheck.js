const LocalStorageCheck = () => {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (e) {
        return false;
    }
};

export default { LocalStorageCheck };