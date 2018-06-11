

export const state = () => ({
  authenticated: false
});

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    commit('SET_AUTHENTICATED')
  }
};

export const mutations = {
  SET_AUTHENTICATED (state) {
    state.authenticated = true;
  }
};
