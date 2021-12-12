export const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};

export const incrementBy = (state, val) => {
  state.count += val;
  if (val === 5) state.lastMutation = "incrementBy";
  else state.lastMutation = "incrementRandom";
  state.randomInt = val;
};

export const setLoading = (state, val) => {
  state.isLoading = val;
  state.lastMutation = "setLoading";
};


