
import Cookie from 'js-cookie';

export const state = () => ({
  token: null,
  user: null
});

export const mutations = {
  SET_TOKEN(state, token) {
    Cookie.set(process.env.TOKEN, token, { secure: true });
    state.token = token;
  }
}
