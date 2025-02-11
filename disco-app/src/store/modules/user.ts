const state = {
  user: null,
};

const getters = {
  user: (state) => state.user,
  isAuthenticated: (state) => !!state.user,
  userRole: (state) => (state.user ? state.user.role : null),
};

const actions = {
  login({ commit }, user) {
    commit('SET_USER', user);
  },
  logout({ commit }) {
    commit('SET_USER', null);
  },
};

const mutations = {
  SET_USER(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};