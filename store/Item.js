export const state = () => ({
    Item: []
})
export const mutations = {
    getAllItems(state, item) {
        state.Item = item;
        // localStorage.setItem("allitem", item);
    },
}
export const actions = {
    allitem({ commit }) {
        return this.$axios.$get("/items/all").then(res => {
            console.log("print res");
            console.log(res);
            if (res[0] != null) {
                commit("getAllItems", res);
                return Promise.resolve(res);
            } else {
                return Promise.reject(res);
            }
        }).catch(e => {
            return Promise.reject(e);
        })
    },
}