export const state = () => ({
  Product: []
})
export const mutations = {
  getAllProducts(state, product) {
    state.Product = product;
  },
}
export const actions = {
  allproduct({
    commit
  }) {
    return this.$axios.$get("/products/all").then(res => {
      if (res[0] != null) {
        commit("getAllProducts", res);
        return Promise.resolve(res);
      } else {
        return Promise.reject(res);
      }
    }).catch(e => {
      return Promise.reject(e);
    })
  },
}
