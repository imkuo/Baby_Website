import { fireDb, fireAuth } from "@/plugins/firebase.js";

export const state = {
  user: null
};

export const mutations = {
  setUser (state, payload) { state.user = payload; }
};

export const actions = {
    register ({ commit }, payload) {
    return fireAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then((user) => {
        // eslint-disable-next-line no-console
        console.log("Create User", user);
      });
  },
  signInWithEmail ({ commit }, payload) {
    return fireAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("User Signin");
        const user = fireAuth.currentUser;
        commit("setUser", {
          email: user.email
        });
      });
  },
  signOut ({ commit }) {
    return fireAuth.signOut()
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("User Signout");
        commit("setUser", null);
      });
  }
};
