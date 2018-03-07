import * as firebase from 'react-native-firebase';

export const initializeApp = (config) =>
    firebase.initializeApp(config);

const auth = firebase.auth();

export {
    auth,
};
