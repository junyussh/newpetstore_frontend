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
        localStorage.setItem("token", token);
    },
    setInfo(state, info) {
        state.signed = true;
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
    async signin({ commit, dispatch }, credential) {
        return this.$axios.$post("/login", credential).then(res => {
            if(res.token) {
                commit("setToken", res.token);
                dispatch("setInfo", res.token);
            }
            else {
                return Promise.reject(res.message);
            }
            return Promise.resolve();
        }).catch(e => {
            return Promise.reject(e.response.data.message);
        })
    },
    setInfo({ commit }) {
        return this.$axios.$get("/users/me").then(res => {
            if(res.id) {
                commit("setInfo", res);
            }
        })
    },
    setToken({ commit }, token) {
        commit("setToken", token);
    }
}