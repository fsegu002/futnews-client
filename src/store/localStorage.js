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

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err){
      // ignore write errors
    }
};

export const isUserSignedIn = () => {
    const state = loadState('persist:root')
    const parseUser = (userString) => {
        return JSON.parse(userString)
    }
    const token = () => {
        try{
            return parseUser(state.user).token !== undefined
        } catch(e) {
            console.warn('Did not find property token', e)
        }
    }
    return token()
}