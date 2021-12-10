import { createStore } from "vuex";
import getRandomInt from "../helpers/getRandomInt";

export default createStore({
  state: {
    count: 0,
    lastMutation: "none",
    isLoading: false,
    randomInt: 0,
  },

  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, val) {
      state.count += val;
      state.lastMutation = "incrementBy";
      state.randomInt = val;
    },
  },

  actions: {
    async incrementRandomInt(context) {
      const randomInt = await getRandomInt();
      context.commit("incrementBy", randomInt);
    },
  },
});
