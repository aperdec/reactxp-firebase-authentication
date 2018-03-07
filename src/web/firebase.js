import * as firebase from 'firebase';

export const initializeApp = (config) =>
    firebase.initializeApp(config);

const auth = firebase.auth();

export {
    auth,
};
