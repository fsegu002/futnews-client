export const loadState = (keyName) => {
    try {
        const serializedState = localStorage.getItem(keyName);
        if (serializedState === null) {
        return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}; 