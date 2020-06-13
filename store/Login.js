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
    setInfo(state, token) {
        this.$axios.$get("/user/me").then(res => {
            state.userinfo = res;
            console.log(res)
          });
        state.signed = true;
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
    async signin({commit}, credential) {
        return this.$axios.$post("/login", credential).then(res => {
            if(res.token) {
                commit("setToken", res.token);
                commit("setInfo", res.token);
            }
            else {
                return Promise.reject(res.message);
            }
            return Promise.resolve();
        }).catch(e => {
            return Promise.reject(e.response.data.message);
        })
    },
    test({ commit }) {
        console.log("hello")
    }
}