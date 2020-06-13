export const state = () => ({
    info: {},
    signed: false,
    token: ""
})
export const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem("token", token);
    },
    async setInfo(state, token) {
        const userinfo = await this.$axios.$get("/user/me", {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        // state.userinfo = userinfo;
        state.signed = true;
    }
}
export const actions = {
    async signin({commit}, credential) {
        return this.$axios.$post("/login", credential).then(res => {
            console.log("print res")
            console.log(res)
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
        // const data = await this.$axios.$get("/");
    },
    test({ commit }) {
        console.log("hello")
    }
}