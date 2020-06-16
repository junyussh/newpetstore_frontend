export const state = () => ({
    product: {}
})
export const mutations = {
    getAllProducts(state, product){
        state.product = product;
        localStorage.setProduct("allproduct", product);
    },
}
export const actions = {
        allproduct({ commit }) {
        return this.$axios.$get("/products/all").then(res => {
            console.log("print res")
            console.log(res)
            if(res[0] != null){
                commit("getAllProducts", res);
            }
            else {
                return Promise.reject(res.message);
            }
            return Promise.resolve();
        }).catch(e => {
            return Promise.reject(e.response);
        })
    },
}