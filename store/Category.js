export const state = () => ({
    Category: []
  })
  export const mutations = {
    getAllCategory(state, category) {
      state.Category = category;
    },
  }
  export const actions = {
    allcategory({
      commit
    }) {
      return this.$axios.$get("/categories/").then(res => {
        if (res[0] != null) {
          commit("getAllCategory", res);
          console.log(res)
          return Promise.resolve(res);
        } else {
          return Promise.reject(res);
        }
      }).catch(e => {
        return Promise.reject(e);
      })
    },
  }