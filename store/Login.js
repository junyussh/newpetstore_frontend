const cookieparser = process.server ? require('cookieparser') : undefined;
const Cookie = process.client ? require('js-cookie') : undefined
export const state = () => ({
    info: {},
    signed: false,
    token: ""
})
export const mutations = {
    setSigned(state, status) {
        state.signed = status;
    },
    setToken(state, token) {
        state.token = token;
    },
    setSigned(state, signed) {
        state.signed = signed;
    },
    setInfo(state, info) {
        state.info = info;
        // state.signed = true;
        // commit("setSigned", true);
    }
}
export const actions = {
    // async userinfo({commit}, token) {
        // const info = await this.$axios.$get("/user/me", {
        //     headers: {
        //       'Authorization': `Bearer ${token}`
        //     }
        //   });
    //     console.log(info)
    //     commit("setInfo", info);
    // },
    async signin({ commit, dispatch, state }, credential) {
        return this.$axios.$post("/login", credential).then(async function(res) {
            if(res.token) {
                commit("setToken", res.token);
                commit("setSigned", true);
                await dispatch("setInfo");
            }
            else {
                return Promise.reject(res.message);
            }
            return Promise.resolve();
        }).catch(e => {
            return Promise.reject(e);
        })
    },
    logout({ commit }) {
        commit("setSigned", false);
        commit("setToken", null);
        Cookie.remove("token");
    },
    setInfo({ commit }) {
        return this.$axios.$get("/users/me").then(res => {
            if(res.id) {
                commit("setInfo", res);
            }
            return Promise.resolve();
        })
    },
    setToken({ commit }, token) {
        commit("setToken", token);
    },
    async nuxtServerInit ({ commit }, { req }) {
        let token = null
        if (req.headers.cookie) {
          const parsed = cookieparser.parse(req.headers.cookie)
          try {
            token = parsed.token
          } catch (err) {
            // No valid cookie found
          }
        }
        commit('setToken', token)
        dispatch("setInfo")
      }
}