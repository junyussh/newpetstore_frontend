export const state = () => ({
    item: {}
})
export const mutations = {
    getAllItems(state, item) {
        state.item = item;
        localStorage.setItem("allitem", item);
    },
}
export const actions = {
    allitem({ commit }) {
        return this.$axios.$get("/items/all").then(res => {
            console.log("print res");
            console.log(res);
            if (res[0] != null) {
                commit("getAllItems", res);
            } else {
                return Promise.reject(res.message);
            }
            return Promise.resolve();
        }).catch(e => {
            return Promise.reject(e.response);
        })
    },
}